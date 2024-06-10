"use client";

import { Question } from "./question";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Quiz } from "@/api/fetchQuiz";

export function QuizFlow({ quiz }: { quiz: Quiz }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<"QUESTION" | "FINISH">(
    "QUESTION",
  );
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isRejected, setIsRejected] = useState(false);

  const isFirstQuestion = activeQuestionIndex === 0;
  const isLastQuestion = activeQuestionIndex === quiz.questions.length - 1;
  const isValueSelected = !!answers[activeQuestionIndex];

  // @TODO: This now assumes that all quizes will rely on isRejected
  // @TODO: Would be nice to write a test for that
  const handleFinish = () => {
    const questionAnswers = answers.map((answer, index) => {
      const options = quiz.questions[index].options;
      const selectedOption = options.find(
        (option) => String(option.value) === answer,
      );

      return selectedOption;
    });

    const hasRejection = questionAnswers.some((answer) => answer?.isRejection);

    setIsRejected(hasRejection);
    setCurrentStep("FINISH");
  };

  const handlePrevious = () => {
    if (isFirstQuestion) {
      router.back();
    } else if (currentStep === "FINISH") {
      setCurrentStep("QUESTION");
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
    <div className="container py-3">
      {currentStep === "QUESTION" && (
        <div className="animate-fade-in" key={activeQuestionIndex}>
          <Question
            value={answers[activeQuestionIndex]}
            onSelect={handleSelect}
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
              >
                www.example.com
              </a>
              , and prepare to say hello to your new hair!
            </>
          )}
        </div>
      )}

      <div className="mt-2 flex justify-between md:justify-start md:gap-2">
        <button className="btn-secondary" onClick={handlePrevious}>
          {isFirstQuestion ? "Exit" : "Previous"}
        </button>

        {currentStep === "QUESTION" && (
          <button
            className="btn-primary"
            disabled={!isValueSelected}
            onClick={handleNext}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
