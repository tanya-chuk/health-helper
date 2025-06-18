import { createContext, useContext } from 'react';
import { patientStore } from './patientStore';
import { illnessStore } from './illnessStore';
import { surgeriesStore } from './surgeriesStore';
import { snackbarStore } from './snackbarStore';

export const StoreContext = createContext({
  patientStore,
  illnessStore,
  surgeriesStore,
  snackbarStore,
});

export const useStores = () => useContext(StoreContext);
