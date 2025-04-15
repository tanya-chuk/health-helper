import { createContext, useContext } from 'react';
import { patientStore } from './patientStore';

export const StoreContext = createContext({
  patientStore,
});

export const useStores = () => useContext(StoreContext);
