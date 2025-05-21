import React, { useState } from 'react'

export default function ExerciseCard(props) {
    const { exercise, i } = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [setsCompleted, setSetsComplete] = useState(0)

    function handleSetIncrement() {
        setSetsComplete((setsCompleted + 1) % 6)
    }

    return (
        <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-100 text-blue-900 dark:bg-slate-950 dark:text-white sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
                    0{i + 1}
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
              <div className="relative inline-block"
              onMouseEnter={() => setDropdownOpen(true)}
               onMouseLeave={() => setDropdownOpen(false)}>
          <button
            className='cursor-pointer'
            aria-label="Exercise video link"
          >
            <i className="fa-solid fa-circle-info"></i>
          </button>
         {dropdownOpen && (
      <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-56 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded shadow-lg z-50 transition-all duration-200">
        <a
          href={exercise.anyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 text-blue-600 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
        >
          Get More Info
              </a>
            </div>
          )}
        </div>
                
                <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
                <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
            </div>

            { <div className='flex flex-colbg-slate-100 text-blue-900 dark:bg-slate-950 dark:text-white rounded gap-2 '>
                {exercise.description.split('___').map((val) => {
                    return (
                        <div className='text-sm'>
                            {val}
                        </div>
                    )
                })}
            </div> }

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full'>
                            <h3 className='capitalize text-slate-400 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>

                            <p className='font-medium'>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full duration-200'>
                    <h3 className='text-slate-400 text-sm capitalize'>Sets completed</h3>
                    <p className='font-medium'>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    )
}