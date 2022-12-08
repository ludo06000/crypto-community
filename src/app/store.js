import { configureStore} from '@reduxjs/toolkit'
import walletReducer from "../features/walletSlice"
import userReducer from "../features/userSlice"

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        user: userReducer
    }
});

export default store;