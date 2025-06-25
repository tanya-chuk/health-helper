'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Patient } from '@/app/types';
import { EditableTable, TableColumn } from '@/app/components/EditableTable';
import { PICKER_PARTS } from '@/app/components/RangeDatePicker';
import { useStores } from '@/app/stores/StoreContext';

interface Props {
  patientId: Patient['id'];
}

interface FormProps {
  name: string;
  period: Array<null | string>;
  cause: string;
}

export const Medications = observer(({ patientId }: Props) => {
  const {
    medicationStore: { list, addMedication },
    snackbarStore: { showSnackbar },
  } = useStores();

  const defaultValues = {
    name: '',
    cause: '',
    period: [null, null],
  };

  const columns: Array<TableColumn<keyof FormProps>> = [
    {
      id: 'name',
      name: 'Название',
      input: 'text',
      type: 'string',
      required: true,
    },
    {
      id: 'period',
      name: 'Период',
      input: 'date_range',
      type: 'string',
      required: true,
    },
    {
      id: 'cause',
      name: 'Повод приема',
      input: 'text',
      type: 'string',
      required: true,
    },
  ];

  const rows = list.map((item) =>
    Object.values(columns).map(({ id }) => item[id]),
  );

  const handleSubmit = async (data: FormProps) =>
    await addMedication({
      ...data,
      patientId,
      period: {
        start: data.period[PICKER_PARTS.start] || '',
        end: data.period[PICKER_PARTS.end] || '',
      },
    });

  const handleError = () => showSnackbar('networkError');

  return (
    <EditableTable<FormProps>
      rows={rows}
      columns={columns}
      submitData={handleSubmit}
      onError={handleError}
      defaultValues={defaultValues}
    />
  );
});
