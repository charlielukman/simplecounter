import { ADD_COUNTER, INCREMENT, DECREMENT } from '../constants/ActionTypes';

const initialValue=0;

export const addCounter = () => ({
  type: ADD_COUNTER,
  value: initialValue,
});

export const increaseCounter = (id, value) => ({
  type: INCREMENT,
  id,
  value: value++,
});

export const decreaseCounter = (id, value) => ({
  type: DECREMENT,
  id,
  value: value--,
});
