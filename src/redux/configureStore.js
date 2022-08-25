import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';
import rocketsReducer from './rocket/rockets';

const rootReducer = combineReducers({ missions: missionReducer, rockets: rocketsReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
