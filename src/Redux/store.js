import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from "./authSlice";
import userReducer from "./userProfileSlice";


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    auth: authReducer,
    user: userReducer,
}));

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
