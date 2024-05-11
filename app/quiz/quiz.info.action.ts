import { prisma } from "@/lib/prisma";
import { QuizInfoPageValues } from "@/src/features/quiz/quiz-info-page";
import { revalidatePath } from "next/cache";

export const createMissionary = async (data: QuizInfoPageValues) => {
  console.log("Create Missionary", data);
  const missionary = await prisma.missionary.create({
    data: {
      name: data.name,
      email: data.email,
      city: data.city,
    },
  });

  return missionary.id;
};
