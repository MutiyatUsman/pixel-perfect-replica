import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Get in touch with SheSMAT Foundation."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p><strong className="block text-foreground">Organization</strong>SheSMAT Foundation</p>
            <p><strong className="block text-foreground">Location</strong>North Carolina, United States</p>
          </div>
          <div className="lg:col-span-2">
            <InquiryForm title="Send a message" submitLabel="Send message" fields={[...contactFields, { name: "subject", label: "Subject", type: "select", options: ["General inquiry", "Training", "Outreach", "Mentorship", "Collaboration", "Media"] }, { name: "message", label: "Message", type: "textarea" }]} />
          </div>
        </div>
      </Section>
    </>
  );
}
