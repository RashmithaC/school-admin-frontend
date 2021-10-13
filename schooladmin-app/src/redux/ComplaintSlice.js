import { createSlice } from '@reduxjs/toolkit';


export const complaintSlice = createSlice({

  name: 'complaint',
  initialState: {
    getComplaintByIdState: {
      complaintId: '',
      note: '',
      student: ''
    },
    allComplaintState: [],

  },
  reducers: {
    getComplaintById: (state, action) => {
      state.getComplaintByIdState = action.payload;
    },
    // getAllUsers: (state, action) => {
    //   state.allUsersState = action.payload;
    // },
    // addUsers: (state, action) => {
    //   state.userState = action.payload;
    // },
    // deleteUserById: (state, action) => {
    //   state.userState = action.payload;
    // },
    // updateUserById:(state,action)=>{
    //   state.userState=action.payload;
    // }

  }
})

// export const { getComplaintById, getAllUsers, addUser, deleteUserById ,updateUserById} = userSlice.actions;
export const{ getComplaintById}=complaintSlice.actions;
export default complaintSlice.reducer;