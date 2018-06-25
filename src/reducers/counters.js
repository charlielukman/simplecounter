import { ADD_COUNTER, INCREMENT, DECREMENT } from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    value: 0,
  },
  {
    id: 1,
    value: 0,
  },
]

export default function counters(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        {
          id: state.map(el => el.id)
          .reduce(( acc, cur ) => Math.max(acc, cur) + 1),
          //id: Math.max(...state.id),
          value: action.value,
        },
      ];
    case INCREMENT:
      return state.map(counter =>
        (counter.id === action.id)
         ? {...counter, value: action.value+1 }
         : counter
      )
    case DECREMENT:
      return state.map(counter =>
        (counter.id === action.id)
        ? {...counter, value: action.value-1 }
        : counter
      )
    default:
      return state
  }
}
