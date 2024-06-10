import { QuizOptionMap } from "@/api/fetchQuiz";
import { useId } from "react";

import { QuestionOptionProp } from "./question";

interface ChoiceTypeQuestionProps extends QuestionOptionProp {
  option: QuizOptionMap["ChoiceType"];
  name: string;
}

export function ChoiceTypeOption({ option, name }: ChoiceTypeQuestionProps) {
  const inputId = useId();
  return (
    <div>
      <label
        htmlFor={inputId}
        // @TODO: Ensure it's safe
        dangerouslySetInnerHTML={{ __html: option.display }}
      ></label>
      <input
        id={inputId}
        name={name}
        type="radio"
        value={String(option.value)}
      />
    </div>
  );
}
