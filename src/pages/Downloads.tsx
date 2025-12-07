import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

 type DocItem = { id: string; title: string; type: "pdf" | "link"; tag: string; url: string };

const DownloadsPage = () => {
  const [docs, setDocs] = useState<DocItem[]>([]);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    fetch('/docs.json').then(r => r.json()).then(setDocs).catch(() => setDocs([]));
  }, []);

  const tags = useMemo(() => Array.from(new Set(docs.map(d => d.tag))), [docs]);

  const filtered = useMemo(() => {
    return docs.filter(d => {
      const q = query.trim().toLowerCase();
      const matchesQ = !q || d.title.toLowerCase().includes(q);
      const matchesTag = !tag || d.tag === tag;
      return matchesQ && matchesTag;
    });
  }, [docs, query, tag]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">Downloads</h1>
        <p className="text-muted-foreground mb-6">Prospectus, fee structure, syllabus, and more.</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search documents..." />
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={!tag ? "default" : "outline"} className="cursor-pointer" onClick={() => setTag(null)}>All</Badge>
            {tags.map(t => (
              <Badge key={t} variant={tag === t ? "default" : "outline"} className="cursor-pointer" onClick={() => setTag(t)}>{t}</Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(d => (
            <Card key={d.id} className="p-4">
              <div className="text-xs text-muted-foreground mb-1">{d.type.toUpperCase()}</div>
              <div className="font-medium mb-3">{d.title}</div>
              <Button asChild variant="secondary"><a href={d.url} target="_blank">{d.type === 'pdf' ? 'View / Download' : 'Open Link'}</a></Button>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadsPage;
