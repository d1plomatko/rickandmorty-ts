import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {episodesService} from "../../services";
import {IApi, IEpisode} from "../../interfaces";

interface IState {
    episodes: IEpisode[],
    totalPages: number,
    error: any,
    loading: boolean

}

const initialState: IState = {
    episodes: [],
    totalPages: 1,
    error: null,
    loading: false
};

const getEpisodes = createAsyncThunk<IApi<IEpisode[]>, { page: string, name: string }>(
    'episodesSlice/getEpisodes',
    async ({page, name}, {rejectWithValue}) => {
        try {
            const {data} = await episodesService.getEpisodes(page, name);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
);

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.totalPages = action.payload.info.pages;
                state.error = null;
                state.loading = false;
            })
            .addCase(getEpisodes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getEpisodes.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: episodesReducer} = episodesSlice;

const episodesActions = {
    getEpisodes
};

export {
    episodesActions,
    episodesReducer
};