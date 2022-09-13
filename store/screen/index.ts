import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
    sectionInView: number
}

const initialState: State = {
    sectionInView: 0,
}

const screenSlice = createSlice({
    name: 'screen',
    reducers: {
        setSectionInView: (state, action: PayloadAction<number>) => ({
            ...state,
            sectionInView: action.payload,
        }),
    },
    initialState,
})

export const {
    setSectionInView
} = screenSlice.actions

export default screenSlice.reducer
