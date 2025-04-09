"use client";
import React from "react";
import { Typography } from "@mui/material";
import { Accordion } from "@/app/components/Accordion";
import { patient } from "./mockData";
import {
  ChronicIllness,
  Operations,
  Medications,
  FamilyHistory,
  Allergies,
  BadHabits,
} from ".";

const expandableData = [
  {
    title: "Хронические заболевания",
    content: <ChronicIllness list={patient.illness} />,
  },
  {
    title: "Перенесенные операции",
    content: <Operations list={patient.operations} />,
  },
  {
    title: "Прием препаратов",
    content: <Medications list={patient.medications} />,
  },
  {
    title: "Заболевания в семье",
    content: <FamilyHistory list={patient.familyHistory} />,
  },
  {
    title: "Аллергия",
    content: <Allergies {...patient.allergies} />,
  },
  {
    title: "Вредные привычки",
    content: <BadHabits {...patient.badHabits} />,
  },
];

const Anamnesis = () => {
  return (
    <div>
      <Typography component="h1" variant="h4">
        Медицинская карта
      </Typography>
      <Typography>{patient.name}</Typography>
      <Typography>
        Дата рождения: {new Date(patient.birthDate).toLocaleDateString("ru-RU")}
        , {patient.age} лет
      </Typography>
      <Typography>
        Рост: {patient.height}, вес: {patient.weight}
      </Typography>
      <Typography>
        Давление: {patient.bloodPressure.systolic}/
        {patient.bloodPressure.diastolic}
      </Typography>
      {expandableData.map((item) => (
        <Accordion
          key={item.title}
          summary={
            <Typography component="h2" variant="h5">
              {item.title}
            </Typography>
          }
          details={item.content}
        />
      ))}
    </div>
  );
};

export default Anamnesis;
