import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import { Illness, NewIllness } from '@/app/types';
import { snackbarStore } from './snackbarStore';

class IllnessStore {
  list: Array<Illness> = [];

  constructor() {
    makeAutoObservable(this);
  }

  initStore(list: Array<Illness>) {
    this.list = list;
  }

  addIllness = async (illness: NewIllness) => {
    try {
      const list: AxiosResponse = await axios.post(`/api/illness`, illness);

      runInAction(() => {
        this.list.push(list.data);
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      snackbarStore.showSnackbar('networkError');
    }
  };

  resetStore() {
    this.list = [];
  }
}

export const illnessStore = new IllnessStore();
