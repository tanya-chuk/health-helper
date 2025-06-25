import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import { Surgery, NewSurgery } from '@/app/types';

class SurgeriesStore {
  list: Array<Surgery> = [];

  constructor() {
    makeAutoObservable(this);
  }

  initStore(list: Array<Surgery>) {
    this.list = list;
  }

  addSurgery = async (surgery: NewSurgery) => {
    const list: AxiosResponse = await axios.post(`/api/surgery`, surgery);

    runInAction(() => {
      this.list.push(list.data);
    });
  };

  resetStore() {
    this.list = [];
  }
}

export const surgeriesStore = new SurgeriesStore();
