import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IApi, ILocation} from "../../interfaces";

import {AxiosError} from "axios";
import {ILocationParams, locationsService} from "../../services";

interface IState {
    locations: ILocation[],
    totalPages: number,
    error: any,
    loading: boolean
}

const initialState: IState = {
    locations: [],
    totalPages: 1,
    error: null,
    loading: false
};

const getLocations = createAsyncThunk<IApi<ILocation[]>,
    ILocationParams>(
    'locationsSlice/getLocations',
    async ({page, name, type, dimension},
           {rejectWithValue}) => {
        try {
            const {data} = await locationsService.getLocations({page, name, type, dimension});
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
);

const locationsSlice = createSlice({
    name: 'locationsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getLocations.fulfilled, (state, action) => {
                state.locations = action.payload.results
                state.totalPages = action.payload.info.pages
                state.error = null
                state.loading = false
            })
            .addCase(getLocations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLocations.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false
            })
});

const {reducer: locationsReducer} = locationsSlice;

const locationsActions = {
    getLocations
};

export {
    locationsActions,
    locationsReducer
};


