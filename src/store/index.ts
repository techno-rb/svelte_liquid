import { writable } from 'svelte/store';
import type { ModalStateType, RootStateType } from './types';


export const rootState: RootStateType = {
  formList: writable([]),
};

export const modalState: ModalStateType = {
  active: writable(false),
}