import React from 'react';
import { ExerciseFlashCard } from './ExerciseFlashCard'; // Adjust path if needed

// Sample data
export default function ExerciseGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 w-full max-w-7xl mx-auto">        {exercises.map((exercise, idx) => (
          <ExerciseFlashCard exercise={exercise} index={idx} key={idx} />
        ))}
      </div>
    </div>
  );
}
