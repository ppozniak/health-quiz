import { CommonOptionProps } from "./types";
import { useId } from "react";

import { QuizOptionMap } from "@/api/fetchQuiz";

interface ChoiceTypeQuestionProps extends CommonOptionProps {
  option: QuizOptionMap["ChoiceType"];
  name: string;
}

export function ChoiceTypeOption({
  option,
  name,
  value,
  onSelect,
}: ChoiceTypeQuestionProps) {
  const inputId = useId();

  return (
    <div className="flex items-center gap-1">
      <input
        id={inputId}
        name={name}
        type="radio"
        checked={String(value) === String(option.value)}
        onChange={(event) => onSelect(event.target.value)}
        value={String(option.value)}
      />
      <label
        className="flex-1 py-2"
        htmlFor={inputId}
        key={String(option.value)}
        // @TODO: Could be worth safe parsing it for extra security
        dangerouslySetInnerHTML={{ __html: option.display }}
      ></label>
    </div>
  );
}
