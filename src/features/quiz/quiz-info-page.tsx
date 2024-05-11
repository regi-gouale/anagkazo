'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function QuizInfoPage() {
  return (
    <div className="flex items-center max-w-2xl h-full mx-auto">
      <Card className="flex flex-col mx-4">
        <CardHeader className="mb-4">
          <CardTitle className="text-center mb-2 text-2xl uppercase">
            Informations sur le Missionnaire
          </CardTitle>
          <CardDescription className="text-justify">
            Veuillez répondre aux questions suivantes en vous basant sur votre
            expérience personnelle. <br /> <br /> <b>Attention:</b> Vous aurez
            20 secondes pour répondre à chaque question.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-2">
              <div className="flex items-center space-x-1 justify-between gap-4">
                <Label className="mr-8">Prénom</Label>
                <Input placeholder="Prénom" />
              </div>
              <div className="flex items-center space-x-4 justify-between gap-4">
                <Label className="mr-10">Nom</Label>
                <Input placeholder="Nom" />
              </div>
              <div className="flex items-center space-x-4 justify-between gap-4">
                <Label className="mr-10">Ville</Label>
                <Input placeholder="Ville" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between mx-auto mt-4 w-full">
          <div className="text-xs text-justify text-slate-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            dolore at quasi necessitatibus ab dicta, accusantium illo ad quia
            doloremque repellendus pariatur sapiente consectetur quidem ex sit
            accusamus ipsum aliquam.
          </div>
          <div className="flex flex-row justify-between mt-4">
            <Button variant="outline" className="mx-8">
              Annuler
            </Button>
            <Button variant="default" className="mx-8" onClick={() => {}}>
              Continuer
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
