import { createContext, useContext } from 'react';
import { patientStore } from './patientStore';
import { illnessStore } from './illnessStore';
import { snackbarStore } from './snackbarStore';

export const StoreContext = createContext({
  patientStore,
  illnessStore,
  snackbarStore,
});

export const useStores = () => useContext(StoreContext);
