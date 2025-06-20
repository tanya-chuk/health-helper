'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Patient } from '@/app/types';
import { EditableTable, TableColumn } from '@/app/components/EditableTable';
import { CURRENT_YEAR, YEARS_LIST } from '@/app/constants';
import { useStores } from '@/app/stores/StoreContext';
import { SelectOption } from '@/app/components/Select';

interface Props {
  patientId: Patient['id'];
}

interface FormProps {
  year: SelectOption;
  case: string;
}

export const Surgeries = observer(({ patientId }: Props) => {
  const {
    surgeriesStore: { list, addSurgery },
    snackbarStore: { showSnackbar },
  } = useStores();

  const defaultValues = {
    year: {
      id: String(CURRENT_YEAR),
      name: CURRENT_YEAR,
      value: CURRENT_YEAR,
    },
    case: '',
  };

  const columns: Array<TableColumn<keyof FormProps>> = [
    {
      id: 'year',
      name: 'Год проведения',
      input: 'select',
      type: 'number',
      options: YEARS_LIST,
      required: true,
    },
    {
      id: 'case',
      name: 'Операция',
      input: 'text',
      type: 'string',
      required: true,
    },
  ];

  const rows = list.map((item) =>
    Object.values(columns).map(({ id }) => item[id]),
  );

  const handleSubmit = async (data: FormProps) => {
    await addSurgery({
      ...data,
      year: +data.year.value,
      patientId,
    });
  };

  const handleError = () => showSnackbar('networkError');

  return (
    <EditableTable<FormProps>
      rows={rows}
      columns={columns}
      defaultValues={defaultValues}
      submitData={handleSubmit}
      onError={handleError}
    />
  );
});
