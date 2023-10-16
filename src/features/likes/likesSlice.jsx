import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
}

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addLike(state) {
      state.amount += 1
    },
  },
})

export const { addLike } = likesSlice.actions

export default likesSlice.reducer
