import { Quiz } from "@/api/fetchQuiz";

// @TODO: Would be nice to write a test for that
export function getRejectionFromAnswers(answers: string[], quiz: Quiz) {
  const questionAnswers = answers.map((answer, index) => {
    const options = quiz.questions[index].options;
    const selectedOption = options.find(
      (option) => String(option.value) === answer,
    );

    return selectedOption;
  });

  const hasRejection = questionAnswers.some((answer) => answer?.isRejection);

  return hasRejection;
}
