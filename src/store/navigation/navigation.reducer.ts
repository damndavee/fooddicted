import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStackParamList } from "../../navigation/stack/type";

type SliceState = {
    prevRoute: keyof RootStackParamList | null;
    isLoading: boolean;
};

type Reducers = {
    setPreviousRoute: (state: SliceState, action: PayloadAction<keyof RootStackParamList>) => void;
};

const slice = createSlice<SliceState, Reducers>({
    name: "navigationReducer",
    initialState: {
        prevRoute: null,
        isLoading: false,
    },
    reducers: {
        setPreviousRoute(state, action) {
            state.prevRoute = action.payload;
        },
    }
});

export const { setPreviousRoute } = slice.actions;
export default slice.reducer;