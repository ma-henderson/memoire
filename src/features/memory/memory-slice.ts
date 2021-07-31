import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Memory {
  author: string;
  text: string;
  date: Date;
};

interface MemoryState {
  memories: Memory[];
}

const initialState: MemoryState = {
  memories: [],
};

const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {
    addMemory(state, action: PayloadAction<Memory>) {
      state.memories.push(action.payload);
      console.log("memories CHANGED: " + state.memories);
    }
  }
})

export const { addMemory } = memorySlice.actions;
export default memorySlice.reducer;
