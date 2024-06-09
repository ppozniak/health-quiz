import { QUIZ_IDS, fetchQuiz } from "@/api/fetchQuiz";
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

  return (
    <div>
      Quiz ID: {params.id}
      {quiz.questions.map((question, index) => (
        // Note: Questions should probably have ids
        <div key={index}>
          {question.question}

          <div>{question.type}</div>
          <div>
            {question.options.map((option, index) => {
              console.log(option);
              return <div key={index}>Hi</div>;
            })}
          </div>
          {/* <div>
            {question.options.map((option) => (
              <div key={option}>{option}</div>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
}
