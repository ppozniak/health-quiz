import { QUIZ_IDS, fetchQuiz } from "@/api/fetchQuiz";
import { QuizFlow } from "@/components/quiz/quiz";
import { notFound } from "next/navigation";

type QuizPageParams = {
  id: string;
};

export function generateStaticParams(): QuizPageParams[] {
  return QUIZ_IDS.map((id) => ({ id }));
}

export default async function Quiz({ params }: { params: QuizPageParams }) {
  let quiz;
  try {
    quiz = await fetchQuiz(params.id);
  } catch (error) {
    console.log(error);
  }

  if (!quiz) {
    notFound();
  }

  return <QuizFlow quiz={quiz} id={params.id} />;
}
