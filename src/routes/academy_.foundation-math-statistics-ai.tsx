import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/site/CourseDetail";
import { courses } from "@/lib/content";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/academy_/foundation-math-statistics-ai")({ head: () => meta("Foundation of Math & Statistics for AI", "DoctorAI Academy's foundational mathematics and statistics playlist, featured by SheSMAT Learning Academy."), component: MathCourse });
function MathCourse() { return <CourseDetail course={courses[0]} />; }
