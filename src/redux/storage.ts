import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer, episodesReducer, locationsReducer} from "./slices";


const rootReducer = combineReducers({
    charactersReducer,
    episodesReducer,
    locationsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppDispatch,
    AppStore
};

export {
    setupStore
};