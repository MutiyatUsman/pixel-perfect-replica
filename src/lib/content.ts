export const mission = "SheSMAT Foundation exists to support the dissemination, translation, and responsible scaling of NeuroGraph Sparse Analytics, a statistical research framework developed to address challenges involving high-dimensional, interconnected, and incomplete neurological data.";
export const missionDetails = "With Alzheimer's disease and related dementias as its principal initial biomedical application, the Foundation seeks to build the collaborative infrastructure needed to connect statistical methodological research with researchers, educational institutions, community organizations, and potential implementation partners.";
export const missionAction = "Through research dissemination, technical capacity building, interdisciplinary partnerships, and community engagement, SheSMAT Foundation aims to expand access to advanced analytical knowledge and create pathways for the evaluation and application of innovative statistical methods to complex biomedical challenges.";
export const vision = "To establish a collaborative research-to-community ecosystem that advances the responsible use of statistical innovation in Alzheimer's disease and related neurological research, while building the capacity, partnerships, and dissemination channels necessary for broader scientific and societal impact.";
export const approach = [
  ["Develop", "Advance statistical methods for complex, high-dimensional, and incomplete data."],
  ["Validate", "Evaluate methodological performance through theoretical, simulation-based, and empirical research."],
  ["Disseminate", "Share findings, technical knowledge, educational resources, and reproducible materials."],
  ["Collaborate", "Connect researchers, educational institutions, and community organizations to explore applications."],
  ["Translate and Evaluate", "Support responsible adaptation, evaluation, and potential implementation in appropriate settings."],
] as const;
export const researchThemes = ["Graph-Structured Statistical Learning", "Sparse Statistical Modeling", "Multimodal Biomedical Data Integration", "Blockwise Missing Data", "Statistical Validation and Reproducibility", "Neurological Research Applications"];
export const learningCategories = ["Mathematics & Statistics Foundations", "Artificial Intelligence & Machine Learning", "Statistical Computing & Data Analytics", "Biomedical Data Science", "Research Methods & Reproducibility"];
export const courses = [
  { slug: "foundation-math-statistics-ai", title: "Foundation of Math & Statistics for AI", provider: "DoctorAI Academy", category: learningCategories[0], level: "Foundational", description: "Develop foundational mathematical and statistical knowledge relevant to artificial intelligence, machine learning, and advanced data analysis.", playlist: "PLP9EKz-oSPSNsZ1tHxRnMlAiCPsCFIyV-" },
  { slug: "machine-learning-types", title: "Machine Learning & Types", provider: "DoctorAI Academy", category: learningCategories[1], level: "Foundational / Introductory", description: "Explore fundamental machine learning concepts and the major categories of learning approaches used in data analysis.", playlist: "PLP9EKz-oSPSOiZjZI_jEfVM0cnwdL4gNE" },
] as const;
export type Course = (typeof courses)[number];
export function filterCourses(category: string, level: string) {
  return courses.filter(c => (category === "All" || c.category === category) && (level === "All" || c.level === level));
}
export const playlistUrl = (id: string) => `https://www.youtube.com/playlist?list=${id}`;
export const embedUrl = (id: string) => `https://www.youtube.com/embed/videoseries?list=${id}`;
export type EvidenceRecord = { title: string; date: string; category: "Peer-reviewed publication" | "Conference presentation" | "Research poster" | "Technical manuscript" | "Research resource" | "Educational resource" | "Collaboration milestone"; description: string; contributors: string[]; link?: string; documentUrl?: string; status: "Published" | "Presented" | "In Development" | "Planned"; publicationOrEvent?: string; doi?: string; abstract?: string; researchArea?: string };
// Populate only after approval of the record and its supporting source.
export const evidenceRecords: EvidenceRecord[] = [];
export type ResearchMilestone = { phase: string; description: string; status?: "In Development" | "Planned" | "Completed"; date?: string; supportingUrl?: string };
export const researchRoadmap: ResearchMilestone[] = [
  { phase: "Methodological Research", description: "Statistical framework development, theoretical investigation, simulation studies, and empirical research." },
  { phase: "Biomedical Evaluation", description: "Application and evaluation using relevant multimodal Alzheimer's disease research data." },
  { phase: "Research Dissemination", description: "Publications, conference presentations, technical communication, and educational resources." },
  { phase: "Collaborative Expansion", description: "Engagement with research institutions, educational collaborators, and potential implementation partners." },
  { phase: "Responsible Application and Scaling", description: "Explore reproducible workflows, broader methodological evaluation, and appropriate future applications." },
];
export type Partner = { name: string; focus: string; description: string; status: string; logo?: string };
export const partners: Partner[] = [
  { name: "DoctorAI Academy", focus: "Educational content & technical capacity building", description: "SheSMAT Foundation incorporates educational resources from DoctorAI Academy to support foundational learning in mathematics, statistics, and machine learning. These resources support broader understanding and dissemination of advanced statistical research.", status: "Featured educational resources" },
  { name: "GreenAgritec Foundation", focus: "Agricultural community well-being & responsible data-driven research", description: "SheSMAT Foundation seeks to explore the application of NeuroGraph Sparse Analytics in collaboration with GreenAgritec Foundation to investigate complex relationships among psychological distress, social conditions, environmental pressures, and community well-being, including among agricultural populations.", status: "Proposed exploratory collaboration" },
];