import { makeAutoObservable, runInAction } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import {
  FamilyHistoryRecord,
  NewFamilyHistoryRecord,
  Relative,
} from '@/app/types';

class FamilyHistoryStore {
  list: Array<FamilyHistoryRecord> = [];
  relativeTypes: Array<Relative> = [];

  constructor() {
    makeAutoObservable(this);
  }

  initStore = (list: Array<FamilyHistoryRecord>) => {
    this.list = list;
  };

  addEntry = async (entry: NewFamilyHistoryRecord) => {
    const list: AxiosResponse = await axios.post(`/api/familyHistory`, entry);

    runInAction(() => {
      this.list.push(list.data);
    });
  };

  fetchRelativesTypes = async () => {
    const list: AxiosResponse = await axios.get(`/api/relatives`);

    runInAction(() => {
      this.relativeTypes = list.data;
    });
  };

  resetStore = () => {
    this.list = [];
  };
}

export const familyHistoryStore = new FamilyHistoryStore();
