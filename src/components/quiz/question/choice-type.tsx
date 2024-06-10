import { QuizOptionMap } from "@/api/fetchQuiz";
import { useId } from "react";

import { CommonOptionProps } from "./types";

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
    <div>
      <label
        htmlFor={inputId}
        // @TODO: It should be safe, as its coming from trusted server, but could use DOMpurify or other just to be extra safe
        dangerouslySetInnerHTML={{ __html: option.display }}
      ></label>
      <input
        id={inputId}
        name={name}
        type="radio"
        checked={String(value) === String(option.value)}
        onChange={(event) => onSelect(event.target.value)}
        value={String(option.value)}
      />
    </div>
  );
}
