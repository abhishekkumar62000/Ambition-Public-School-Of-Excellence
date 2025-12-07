import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const names = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
  "Reyansh", "Mohammad", "Krishna", "Dhruv", "Kabir",
  "Ananya", "Sara", "Pari", "Aadhya", "Diya",
  "Ira", "Prachi", "Myra", "Zara", "Sneha",
];

const classes = [
  "Pre-Nursery", "Nursery", "KG-1", "KG-2",
  "Class 1", "Class 2", "Class 3", "Class 4",
  "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
];

function randomItem<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }
function randomCity() {
  // Constrain to local region only
  const cities = ["Darbhanga", "Madhubani"];
  return randomItem(cities);
}

export default function EnrollmentTicker() {
  const [running, setRunning] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const pushToast = () => {
      const name = randomItem(names);
      const klass = randomItem(classes);
      const city = randomCity();
      toast.success(`${name} just enrolled in ${klass}!`, {
        description: `New admission from ${city}. Welcome to Ambition!`,
        duration: 5000,
      });
    };

    // initial burst to show activity (local region only)
    pushToast();
    setTimeout(pushToast, 1500);
    setTimeout(pushToast, 3000);

    const start = () => {
      stop();
      // random interval between 10s and 20s
      timerRef.current = window.setInterval(() => {
        // occasionally show two quick successive enrollments
        pushToast();
        if (Math.random() < 0.33) {
          setTimeout(pushToast, 1200);
        }
      }, 10000 + Math.random() * 10000);
    };

    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    if (running) start(); else stop();
    return () => stop();
  }, [running]);

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-2 px-3 py-2 rounded-md bg-secondary text-secondary-foreground shadow">
      <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm font-medium">Live enrollments</span>
      <button
        className="ml-2 text-xs underline opacity-80 hover:opacity-100"
        onClick={() => setRunning((r) => !r)}
        aria-label={running ? "Pause" : "Resume"}
      >
        {running ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
