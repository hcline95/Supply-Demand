import { FETCH_DATA, RESET_DATA, FETCH_QUANTITY, FETCH_GRAPH, FETCH_EQUALIBRIUM, FETCH_SUPPLIERS, FETCH_STAGE,SET_DEMAND_CURVE, SET_SUPPLY_CURVE } from './types';

export function fetchData(number) {
    return {
      type: FETCH_DATA,
      payload: number
    };
  }

  export function resetData() {
    return {
      type: RESET_DATA
    };
  }

  export function fetchGraph(lines) {
    return {
      type: FETCH_GRAPH,
      payload: lines
    };
  }

  export function fetchQuantity(quantity) {
    return {
      type: FETCH_QUANTITY,
      payload: quantity
    };
  }

  export function fetchEqualibrium(lines) {
    return {
      type: FETCH_EQUALIBRIUM,
      payload: lines.equalibrium
    };
  }

  export function fetchSuppliers(suppliers) {
    return {
      type: FETCH_SUPPLIERS,
      payload: suppliers
    };
  }

  export function fetchStage(stage) {
    return {
      type: FETCH_STAGE,
      payload: stage
  }
  }


  export function setDemandCurve(coordinate, equalibrium, color) {
    return {
      type: SET_DEMAND_CURVE,
      payload: {coordinate: coordinate, equalibrium: equalibrium, color: color}
  }
  }

  export function setSupplyCurve(coordinate, equalibrium, color) {
    return {
      type: SET_SUPPLY_CURVE,
      payload: {coordinate: coordinate, equalibrium: equalibrium, color: color}
  }
  }
