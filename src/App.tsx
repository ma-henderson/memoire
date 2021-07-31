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

  const [state, setState] = useState({
    author: "Unknown",
    text: "None.",
    date: new Date(),
  });

  const handleClick = () => {
    console.log("Click handled.");
    dispatch(addMemory(state));
  }

  return (
    <div>
      <h1>Memories App</h1>
      <p>Awrite your memory in the below experience!</p>
      <h3>Author</h3>
      <textarea onChange={(e) => (setState({...state, text: e.target.value}))} />
      <h3>Memory</h3>
      <textarea onChange={(e) => (setState({...state, author: e.target.value}))} />
      <button onClick={handleClick}>Save Memory</button>
    {allMemories.length > 0 &&
      <Feed />
    }
    </div>
  )
}

export default App
