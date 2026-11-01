import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export type Field = { name: string; label: string; type?: "text" | "email" | "textarea" | "select"; options?: string[]; required?: boolean; initialValue?: string };

export function InquiryForm({ title, fields, submitLabel = "Submit" }: { title: string; fields: Field[]; submitLabel?: string }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

  };
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="mt-4 text-sm text-muted-foreground">Inquiry delivery is not configured yet. This form cannot send or save messages. Please do not include sensitive health information or restricted research data.</p>
      {sent && <div role="alert" className="mt-5 rounded-lg border border-destructive/30 bg-secondary p-4 text-sm text-foreground">Your message was not sent. A delivery service must be configured before submissions can be received.</div>}
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
              <span className="mb-1.5 block text-xs font-semibold text-foreground">
                {f.label}{f.required !== false && <span className="text-accent"> *</span>}
              </span>
              {f.type === "textarea" ? (
                <textarea name={f.name} required={f.required !== false} rows={4} maxLength={2000} className="field" />
              ) : f.type === "select" ? (
                <select name={f.name} required={f.required !== false} className="field" defaultValue={f.initialValue ?? ""}>
                  <option value="" disabled>Select…</option>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input name={f.name} type={f.type ?? "text"} required={f.required !== false} maxLength={200} className="field" />
              )}
            </label>
          ))}
          <div className="sm:col-span-2">
            <Button type="submit">{submitLabel}</Button>
          </div>
        </form>
    </div>
  );
}

export const contactFields: Field[] = [
  { name: "name", label: "Full name" },
  { name: "email", label: "Email", type: "email" },
];
