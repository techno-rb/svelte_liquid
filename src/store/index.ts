import { Writable, writable } from 'svelte/store';
import type { FormType } from './types';

export type RootStateType = {
  formList: Writable<FormType[]>,
};

export const rootState: RootStateType = {
  // width: writable(0),
  formList: writable([]),
};
