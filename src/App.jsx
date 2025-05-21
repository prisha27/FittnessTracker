import { useState, useRef, useEffect } from 'react'
import Workout from './components/Workout'
import Hero from './components/Hero'
import Generator from './components/Generator'
import { generateWorkout } from './utils/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strength_power')
  const [theme, setTheme] = useState('dark')

  const generatorRef = useRef(null)
  const workoutRef = useRef(null)

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goals })
    setWorkout(newWorkout)
  }

  function scrollToGenerator() {
    if (generatorRef.current) {
      generatorRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Theme toggle logic
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    if (workout && workoutRef.current) {
      workoutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [workout])

  return (
 <div className="min-h-screen bg-gradient-to-r from-blue-50 to-wheat text-slate-400 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white transition-colors duration-300">       
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-blue-100 dark:bg-slate-800 shadow-lg transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faMoon} className="text-blue-900 text-xl" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-xl" />
          )}
        </button>


        <Hero onAccept={scrollToGenerator} />
        <div ref={generatorRef}>
          <Generator
            poison={poison}
            setPoison={setPoison}
            muscles={muscles}
            setMuscles={setMuscles}
            goals={goals}
            setGoals={setGoals}
            updateWorkout={updateWorkout}
          />
        </div>
        {workout && (
          <div ref={workoutRef}>
            <Workout workout={workout} />
          </div>
        )}
      </div>
    
  )
}

export default App
