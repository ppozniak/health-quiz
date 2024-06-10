"use client";
import { Quiz } from "@/api/fetchQuiz";
import { useState } from "react";
import { Question } from "./question/question";

export function QuizFlow({ quiz }: { quiz: Quiz }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  console.log(answers);

  const isFirstQuestion = activeQuestionIndex === 0;
  const isLastQuestion = activeQuestionIndex === quiz.questions.length - 1;
  const isValueSelected = !!answers[activeQuestionIndex];

  const handlePrevious = () => {
    setActiveQuestionIndex((active) => active - 1);
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setActiveQuestionIndex((active) => active + 1);
    } else {
      // @TODO: Handle summary
    }
  };

  const addAnswer = (index: number, value: string) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const handleSelect = (value: string) => {
    addAnswer(activeQuestionIndex, value);
  };

  return (
    <div>
      <Question
        value={answers[activeQuestionIndex]}
        onSelect={handleSelect}
        question={quiz.questions[activeQuestionIndex]}
      />

      <button
        className="btn-primary"
        onClick={handlePrevious}
        disabled={isFirstQuestion}
      >
        Previous
      </button>
      <button
        className="btn-primary"
        disabled={!isValueSelected}
        onClick={handleNext}
      >
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </div>
  );
}
