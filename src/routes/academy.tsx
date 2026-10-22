import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, BulletList } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/academy")({
  head: () => meta("Training Academy", "SheSMAT Training Academy: courses in statistics, programming, data science, biomedical analytics, and research development."),
  component: Academy,
});

const categories: [string, string, string[]][] = [
  ["Statistics and Data Analysis", "Beginner", ["Introduction to Statistics", "Statistical Reasoning", "Regression Analysis", "Statistical Inference", "Data Visualization", "Applied Data Analysis"]],
  ["Programming for Research", "Beginner", ["Introduction to Python", "R for Statistical Computing", "Data Cleaning and Preparation", "Reproducible Computational Workflows", "Research Automation"]],
  ["Data Science and Machine Learning", "Intermediate", ["Introduction to Data Science", "Foundations of Machine Learning", "Model Evaluation", "Responsible AI", "Interpretable Analytics"]],
  ["Biomedical Research Analytics", "Advanced", ["Introduction to Biomedical Data", "Multimodal Data Analysis", "Missing-Data Challenges", "Statistical Modeling for Biomedical Research", "Reproducible Research Practices"]],
  ["Research and Academic Development", "All levels", ["Research Design", "Scientific Writing", "Research Presentations", "Literature Reviews", "Research Ethics", "Academic and Professional Development"]],
];
const levels = ["All", "Beginner", "Intermediate", "Advanced", "All levels"];

function Academy() {
  const [level, setLevel] = useState("All");
  const shown = categories.filter((c) => level === "All" || c[1] === level);
  return (
    <>
      <PageHero eyebrow="SheSMAT Training Academy" title="Building Skills. Developing Talent. Expanding Opportunity." subtitle="Practical, accessible training for students, researchers, and professionals." />
      <Section eyebrow="Course catalog" title="Training categories" tone="white">
        <div className="mb-8 flex flex-wrap gap-2">
          {levels.map((l) => (
            <button key={l} onClick={() => setLevel(l)} className={`btn !py-2 ${level === l ? "btn-primary" : "btn-outline"}`}>{l}</button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(([t, lvl, items]) => (
            <div key={t} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-accent">{lvl}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">Coming Soon</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary">{t}</h3>
              <div className="mt-4 flex-1"><BulletList items={items} /></div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Enrollment" title="Register your interest" intro="Be the first to know when registration opens for courses and workshops.">
        <div className="max-w-3xl">
          <InquiryForm title="Course interest registration" submitLabel="Register interest" fields={[...contactFields, { name: "category", label: "Training category", type: "select", options: categories.map((c) => c[0]) }, { name: "notes", label: "Goals or questions", type: "textarea", required: false }]} />
        </div>
      </Section>
    </>
  );
}
