import { QuizOption } from "@/api/fetchQuiz";

/**
 * Set of props that will be true to ALL types of quiz question options
 */
export interface CommonOptionProps {
  option: QuizOption;
  name: string;
  value?: string;
  onSelect: (value: string) => void;
}
