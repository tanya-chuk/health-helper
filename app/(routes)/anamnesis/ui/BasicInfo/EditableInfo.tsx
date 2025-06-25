'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useForm, Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';
import { Calendar, Pressure, Ruler, Scales } from '@/public/icons';
import { useStores } from '@/app/stores/StoreContext';
import { Patient } from '@/app/types';
import { StyledBox, StyledButton, StyledTextField } from './styled';

type Props = {
  patient: Patient;
  quitEditMode: () => void;
};

type FormProps = Pick<Patient, 'height' | 'weight' | 'bloodPressure'> & {
  birthDate: Date;
};

export const EditableInfo = observer(({ patient, quitEditMode }: Props) => {
  const {
    patientStore: { updateBasicInfo },
    snackbarStore: { showSnackbar },
  } = useStores();

  const defaultValues = {
    birthDate: new Date(patient.birthDate),
    height: patient.height,
    weight: patient.weight,
    bloodPressure: {
      systolic: patient.bloodPressure.systolic,
      diastolic: patient.bloodPressure.diastolic,
    },
  };

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  const submitData = async (data: FormProps) => {
    try {
      await updateBasicInfo({
        ...data,
        id: patient.id,
      });
      quitEditMode();
      reset(defaultValues);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      showSnackbar('networkError');
    }
  };

  const handleAbort = () => {
    reset(defaultValues);
    quitEditMode();
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <StyledBox className="measureList">
        <StyledBox className="measure">
          <Calendar width={26} height={26} />
          <Controller
            name="birthDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DateField
                {...field}
                required
                disableFuture
                variant="standard"
                format="dd.MM.yyyy"
                sx={{ width: '105px' }}
              />
            )}
          />
        </StyledBox>
        <StyledBox className="measure">
          <Ruler width={26} height={26} />
          <Controller
            name="height"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                sx={{ width: '80px' }}
                variant="standard"
                type="number"
                {...register('height', {
                  required: true,
                  valueAsNumber: true,
                })}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">см</InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </StyledBox>
        <StyledBox className="measure">
          <Scales width={26} height={26} />
          <Controller
            name="weight"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                sx={{ width: '75px' }}
                variant="standard"
                type="number"
                {...register('weight', {
                  required: true,
                  valueAsNumber: true,
                })}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">кг</InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </StyledBox>
        <StyledBox className="measure">
          <Pressure width={26} height={26} />
          <Controller
            name="bloodPressure"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <StyledBox className="pressureField">
                <StyledTextField
                  {...field}
                  sx={{ width: '45px' }}
                  variant="standard"
                  value={field.value.systolic}
                  onChange={(e) =>
                    field.onChange({
                      ...field.value,
                      systolic: parseInt(e.target.value),
                    })
                  }
                />
                /
                <StyledTextField
                  {...field}
                  sx={{ width: '45px' }}
                  variant="standard"
                  value={field.value.diastolic}
                  onChange={(e) =>
                    field.onChange({
                      ...field.value,
                      diastolic: parseInt(e.target.value),
                    })
                  }
                />
              </StyledBox>
            )}
          />
        </StyledBox>
      </StyledBox>
      <StyledBox className="buttonGroup">
        <StyledButton onClick={handleAbort}>Отменить</StyledButton>
        <StyledButton type="submit" disabled={!isValid || !isDirty}>
          Сохранить
        </StyledButton>
      </StyledBox>
    </form>
  );
});
