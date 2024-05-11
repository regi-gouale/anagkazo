import { QuizInfoPage } from "@/src/features/quiz/quiz-info-page";
import QuizQuestionPage from "@/src/features/quiz/quiz-question";
import React from "react";
import { createMissionary } from "./quiz.info.action";

export default function QuizPage() {
  return (
    <QuizInfoPage
      onSubmit={async (data) => {
        "use server";
        console.log("SubmitPage.tsx", data);
        return createMissionary(data);
      }}
    />
    // <QuizQuestionPage />
  );
}
