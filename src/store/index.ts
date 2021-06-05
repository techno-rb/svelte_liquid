import { writable } from 'svelte/store';

export const rootStore = {
  width: writable(0),
  height: writable(0),
};
