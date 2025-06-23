import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosError } from 'axios';
import { Patient } from '@/app/types';
import { illnessStore } from './illnessStore';
import { surgeriesStore } from './surgeriesStore';
import { familyHistoryStore } from './familyHistoryStore';
import { medicationStore } from './medicationStore';

class PatientStore {
  patient: Patient | null = null;
  loading = false;
  error: string | null = null;
  pageState: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  fetchPatient = async (id: string) => {
    try {
      this.loading = true;
      this.pageState = 'loading';

      const { data } = await axios.get<Patient>(`/api/patient`, {
        params: { id },
      });

      runInAction(() => {
        this.patient = data;
        this.loading = false;
        this.pageState = 'content';

        illnessStore.initStore(data.illness);
        surgeriesStore.initStore(data.surgeries);
        familyHistoryStore.initStore(data.familyHistory);
        medicationStore.initStore(data.medications);
      });
    } catch (err: unknown) {
      this.loading = false;
      this.patient = null;
      this.pageState = 'error';

      const errResponse = err instanceof AxiosError ? err.response : null;
      this.error = errResponse?.data || 'Ошибка загрузки';
    }
  };

  resetStore = () => {
    this.patient = null;
    this.loading = false;
    this.error = null;
    this.pageState = '';
  };
}

export const patientStore = new PatientStore();
