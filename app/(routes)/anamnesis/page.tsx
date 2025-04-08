"use client";
import React from "react";
import { Typography } from "@mui/material";
import { Accordion } from "@/app/components/Accordion";
import { patient } from "./mockData";

const expandableData = [
  {
    title: "Хронические заболевания",
    content: <Typography>Список</Typography>,
  },
  {
    title: "Перенесенные операции",
    content: <Typography>Список</Typography>,
  },
  {
    title: "Прием препаратов",
    content: <Typography>Список</Typography>,
  },
  {
    title: "Заболевания в семье",
    content: <Typography>Список</Typography>,
  },
  {
    title: "Аллергия",
    content: <Typography>Список</Typography>,
  },
  {
    title: "Вредные привычки",
    content: <Typography>Список</Typography>,
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
        Дата рождения: {patient.birthDate}, {patient.age} лет
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
