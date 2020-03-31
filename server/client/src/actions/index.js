import { FETCH_DATA } from './types';

export function fetchData(number) {
    return {
      type: FETCH_DATA,
      payload: number
    };
  }