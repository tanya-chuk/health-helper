'use client';
import React from 'react';
import { Plus } from '@/public/icons';
import { StyledBox, StyledButton } from './styled';

type Props = {
  isEditing: boolean;
  isValid: boolean;
  onAbort: () => void;
  onEdit: () => void;
};

export const FormControls = ({
  isEditing,
  isValid,
  onEdit,
  onAbort,
}: Props) => {
  return (
    <StyledBox className="formControls">
      {isEditing ? (
        <StyledBox className="buttonGroup">
          <StyledButton onClick={onAbort}>Отменить</StyledButton>
          <StyledButton type="submit" disabled={!isValid}>
            Сохранить
          </StyledButton>
        </StyledBox>
      ) : (
        <StyledButton
          onClick={onEdit}
          startIcon={<Plus width={22} height={22} />}
        >
          Добавить запись
        </StyledButton>
      )}
    </StyledBox>
  );
};
