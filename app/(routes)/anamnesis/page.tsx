'use client';
import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import { Typography } from '@mui/material';
import { useStores } from '@/app/stores/StoreContext';
import { Loader } from '@/app/components';
import { AnamnesisContent } from './ui';

const pageStateConfig: { [key: string]: ReactElement | null } = {
  content: <AnamnesisContent />,
  loading: <Loader />,
  error: <Typography>Ошибка загрузки</Typography>,
};

const AnamnesisPage = observer(() => {
  const session = useSession();
  const { patientStore, familyHistoryStore } = useStores();
  const { pageState, patient, fetchPatient } = patientStore;
  const { fetchRelativesTypes } = familyHistoryStore;
  const userId = session.data?.user?.id;

  useEffect(() => {
    if (userId && !patient) {
      fetchPatient(userId);
      fetchRelativesTypes();
    }
  }, [userId, patient]);

  return pageStateConfig[pageState];
});

export default AnamnesisPage;
