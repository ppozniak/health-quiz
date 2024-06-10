"use client";
import { Quiz } from "@/api/fetchQuiz";
import { useState } from "react";
import { Question } from "./question/question";

export function QuizFlow({ quiz }: { quiz: Quiz }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleNextQuestion = (selectedValue: string) => {
    // 1. Set answer
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[activeQuestionIndex] = selectedValue;
      return newAnswers;
    });

    // 2. Move forward
    if (activeQuestionIndex !== quiz.questions.length - 1) {
      setActiveQuestionIndex((currentIndex) => currentIndex + 1);
    } else {
      // @TODO: Handle logic for the last question
    }
  };

  return (
    <div>
      <Question
        defaultValue={answers[activeQuestionIndex]}
        question={quiz.questions[activeQuestionIndex]}
      />

      {/* @TODO: logic for button disable states */}
      <button className="btn-primary">Previous</button>
      <button
        className="btn-primary"
        onClick={() => handleNextQuestion("true")}
      >
        Next
      </button>
    </div>
  );
}
