import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  grade: z.string().min(1, "Enter grade/class"),
  phone: z.string().min(8, "Enter a valid phone"),
});

type FormData = z.infer<typeof schema>;

export const QuickApply = ({ label = "Quick Apply" }: { label?: string }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Post to Google Form or Formspree; demo uses Formspree placeholder
    try {
      await fetch("https://formspree.io/f/xbldzvqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
      alert("Thanks! We'll contact you soon.");
    } catch (e) {
      alert("Could not submit right now. Please try again.");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="lg" className="gap-2">
          {label}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Quick Admission Form</SheetTitle>
        </SheetHeader>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input placeholder="Full Name" {...register("name")} />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder="Grade / Class" {...register("grade")} />
            {errors.grade && <p className="text-destructive text-sm mt-1">{errors.grade.message}</p>}
          </div>
          <div>
            <Input placeholder="Phone" {...register("phone")} />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">Submit</Button>
          <p className="text-xs text-muted-foreground">We’ll call you to assist with admissions.</p>
        </form>
      </SheetContent>
    </Sheet>
  );
};
