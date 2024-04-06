import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainState, TMessage } from './types'



// Define the initial state using that type
const initialState: IMainState = {
    messages: [],
    user_profile: {
        id: 1,
        name: 'Abayomi',
        user_name: 'paulos_ab',
        date_joined: 'Sep 12, 2019',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcbLjcZKWWHRRpf5gdOSCI78jLz3gpNgL67AcTD3zFE-zU_GTG'
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