import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: { email: "", firstname:"", lastname:"" },
    reducers: {

    dataUser: (state, action) => {
        state.email = action.payload.email
        state.firstname = action.payload.firstname
        state.lastname = action.payload.lastname
    },
    resetUser: (state) => {
        state.email = ""
        state.firstname = ""
        state.lastname = ""
    }
    }
});

// Export des actions
export const { dataUser } = userSlice.actions;
// Export du reducer
export default userSlice.reducer;