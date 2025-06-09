'use client';
import React from 'react';
import { Typography } from '@mui/material';
import { Calendar, Pressure, Ruler, Scales } from '@/public/icons';
import { Patient } from '@/app/types';
import { pluralizeAge } from '@/app/utils';
import { StyledCard, StyledCardContent, StyledCardHeader } from '../styled';
import { StyledBox } from './styled';

type Props = {
  patient: Patient;
};

export const BasicInfo = ({ patient }: Props) => {
  return (
    <StyledCard>
      <StyledCardHeader
        title={
          <Typography variant="h6" component="h2">
            {patient.name}, {pluralizeAge(patient.age)}
          </Typography>
        }
      />
      <StyledCardContent>
        <StyledBox className="measureList">
          <StyledBox className="measure">
            <Calendar width={26} height={26} />
            <Typography>
              {new Date(patient.birthDate).toLocaleDateString('ru-RU')}
            </Typography>
          </StyledBox>
          <StyledBox className="measure">
            <Ruler width={26} height={26} />
            <Typography>{patient.height} см</Typography>
          </StyledBox>
          <StyledBox className="measure">
            <Scales width={26} height={26} />
            <Typography>{patient.weight} кг</Typography>
          </StyledBox>
          <StyledBox className="measure">
            <Pressure width={26} height={26} />
            <Typography>
              {patient.bloodPressure.systolic}/{patient.bloodPressure.diastolic}
            </Typography>
          </StyledBox>
        </StyledBox>
      </StyledCardContent>
    </StyledCard>
  );
};
