import { useState,useRef,useEffect } from 'react'
import Workout from './components/Workout'
import Hero from './components/Hero'
import Generator from './components/Generator'
import { generateWorkout} from './utils/functions'

//biggest parent component
function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
         const [muscles, setMuscles] = useState([])
         const [goals, setGoals] = useState('strength_power')

         const generatorRef =useRef(null)
          const workoutRef = useRef(null);

         function updateWorkout(){
          if(muscles.length <1)
          {
            return
          }
          let newWorkout = generateWorkout({poison,muscles,goals})
          //console.log(newWorkout)
          setWorkout(newWorkout)
         }

         function scrollToGenerator() {
          if (generatorRef.current) {
             generatorRef.current.scrollIntoView({ behavior: 'smooth' })
          }
         }

         function scrollToWorkout() {
          if (workoutRef.current) {
             workoutRef.current.scrollIntoView({ behavior: 'smooth' })
          }
         }

         
  useEffect(() => {
    if (workout && workoutRef.current) {
      workoutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [workout]);

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
    <Hero onAccept={scrollToGenerator}/>
    <div ref={generatorRef}>
    <Generator 
    poison={poison} 
    setPoison={setPoison}
    muscles={muscles}
    setMuscles={setMuscles}
    goals={goals}
    setGoals={setGoals}
    updateWorkout={updateWorkout}
    scrollToWorkout={scrollToWorkout}
     />
     </div>
   {workout && (
    <div ref={workoutRef}> <Workout workout={workout}/> 
</div> )}

    </main>
  )
}

export default App


