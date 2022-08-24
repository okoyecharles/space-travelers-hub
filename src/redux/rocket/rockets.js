import * as actionType from './actionTypes';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ROCKETS:
      return [...action.payload];
    case actionType.RESERVE_ROCKET:
      return state.map((rocket) => (rocket.rocketId === action.payload
        ? { ...rocket, reserved: !rocket.reserved }
        : rocket));
    default:
      return state;
  }
};

export default rocketsReducer;
