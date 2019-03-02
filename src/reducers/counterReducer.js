import * as actions from '../actions/index';

const initialState = {
  counter: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.INCREMENT_COUNTER:
      return { counter: state.counter + 1 };

    case actions.DECREMENT_COUNTER:
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};
