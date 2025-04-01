'use client';  // Indicate that this file is client-side


import React from 'react';
import PuterChat from '@components/ai/ContentGenAi';



const page = () => {
      const currentPath ='/content-generation'
  return (
    <PuterChat currentPath={currentPath} />
  )
}

export default page


