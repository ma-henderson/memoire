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
      <p>{mem}</p>	
    ))}
    </div>
  );
};

export default Feed;
