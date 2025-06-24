'use client';
import React from 'react';
import { Plus } from '@/public/icons';
import { Box } from '@mui/material';
import { StyledButton } from './styled';

interface Props {
  onEdit: () => void;
}

export const EmptyTable = ({ onEdit }: Props) => {
  return (
    <>
      <Box>Нет данных</Box>
      <StyledButton
        onClick={onEdit}
        startIcon={<Plus width={22} height={22} />}
      >
        Добавить запись
      </StyledButton>
    </>
  );
};
