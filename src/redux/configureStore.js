import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({ missions: missionReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
