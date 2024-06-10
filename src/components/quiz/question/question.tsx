"use client";
import { QuestionType, QuizQuestion } from "@/api/fetchQuiz";
import { FC, ReactElement, useState } from "react";

import { ChoiceTypeOption } from "./choice-type";

// @TODO: Rename and move
export interface QuestionOptionProp {
  option: any; // @TODO Wah wah
  name: string;
}

const QUESTION_TYPE_TO_OPTION_COMPONENT: Record<
  QuestionType,
  FC<QuestionOptionProp>
> = {
  ChoiceType: ChoiceTypeOption,
};

type QuestionProps = {
  defaultValue?: string;
  question: QuizQuestion;
};

export function Question({
  defaultValue = "",
  question: { question, options, type },
}: QuestionProps) {
  const OptionComponent = QUESTION_TYPE_TO_OPTION_COMPONENT[type];

  return (
    <div>
      <h1>{question}</h1>
      Before you selected: {defaultValue}
      {options.map((option, index) => (
        <OptionComponent key={index} option={option} name={question} />
      ))}
    </div>
  );
}
