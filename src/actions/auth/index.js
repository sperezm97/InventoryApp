import * as actions from '../index';

export const saveUserData = user => ({
  type: actions.SAVE_USER_DATA,
  payload: user
});

export const editUserData = user => ({
  type: actions.SAVE_USER_DATA,
  payload: user
});

export const signOutData = () => ({
  type: actions.SAVE_USER_DATA

});
