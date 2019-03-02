import * as actions from './index';

export const incrememtCounter = () => ({
  type: actions.INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: actions.DECREMENT_COUNTER,
});
