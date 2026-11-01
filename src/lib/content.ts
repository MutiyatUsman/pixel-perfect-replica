export const mission = "To support the dissemination, translation, and responsible scaling of NeuroGraph Sparse Analytics by building collaborative, educational, and community pathways that connect statistical methodology research with complex biomedical challenges, particularly Alzheimer's disease.";
export const missionDetails = "SheSMAT is the community-facing platform; NeuroGraph Sparse Analytics is the separate statistical research endeavor and technical prototype.";
export const missionAction = "Research communication, knowledge translation, technical education, interdisciplinary partnerships, community engagement, and responsible scaling support the endeavor.";
export const vision = "To foster a collaborative ecosystem in which rigorous statistical research is accessible, reproducible, and supported by the partnerships and technical capacity needed for responsible scientific and societal impact.";
export const approach = [
  ["Develop", "Advance statistical methods for complex, high-dimensional, and incomplete data."],
  ["Validate", "Evaluate methodological performance through theoretical, simulation-based, and empirical research."],
  ["Disseminate", "Share findings, technical knowledge, educational resources, and reproducible materials."],
  ["Collaborate", "Connect researchers, educational institutions, and community organizations to explore applications."],
  ["Translate and Evaluate", "Support responsible adaptation, evaluation, and potential implementation in appropriate settings."],
] as const;
export const researchThemes = ["Graph-Structured Statistical Learning", "Sparse Statistical Modeling", "Multimodal Biomedical Data Integration", "Blockwise Missing Data", "Statistical Validation and Reproducibility", "Neurological Research Applications"];
export const learningCategories = ["Mathematics & Statistics Foundations", "Artificial Intelligence & Machine Learning", "Applied Data Science & Analytics", "Biomedical Data Science", "Research Computing & Reproducibility"];
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
export type EvidenceRecord = { title: string; date: string; category: "Peer-reviewed publication" | "Conference presentation" | "Research poster" | "Technical manuscript" | "Research resource" | "Educational resource" | "Collaboration milestone" | "Research summary" | "Partnership announcement" | "Community activity" | "Research dissemination milestone"; description: string; contributors: string[]; link?: string; documentUrl?: string; status: "Published" | "Presented" | "In Development" | "Planned"; publicationOrEvent?: string; doi?: string; abstract?: string; researchArea?: string };
// Populate only after approval of the record and its supporting source.
export const evidenceRecords: EvidenceRecord[] = [];
export type ResearchMilestone = { phase: string; description: string; status?: "In Development" | "Planned" | "Completed"; date?: string; supportingUrl?: string };
export const researchRoadmap: ResearchMilestone[] = [
  { phase: "Methodological Research", description: "Statistical framework development, theoretical investigation, simulation studies, and empirical research." },
  { phase: "Biomedical Evaluation", description: "Application and evaluation using relevant multimodal Alzheimer's disease research data." },
  { phase: "Scientific Dissemination", description: "Publications, conference presentations, technical communication, and educational resources." },
  { phase: "Collaborative Engagement", description: "Engagement with research institutions, educational collaborators, and potential implementation partners." },
  { phase: "Responsible Translation and Scaling", description: "Explore reproducible workflows, broader methodological evaluation, and appropriate future applications." },
];
export type Partner = { name: string; focus: string; description: string; status: string; logo?: string };
export const partners: Partner[] = [
  { name: "DoctorAI Academy", focus: "Educational content & technical capacity building", description: "SheSMAT Foundation incorporates educational resources from DoctorAI Academy to support foundational learning in mathematics, statistics, and machine learning. These resources support broader understanding and dissemination of advanced statistical research.", status: "Featured educational resources" },
  { name: "Green Agritech Foundation", focus: "Agricultural community well-being & responsible data-driven research", description: "SheSMAT Foundation seeks to explore the application of NeuroGraph Sparse Analytics in collaboration with Green Agritech Foundation to investigate complex relationships among psychological distress, social conditions, environmental pressures, and community well-being, including among agricultural populations.", status: "Proposed exploratory collaboration" },
];