"use client";

import { ChoiceTypeOption } from "./choice-type";
import { CommonOptionProps } from "./types";
import { FC, useMemo } from "react";

import { QuestionType, QuizQuestion } from "@/api/fetchQuiz";

const QUESTION_TYPE_TO_OPTION_COMPONENT: Record<
  QuestionType,
  FC<CommonOptionProps>
> = {
  ChoiceType: ChoiceTypeOption,
};

type QuestionProps = {
  value?: string;
  onSelect: (value: string) => void;
  question: QuizQuestion;
};

export function Question({
  value = "",
  onSelect,
  question: { question, options, type },
}: QuestionProps) {
  const OptionComponent = useMemo(
    () => QUESTION_TYPE_TO_OPTION_COMPONENT[type],
    [type],
  );

  return (
    <div>
      <h1 className="mb-2 text-md">{question}</h1>
      {options.map((option, index) => (
        <OptionComponent
          key={question + index}
          option={option}
          name={question}
          value={value}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
