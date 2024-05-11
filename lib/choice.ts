export type QuizChoice = {
  label: string;
  value: number;
};

export const quizAnswerChoices: QuizChoice[] = [
  { label: "Tout à fait", value: 4 },
  { label: "Assez bien", value: 3 },
  { label: "Je ne sais pas", value: 2 },
  { label: "Un peu", value: 1 },
  { label: "Pas du tout", value: 0 },
];
