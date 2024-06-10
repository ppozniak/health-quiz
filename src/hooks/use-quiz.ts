import { useState } from "react";

import { Quiz } from "@/api/fetchQuiz";

export function useQuiz(quiz: Quiz) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const isFirstQuestion = activeQuestionIndex === 0;
  const isLastQuestion = activeQuestionIndex === quiz.questions.length - 1;
  const isValueSelected = !!answers[activeQuestionIndex];

  const addAnswer = (index: number, value: string) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    setActiveQuestionIndex((active) => active + 1);
  };

  const previousQuestion = () => {
    setActiveQuestionIndex((active) => active - 1);
  };

  return {
    activeQuestionIndex,
    answers,
    addAnswer,
    isFirstQuestion,
    isLastQuestion,
    isValueSelected,
    nextQuestion,
    previousQuestion,
  };
}
