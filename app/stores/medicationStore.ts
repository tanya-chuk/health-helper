import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import { Medication, NewMedication } from '@/app/types';

class MedicationStore {
  list: Array<Medication> = [];

  constructor() {
    makeAutoObservable(this);
  }

  initStore(list: Array<Medication>) {
    this.list = list;
  }

  addMedication = async (illness: NewMedication) => {
    const list: AxiosResponse = await axios.post(`/api/medication`, illness);

    runInAction(() => {
      this.list.push(list.data);
    });
  };

  resetStore() {
    this.list = [];
  }
}

export const medicationStore = new MedicationStore();
