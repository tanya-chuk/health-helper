import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosError } from 'axios';
import { Patient } from '@/app/types';

class PatientStore {
  patient: Patient | null = null;
  loading = false;
  error: string | null = null;
  pageState: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPatient() {
    try {
      this.loading = true;
      this.pageState = 'loading';

      const { data } = await axios.get<Patient>(`/api/patient`);

      runInAction(() => {
        this.patient = data;
        this.loading = false;
        this.pageState = 'content';
      });
    } catch (err: unknown) {
      this.loading = false;
      this.patient = null;
      this.pageState = 'error';

      const errResponse = err instanceof AxiosError ? err.response : null;
      this.error = errResponse?.data || 'Ошибка загрузки';
    }
  }
}

export const patientStore = new PatientStore();
