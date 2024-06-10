// Note: one for now, but can be more
export type QuestionType = "ChoiceType";

/**
 * A single quiz question. Its `type` dictates type of the options
 */
export type QuizQuestion = {
  question: string;
  type: QuestionType;
  options: QuizOption<QuestionType>[];
};

type QuizOption<T extends QuestionType> = QuizOptionMap[T];

/**
 * A mapping of quiz type: list of options
 */
export type QuizOptionMap = {
  ChoiceType: {
    display: string; // Note: This stores html strings
    value: string | boolean | number;
    isRejection: boolean;
  };
};

export type Quiz = {
  questions: QuizQuestion[];
};

// Note: in real life, this would be probably fetched
export const QUIZ_IDS: string[] = ["972423"] as const;

export async function fetchQuiz(id: string): Promise<Quiz> {
  const response = await fetch(
    `https://manual-case-study.herokuapp.com/questionnaires/${id}.json`,
  );

  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(new Error(`Quiz ID:${id}, ${response.statusText}`));
  }
}
