"use client";

import { Question } from "./question";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Quiz } from "@/api/fetchQuiz";
import { useQuiz } from "@/hooks/use-quiz";
import { getRejectionFromAnswers } from "@/utils/quiz";

export function QuizFlow({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const {
    answers,
    isFirstQuestion,
    isLastQuestion,
    isValueSelected,
    addAnswer,
    nextQuestion,
    previousQuestion,
    activeQuestionIndex,
  } = useQuiz(quiz);

  const [currentStep, setCurrentStep] = useState<"QUESTION" | "FINISH">(
    "QUESTION",
  );
  const [isRejected, setIsRejected] = useState(false);

  const handleFinish = () => {
    // @TODO: This assumes all quizzes use `isRejection` as a way to resolve quiz's outcome
    const hasRejection = getRejectionFromAnswers(answers, quiz);
    setIsRejected(hasRejection);
    setCurrentStep("FINISH");
  };

  const handlePreviousClick = () => {
    if (isFirstQuestion) {
      router.back();
    } else if (currentStep === "FINISH") {
      setCurrentStep("QUESTION");
    } else {
      previousQuestion();
    }
  };

  const handleNextClick = () => {
    if (!isLastQuestion) {
      nextQuestion();
    } else {
      handleFinish();
    }
  };

  const handleSelectAnswer = (value: string) => {
    addAnswer(activeQuestionIndex, value);
  };

  return (
    <div className="container py-3">
      {currentStep === "QUESTION" && (
        <div className="animate-fade-in" key={activeQuestionIndex}>
          <Question
            value={answers[activeQuestionIndex]}
            onSelect={handleSelectAnswer}
            question={quiz.questions[activeQuestionIndex]}
          />
        </div>
      )}

      {currentStep === "FINISH" && (
        <div className="max-w-prose animate-fade-in">
          {isRejected ? (
            <>
              Unfortunately, we are unable to prescribe this medication for you.
              This is because finasteride can alter the PSA levels, which may be
              used to monitor for cancer. You should discuss this further with
              your GP or specialist if you would still like this medication.
            </>
          ) : (
            <>
              Great news! We have the perfect treatment for your hair loss.
              Proceed to{" "}
              <a
                href="http://www.example.com"
                target="_blank"
                className="underline"
                referrerPolicy="no-referrer"
              >
                www.example.com
              </a>
              , and prepare to say hello to your new hair!
            </>
          )}
        </div>
      )}

      <div className="mt-2 flex justify-between md:justify-start md:gap-2">
        <button className="btn-secondary" onClick={handlePreviousClick}>
          {isFirstQuestion ? "Exit" : "Previous"}
        </button>

        {currentStep === "QUESTION" && (
          <button
            className="btn-primary"
            disabled={!isValueSelected}
            onClick={handleNextClick}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
