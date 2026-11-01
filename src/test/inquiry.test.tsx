import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InquiryForm } from "@/components/site/InquiryForm";
describe("unconfigured delivery", () => {
  it("reports non-delivery and preserves the message", () => {
    render(<InquiryForm title="Inquiry" fields={[{ name: "message", label: "Message", type: "textarea" }]} />);
    const input = screen.getByLabelText(/Message/);
    fireEvent.change(input, { target: { value: "Research collaboration question" } });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByRole("alert").textContent).toContain("Your message was not sent");
    expect(input).toHaveValue("Research collaboration question");
  });
});