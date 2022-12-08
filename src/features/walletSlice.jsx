import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
    name: "wallet",
    initialState: { email: "", },
    reducers: {


}
});

// Export des actions
export const { dataUser } = walletSlice.actions;
// Export du reducer
export default walletSlice.reducer;