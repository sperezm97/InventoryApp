import * as actions from '@actions';

const initialState = {
  user: {}
};

export default (state = initialState, { type, payload }) => {

  switch (type) {

    case actions.SAVE_USER_DATA:
      return { ...state, user: payload };

    case actions.EDIT_USER_DATA:
      return { ...state, user: payload };

    case actions.SIGN_OUT_USER:
      return { ...state, user: {} };


    default:
      return state;
  }
};
