"use client";
import { Quiz } from "@/api/fetchQuiz";
import { useState } from "react";
import { Question } from "./question/question";

export function QuizFlow({ quiz }: { quiz: Quiz }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  // @TODO: Not sure about isRejected = undefined
  const [isRejected, setIsRejected] = useState<boolean | undefined>();

  const isFirstQuestion = activeQuestionIndex === 0;
  const isLastQuestion = activeQuestionIndex === quiz.questions.length - 1;
  const isValueSelected = !!answers[activeQuestionIndex];

  // @TODO: This now assumes that all quizes will rely on isRejected
  // @TODO: Would be nice to write a test for that
  const handleFinish = () => {
    const questionAnswers = answers.map((answer, index) => {
      const options = quiz.questions[index].options;
      const selectedOption = options.find((option) => {
        console.log(option.value, answer);
        return String(option.value) === answer;
      });

      return selectedOption;
    });

    const hasRejection = questionAnswers.some((answer) => answer?.isRejection);

    setIsRejected(hasRejection);
  };

  const resetOutcome = () => {
    setIsRejected(undefined);
  };

  const handlePrevious = () => {
    if (isRejected !== undefined) {
      resetOutcome();
    } else {
      setActiveQuestionIndex((active) => active - 1);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setActiveQuestionIndex((active) => active + 1);
    } else {
      handleFinish();
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
      {isRejected === undefined && (
        <Question
          value={answers[activeQuestionIndex]}
          onSelect={handleSelect}
          question={quiz.questions[activeQuestionIndex]}
        />
      )}

      {isRejected === true && "You cannot, sorry"}

      {isRejected === false && "You can, yes"}

      <button
        className="btn-primary"
        onClick={handlePrevious}
        disabled={isFirstQuestion}
      >
        Previous
      </button>
      {isRejected === undefined && (
        <button
          className="btn-primary"
          disabled={!isValueSelected}
          onClick={handleNext}
        >
          {isLastQuestion ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}
