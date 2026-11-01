import { describe, expect, it } from "vitest";
import { courses, embedUrl, playlistUrl, filterCourses, evidenceRecords, researchRoadmap } from "@/lib/content";
describe("approved educational sources", () => {
  it("preserves the exact mathematics playlist", () => {
    expect(courses[0].playlist).toBe("PLP9EKz-oSPSNsZ1tHxRnMlAiCPsCFIyV-");
    expect(embedUrl(courses[0].playlist)).toBe("https://www.youtube.com/embed/videoseries?list=PLP9EKz-oSPSNsZ1tHxRnMlAiCPsCFIyV-");
  });
  it("preserves the exact machine learning playlist", () => {
    expect(playlistUrl(courses[1].playlist)).toBe("https://www.youtube.com/playlist?list=PLP9EKz-oSPSOiZjZI_jEfVM0cnwdL4gNE");
  });
  it("lists only the two supplied courses", () => { expect(filterCourses("All", "All")).toHaveLength(2); });
  it("filters by category", () => { expect(filterCourses("Mathematics & Statistics Foundations", "All").map(c => c.slug)).toEqual(["foundation-math-statistics-ai"]); });
  it("filters by level", () => { expect(filterCourses("All", "Foundational / Introductory").map(c => c.slug)).toEqual(["machine-learning-types"]); });
  it("does not invent biomedical courses", () => { expect(filterCourses("Biomedical Data Science", "All")).toEqual([]); });
  it("does not invent evidence entries", () => { expect(evidenceRecords).toEqual([]); });
  it("does not mark unverified phases completed", () => { expect(researchRoadmap.filter(m => m.status === "Completed")).toEqual([]); expect(researchRoadmap).toHaveLength(5); });
});