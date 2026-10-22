import { useState, type FormEvent } from "react";

export type Field = { name: string; label: string; type?: "text" | "email" | "textarea" | "select"; options?: string[]; required?: boolean };

export function InquiryForm({ title, fields, submitLabel = "Submit" }: { title: string; fields: Field[]; submitLabel?: string }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      {sent ? (
        <div role="status" className="mt-6 rounded-xl bg-secondary p-5 text-sm text-foreground">
          Thank you — your submission has been received. Our team will follow up by email.
          <button className="ml-2 font-semibold text-accent underline" onClick={() => setSent(false)}>Submit another</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
              <span className="mb-1.5 block text-xs font-semibold text-foreground">
                {f.label}{f.required !== false && <span className="text-accent"> *</span>}
              </span>
              {f.type === "textarea" ? (
                <textarea name={f.name} required={f.required !== false} rows={4} maxLength={2000} className="field" />
              ) : f.type === "select" ? (
                <select name={f.name} required={f.required !== false} className="field" defaultValue="">
                  <option value="" disabled>Select…</option>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input name={f.name} type={f.type ?? "text"} required={f.required !== false} maxLength={200} className="field" />
              )}
            </label>
          ))}
          <div className="sm:col-span-2">
            <button type="submit" className="btn btn-teal">{submitLabel}</button>
          </div>
        </form>
      )}
    </div>
  );
}

export const contactFields: Field[] = [
  { name: "name", label: "Full name" },
  { name: "email", label: "Email", type: "email" },
];
