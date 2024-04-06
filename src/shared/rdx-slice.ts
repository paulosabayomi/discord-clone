import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainState, TMessage } from './types'



// Define the initial state using that type
const initialState: IMainState = {
    messages: [],
    user_profile: {
        id: 2,
        name: 'Test User',
        user_name: 'test_user',
        date_joined: 'Feb 26, 2020',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg'
    },
    show_join_server: false,
    show_add_channel: false,
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setShowJoinServer: (state, action: PayloadAction<boolean>) => {
      state.show_join_server = action.payload
    },
    setShowAddChannel: (state, action: PayloadAction<boolean>) => {
      state.show_add_channel = action.payload
    },
    updateMessages: (state, action: PayloadAction<TMessage>) => {
      state.messages.push(action.payload)
    },
  },
})

export const { 
  updateMessages,
  setShowJoinServer,
  setShowAddChannel
} = mainSlice.actions


export default mainSlice.reducer