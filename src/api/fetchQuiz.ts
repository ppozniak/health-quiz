import { ReactElement } from "react";

export type QuizType = "ChoiceType";

export type QuizQuestion = {
  question: string;
  type: QuizType;
  options: ReactElement[]; // @TODO: Think this is actually just a string
};

// Note: in real life, this would be probably fetched
export const QUIZ_IDS: string[] = ["972423"] as const;

export async function fetchQuiz(
  id: string,
): Promise<{ questions: QuizQuestion[] }> {
  const response = await fetch(
    `https://manual-case-study.herokuapp.com/questionnaires/${id}.json`,
  );

  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(new Error(`Quiz ID:${id}, ${response.statusText}`));
  }
}
