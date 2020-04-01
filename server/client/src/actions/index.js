import { FETCH_DATA, FETCH_GRAPH, FETCH_EQUALIBRIUM } from './types';

export function fetchData(number) {
    return {
      type: FETCH_DATA,
      payload: number
    };
  }

  export function fetchGraph(lines) {
    return {
      type: FETCH_GRAPH,
      payload: lines
    };
  }

  export function fetchEqualibrium(lines) {
    return {
      type: FETCH_EQUALIBRIUM,
      payload: lines.equalibrium
    };
  }