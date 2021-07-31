import React from 'react';
import { useAppSelector } from '../../app/hooks';

export const Feed = () => {	
  
  // Redux Hooks
  // Selectors
  const allMemories = useAppSelector((state) => state.memory.memories)

  return (
    <div>
    <h2>Other memories:</h2>
    {allMemories.map((mem) => (
    <div>
      <p>{mem.author}</p>	
      <p>{mem.text}</p>	
      <p>{mem.date.toLocaleDateString()}</p>
    </div>
    ))}
    </div>
  );
};

export default Feed;
