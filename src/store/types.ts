import type { Writable } from 'svelte/store';

export type FormType = {
  name: string,
};

export type RootStateType = {
  formList: Writable<FormType[]>,
};

export type ModalStateType = {
  active: Writable<Boolean>,
};
