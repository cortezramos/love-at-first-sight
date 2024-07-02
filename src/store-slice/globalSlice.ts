import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    modalOpen: boolean,
    phrase: string,
    phraseOk: boolean,
    initQuiz: boolean,
    finishQuiz: boolean,
    acceptanceRate: number
} = {
    modalOpen: false,
    phrase: "DAPM",
    phraseOk: false,
    initQuiz: false,
    finishQuiz: false,
    acceptanceRate: 0
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setModalOpen: (state, action) => {
            state.modalOpen = action.payload;
        },
        setPhraseOk: (state, action) => {
            state.phraseOk = action.payload;
        },
        setInitQuiz: (state, action) => {
            state.initQuiz = action.payload;
        },
        setAccpetanceRate: (state, action) => {

            if (action.payload == "+") {
                state.acceptanceRate += 10;
            } else {
                state.acceptanceRate -= 10;
            }

        },
        setResetAcceptanceRate: (state) => {
            state.acceptanceRate = 0;
        },
        setFinishQuiz: (state, action) => {
            state.finishQuiz = action.payload;
        }
    },
})

export default globalSlice.reducer;

export const {
    setModalOpen,
    setPhraseOk,
    setInitQuiz,
    setAccpetanceRate,
    setResetAcceptanceRate,
    setFinishQuiz
} = globalSlice.actions;