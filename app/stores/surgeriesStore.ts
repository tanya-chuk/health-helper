import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import { Operation, NewOperation } from '@/app/types';

class SurgeriesStore {
  list: Array<Operation> = [];

  constructor() {
    makeAutoObservable(this);
  }

  initStore(list: Array<Operation>) {
    this.list = list;
  }

  addSurgery = async (surgery: NewOperation) => {
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
