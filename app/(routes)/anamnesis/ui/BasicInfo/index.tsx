'use client';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Edit } from '@/public/icons';
import { Patient } from '@/app/types';
import { pluralizeAge } from '@/app/utils';
import { Card, CardContent, CardHeader } from '@/app/components';
import { StyledIconButton } from './styled';
import { ReadOnlyInfo } from './ReadOnlyInfo';
import { EditableInfo } from './EditableInfo';

type Props = {
  patient: Patient;
};

export const BasicInfo = ({ patient }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const quitEditMode = () => {
    setIsEditMode(false);
  };

  const enableEditMode = () => {
    setIsEditMode(true);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" component="h2">
            {patient.name}, {pluralizeAge(patient.age)}
          </Typography>
        }
        action={
          isEditMode ? null : (
            <StyledIconButton
              aria-label="edit basic info"
              onClick={enableEditMode}
            >
              <Edit width={20} />
            </StyledIconButton>
          )
        }
      />
      <CardContent>
        {isEditMode ? (
          <EditableInfo patient={patient} quitEditMode={quitEditMode} />
        ) : (
          <ReadOnlyInfo patient={patient} />
        )}
      </CardContent>
    </Card>
  );
};
