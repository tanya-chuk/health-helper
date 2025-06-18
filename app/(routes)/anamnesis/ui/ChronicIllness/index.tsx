'use client';
import React from 'react';
import { differenceInYears } from 'date-fns';
import { pluralizeAge } from '@/app/utils';
import { CURRENT_YEAR, YEARS_LIST } from '@/app/constants';
import { Patient } from '@/app/types';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/app/stores/StoreContext';
import { EditableTable, TableColumn } from '@/app/components/EditableTable';

interface Props {
  patient: Patient;
}

interface FormProps {
  case: string;
  year: number;
  age: number;
}

export const ChronicIllness = observer(
  ({ patient: { id, birthDate } }: Props) => {
    const {
      illnessStore: { list, addIllness },
      snackbarStore: { showSnackbar },
    } = useStores();

    const defaultValues = {
      case: '',
      year: CURRENT_YEAR,
      age: differenceInYears(new Date(), new Date(birthDate)),
    };

    const columns: Array<TableColumn<keyof FormProps>> = [
      {
        id: 'case',
        name: 'Случай',
        input: 'text',
        type: 'string',
        required: true,
        styles: { width: 'auto' },
      },
      {
        id: 'year',
        name: 'Год дебюта',
        input: 'select',
        type: 'number',
        options: YEARS_LIST,
        required: true,
      },
      {
        id: 'age',
        name: 'Возраст',
        input: 'text',
        type: 'number',
        required: true,
        styles: { width: 70 },
      },
    ];

    const rows = list.map((item) =>
      Object.values(columns).map(({ id }) =>
        String(id === 'age' ? pluralizeAge(item[id]) : item[id]),
      ),
    );

    const handleSubmit = async (data: FormProps) => {
      await addIllness({
        ...data,
        patientId: id,
      });
    };

    const handleError = () => showSnackbar('networkError');

    return (
      <EditableTable<FormProps>
        columns={columns}
        rows={rows}
        defaultValues={defaultValues}
        submitData={handleSubmit}
        onError={handleError}
      />
    );
  },
);
