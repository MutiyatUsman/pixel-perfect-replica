import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/site/CourseDetail";
import { courses } from "@/lib/content";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/academy_/machine-learning-types")({ head: () => meta("Machine Learning & Types", "Learn fundamental machine learning concepts with DoctorAI Academy's introductory playlist at SheSMAT Learning Academy."), component: MachineLearningCourse });
function MachineLearningCourse() { return <CourseDetail course={courses[1]} />; }
