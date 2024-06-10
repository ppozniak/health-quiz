/**
 * Set of props that will be true to ALL types of quiz question options
 */
export interface CommonOptionProps {
  option: any; // @TODO Wah wah
  name: string;
  value?: string;
  onSelect: (value: string) => void;
}
