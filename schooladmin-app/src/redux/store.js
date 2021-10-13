import { configureStore } from '@reduxjs/toolkit';
import complaintReducer from './ComplaintSlice'
// import adminReducer from './AdminSlice';

console.log('0 store');

const store = configureStore({
    reducer: {
        complaint: complaintReducer,
        // admin: adminReducer
    },
})
export default store;