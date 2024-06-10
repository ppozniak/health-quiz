"use client";
import { QuestionType, QuizQuestion } from "@/api/fetchQuiz";
import { FC } from "react";

import { ChoiceTypeOption } from "./choice-type";

// @TODO: Rename and move
export interface QuestionOptionProp {
  option: any; // @TODO Wah wah
  name: string;
  value?: string;
  onSelect: (value: string) => void;
}

const QUESTION_TYPE_TO_OPTION_COMPONENT: Record<
  QuestionType,
  FC<QuestionOptionProp>
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
  const OptionComponent = QUESTION_TYPE_TO_OPTION_COMPONENT[type];

  console.log(question, value);

  return (
    <div>
      <h1>{question}</h1>
      Before you selected: {value}
      {options.map((option, index) => (
        <OptionComponent
          key={index}
          option={option}
          name={question}
          value={value}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
