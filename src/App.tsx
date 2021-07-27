import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { addMemory } from './features/memory/memory-slice';
import './App.css'
import Feed from './features/memory/feed';

function App() {
  // Selector
  const allMemories = useAppSelector((state) => state.memory.memories)
  // Action Dispatcher
  const dispatch = useAppDispatch();

  const [memoryState, setMemoryState] = useState("");
  const handleClick = () => {
    console.log("Click handled.");
    dispatch(addMemory(memoryState));
  }

  return (
    <div>
      <h1>Memories App</h1>
      <p>write your memory in the below experience!</p>
      <textarea onChange={(e) => (setMemoryState(e.target.value))} />
      <button onClick={handleClick}>Save Memory</button>
    {allMemories.length > 0 &&
      <Feed />
    }
    </div>
  )
}

export default App
