import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {charactersService, ICharacterParams} from "../../services";
import {IApi, ICharacter} from "../../interfaces";



interface IState {
    characters: ICharacter[],
    totalPages: number,
    error: any,
    loading: boolean
}

const initialState: IState = {
    characters: [],
    totalPages: 1,
    error: null,
    loading: false
};


const getCharacters = createAsyncThunk<IApi<ICharacter[]>, ICharacterParams>(
    'charactersSlice/getCharacters',
    async ({page, species, status, gender}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getCharacters({page, species, status, gender})
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
);

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload.results;
                state.totalPages = action.payload.info.pages;
                state.loading = false;
                state.error = null;
            })
            .addCase(getCharacters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

});

const {reducer: charactersReducer} = charactersSlice;

const charactersActions = {
    getCharacters
};

export {
    charactersActions,
    charactersReducer
};