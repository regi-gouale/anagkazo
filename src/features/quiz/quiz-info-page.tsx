"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import { useZodForm } from "@/components/ui/form";

const mySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  city: z.string().min(1),
});

export type QuizInfoPageValues = z.infer<typeof mySchema>;
type QuizInfoPageProps = {
  onSubmit: (values: QuizInfoPageValues) => Promise<string>;
};
export const QuizInfoPage = ({ onSubmit }: QuizInfoPageProps) => {
  const form = useZodForm({
    schema: mySchema,
    defaultValues: {
      name: "",
      email: "",
      city: "",
    },
  });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmiting = async (data: any) => {
    data.preventDefault();
    setIsLoading(true);

    console.log("Submit");

    try {
      // console.log("Submit", { name, email, city });
      const response = mySchema.safeParse({ name, email, city });

      if (!response.success) {
        console.error(response.error);
        let errorArray: any[] = [];
        const { errors: err } = response.error;
        for (let i = 0; i < err.length; i++) {
          errorArray.push({ for: err[i].path[0], message: err[i].message });
        }
        setErrors(errorArray);
        throw err;
      }
      setSuccess(true);
      setErrors([]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccessPopup = () => {
    setSuccess(false);
  };

  const router = useRouter();

  return (
    <div className="flex items-center max-w-2xl h-full mx-auto">
      <Card className="flex flex-col mx-4">
        <CardHeader className="mb-2">
          <CardTitle className="text-center mb-2 text-2xl uppercase">
            Informations sur le Missionnaire
          </CardTitle>

          <CardDescription className="text-justify">
            Veuillez répondre aux questions suivantes en vous basant sur votre
            expérience personnelle. <br /> <br />{" "}
            <b className="text-red-500">Attention :</b> Vous aurez 20 secondes
            pour répondre à chaque question.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form
            form={form}
            onSubmit={async (values) => {
              console.log("OnSubmit", values);
              const missionaryId = await onSubmit(values);
              router.push("/quiz/survey");
              return missionaryId;
            }}
            onClick={async (values) => {
              // console.log("OnClick", values);
              console.log("formState.errors", form.formState.errors);
            }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <FormLabel>Prénom & Nom</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jean Dupont"
                        className="col-span-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <div></div>
                    <FormMessage lang="fr" className="col-span-2" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="jdupont@email.com"
                        className="col-span-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <div></div>
                    <FormMessage lang="fr" className="col-span-2" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <FormLabel>Ville</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Lyon"
                        className="col-span-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className="grid grid-flow-col grid-cols-3 items-center mb-2">
                    <div></div>
                    <FormMessage lang="fr" className="col-span-2" />
                  </div>
                </FormItem>
              )}
            />
            <div className="flex flex-row justify-between mt-8">
              <Link
                href="/"
                className={clsx(buttonVariants({ variant: "outline" }), "mx-8")}
              >
                Annuler
              </Link>
              <Button
                variant="default"
                // type="submit"
                className="mx-8"
                disabled={isLoading}
              >
                {isLoading ? "Chargement..." : "Suivant"}
              </Button>
            </div>
          </Form>
          {success && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-md text-center">
                <p className="text-green-500 text-lg font-semibold mb-4">
                  Data Successfully Saved!
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={closeSuccessPopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col justify-between mx-auto mt-4 w-full">
          <div className="text-xs text-justify text-slate-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            dolore at quasi necessitatibus ab dicta, accusantium illo ad quia
            doloremque repellendus pariatur sapiente consectetur quidem ex sit
            accusamus ipsum aliquam.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
