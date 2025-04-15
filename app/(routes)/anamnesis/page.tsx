'use client';
import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { useStores } from '@/app/stores/StoreContext';
import { Anamnesis, Loader } from './ui';

const pageStateConfig: { [key: string]: ReactElement | null } = {
  content: <Anamnesis />,
  loading: <Loader />,
  error: <Typography>Ошибка загрузки</Typography>,
};

const AnamnesisPage = observer(() => {
  const { patientStore } = useStores();
  const { pageState } = patientStore;

  useEffect(() => {
    patientStore.fetchPatient();
  }, []);

  return pageStateConfig[pageState];
});

export default AnamnesisPage;
