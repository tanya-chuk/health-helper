import { makeAutoObservable, runInAction } from 'mobx';
import { Snackbar, SnackbarNames } from '@/app/types';

export const DEFAULT_DURATION = 4000;

const snackbars: Record<SnackbarNames, Snackbar> = {
  networkError: {
    open: false,
    name: 'networkError',
    message: 'Ошибка запроса, попробуйте снова',
    severity: 'error',
    duration: DEFAULT_DURATION,
  },
};

class SnackbarStore {
  snackbars: Record<SnackbarNames, Snackbar> = snackbars;

  constructor() {
    makeAutoObservable(this);
  }

  showSnackbar = (name: SnackbarNames) => {
    runInAction(() => {
      this.snackbars[name].open = true;
    });
  };

  clearSnackbar = (name: SnackbarNames) => {
    this.snackbars[name].open = false;
  };
}

export const snackbarStore = new SnackbarStore();
