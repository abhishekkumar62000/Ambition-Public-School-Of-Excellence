import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

 type EventItem = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: "event" | "holiday";
  location?: string;
  description?: string;
  googleCalendarUrl?: string;
  ics?: {
    title: string;
    start: string; // ISO
    end: string; // ISO
    description?: string;
    location?: string;
  };
};

function makeIcsUrl(ics: NonNullable<EventItem["ics"]>) {
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ambition Public School//Events//EN",
    "BEGIN:VEVENT",
    `DTSTART:${ics.start.replace(/[-:]/g, "").replace(/\.\d+Z?$/, "Z")}`,
    `DTEND:${ics.end.replace(/[-:]/g, "").replace(/\.\d+Z?$/, "Z")}`,
    `SUMMARY:${ics.title}`,
    ics.description ? `DESCRIPTION:${ics.description}` : undefined,
    ics.location ? `LOCATION:${ics.location}` : undefined,
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean).join("\r\n");
  const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
  return URL.createObjectURL(blob);
}

const EventsPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  useEffect(() => {
    fetch("/events.json").then(r => r.json()).then(setEvents).catch(() => setEvents([]));
  }, []);

  const upcoming = useMemo(() => {
    const today = new Date();
    return events
      .filter(e => new Date(e.date) >= today)
      .sort((a,b) => +new Date(a.date) - +new Date(b.date))
      .slice(0, 6);
  }, [events]);

  const dayEvents = useMemo(() => {
    if (!selected) return [];
    const d = selected.toISOString().slice(0,10);
    return events.filter(e => e.date === d);
  }, [selected, events]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">Events & Holidays</h1>
        <p className="text-muted-foreground mb-8">Stay updated with upcoming school activities and holidays.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar selected={selected} onSelect={setSelected} className="rounded-md border" />
              <div className="mt-4 space-y-3">
                {dayEvents.length === 0 && (
                  <div className="text-muted-foreground">No items on this day.</div>
                )}
                {dayEvents.map(e => (
                  <div key={e.id} className="p-3 rounded-lg border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant={e.type === "holiday" ? "secondary" : "default"}>{e.type}</Badge>
                      <div>
                        <div className="font-medium">{e.title}</div>
                        {e.location && <div className="text-xs text-muted-foreground">{e.location}</div>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {e.googleCalendarUrl && (
                        <Button asChild variant="outline" size="sm"><a href={e.googleCalendarUrl} target="_blank">Google Calendar</a></Button>
                      )}
                      {e.ics && (
                        <Button variant="secondary" size="sm" onClick={() => window.open(makeIcsUrl(e.ics), "_blank")}>Add .ics</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcoming.length === 0 && <div className="text-muted-foreground">No upcoming items.</div>}
                {upcoming.map(e => (
                  <div key={e.id} className="p-3 rounded-lg border hover:bg-muted/30 transition">
                    <div className="text-sm text-muted-foreground">{new Date(e.date).toLocaleDateString()}</div>
                    <div className="font-medium">{e.title}</div>
                    {e.type === "holiday" && <Badge variant="secondary" className="mt-1">Holiday</Badge>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
