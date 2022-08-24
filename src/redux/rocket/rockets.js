import * as actionType from './actionTypes';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
