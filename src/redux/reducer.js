import { createSlice } from '@reduxjs/toolkit'

const initialState = { videos: [] }

const videoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addVideo(state,action) {
      state.videos = [...state.videos,action.payload.video]
    },
    receiveVideos(state,action) {
      state.videos = [...action.payload.videos]
    },
    removeVideo(state, action) {
      state.videos =  [...state.videos].filter(video => video.id !== action.payload)
    },
  },
})

export const { addVideo,receiveVideos,removeVideo } = videoSlice.actions

export default videoSlice.reducer