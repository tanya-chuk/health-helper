import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import { Illness, NewIllness } from '@/app/types';

class IllnessStore {
  list: Array<Illness> = [];

  constructor() {
    makeAutoObservable(this);
  }

  initStore(list: Array<Illness>) {
    this.list = list;
  }

  addIllness = async (illness: NewIllness) => {
    const list: AxiosResponse = await axios.post(`/api/illness`, illness);

    runInAction(() => {
      this.list.push(list.data);
    });
  };

  resetStore() {
    this.list = [];
  }
}

export const illnessStore = new IllnessStore();
