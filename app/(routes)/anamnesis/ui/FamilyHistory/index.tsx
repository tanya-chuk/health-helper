'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Patient, Relative } from '@/app/types';
import { EditableTable, TableColumn } from '@/app/components/EditableTable';
import { useStores } from '@/app/stores/StoreContext';

interface Props {
  patientId: Patient['id'];
}

interface FormProps {
  case: string;
  relative: Relative;
}

export const FamilyHistory = observer(({ patientId }: Props) => {
  const {
    familyHistoryStore: { list, relativeTypes, addEntry },
    snackbarStore: { showSnackbar },
  } = useStores();

  const defaultValues = {
    case: '',
    relative: {
      id: '',
      name: '',
      value: '',
    },
  };

  const columns: Array<TableColumn<keyof FormProps>> = [
    {
      id: 'case',
      name: 'Случай',
      input: 'text',
      type: 'string',
      required: true,
    },
    {
      id: 'relative',
      name: 'Родственник',
      input: 'select',
      type: 'string',
      required: true,
      options: relativeTypes,
    },
  ];

  const rows = list.map((item) =>
    Object.values(columns).map(({ id }) => item[id]),
  );

  const handleSubmit = async (data: FormProps) =>
    await addEntry({
      ...data,
      patientId,
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
