'use client';
import React, { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { useStores } from '@/app/stores/StoreContext';
import { CollapsableCard } from '@/app/components/CollapsableCard';
import { Patient } from '@/app/types';
import {
  ChronicIllness,
  Surgeries,
  Medications,
  FamilyHistory,
  Allergies,
  BadHabits,
} from '.';
import { BasicInfo } from './BasicInfo';
import { StyledBox } from './styled';

type ContentItem = {
  title: string;
  content: ReactNode;
  isCollapsable: boolean;
  expanded?: boolean;
};

const renderLeftColumn = (patient: Patient): Array<ContentItem> => {
  return [
    {
      title: 'Основная информация',
      content: <BasicInfo patient={patient} />,
      isCollapsable: false,
    },
    {
      title: 'Хронические заболевания',
      content: <ChronicIllness patient={patient} />,
      isCollapsable: true,
      expanded: true,
    },
    {
      title: 'Перенесенные операции',
      content: <Surgeries patientId={patient.id} />,
      isCollapsable: true,
    },
    {
      title: 'Прием препаратов',
      content: <Medications list={patient.medications} />,
      isCollapsable: true,
    },
  ];
};

const renderRightColumn = (patient: Patient): Array<ContentItem> => {
  return [
    {
      title: 'Заболевания в семье',
      content: <FamilyHistory patientId={patient.id} />,
      isCollapsable: true,
      expanded: true,
    },
    {
      title: 'Аллергия',
      content: <Allergies {...patient.allergies} />,
      isCollapsable: true,
      expanded: true,
    },
    {
      title: 'Вредные привычки',
      content: <BadHabits {...patient.badHabits} />,
      isCollapsable: true,
    },
  ];
};

export const AnamnesisContent = observer(() => {
  const {
    patientStore: { patient },
  } = useStores();

  return (
    patient && (
      <>
        <Typography component="h1" className="vh">
          Анамнез пациента
        </Typography>
        <StyledBox className="anamnesisContainer">
          <StyledBox className="leftColumn">
            {renderLeftColumn(patient).map((item) => {
              return item.isCollapsable ? (
                <CollapsableCard
                  expanded={item.expanded || false}
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              ) : (
                <div key={item.title}>{item.content}</div>
              );
            })}
          </StyledBox>
          <StyledBox className="rightColumn">
            {renderRightColumn(patient).map((item) => {
              return item.isCollapsable ? (
                <CollapsableCard
                  expanded={item.expanded || false}
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              ) : (
                item.content
              );
            })}
          </StyledBox>
        </StyledBox>
      </>
    )
  );
});
