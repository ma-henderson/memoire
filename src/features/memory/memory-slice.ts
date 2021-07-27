import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MemoryState {
  memories: string[];
};

const initialState: MemoryState = {
  memories: [],
};

const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {
    addMemory(state, action: PayloadAction<string>) {
      state.memories.push(action.payload);
      console.log("memories CHANGED: " + state.memories);
    }
  }
})

export const { addMemory } = memorySlice.actions;
export default memorySlice.reducer;
