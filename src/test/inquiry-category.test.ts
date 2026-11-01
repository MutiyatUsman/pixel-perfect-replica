import { expect, it } from "vitest";
import { inquiryCategory } from "@/lib/inquiry";
it("accepts supplied contact inquiry categories", () => { expect(inquiryCategory("Research Collaboration")).toBe("Research Collaboration"); expect(inquiryCategory("Training & Education")).toBe("Training & Education"); });
it("rejects unsupported query categories", () => { expect(inquiryCategory("Medical Diagnosis")).toBe(""); expect(inquiryCategory(undefined)).toBe(""); });