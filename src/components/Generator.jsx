import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
    const {index , title, description} = props
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-4'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>{index}</p>
                <h4 className='text-xl'>{title}</h4>
            </div>
            
            <p className='text-sm sm:text-base mx-auto'>
                {description}</p>

        </div>
    )
}
export default function Generator(props) {
         const [showModal, setShowModal] =  useState(false)
         const {muscles, setMuscles, poison,setPoison,goals,setGoals,updateWorkout,scrollToWorkout} = props

        function toggleModal () {
            setShowModal(!showModal)
        }

        function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }




  return (
   <SectionWrapper header={"generate your workout"} 
   title={['It\'s', 'Huge', 'o\'clock']}>

                <Header index={'01'} title={'Pick Your Position'}
description={"Select the workout you want to start with"} />

<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 px-8'>


{Object.keys(WORKOUTS).map((type, typeIndex) => {
    return (
        <button onClick={() =>{
            setMuscles([])
            setPoison(type)

        }} className={
  `bg-slate-100 text-blue-900 dark:bg-slate-950 dark:text-white border py-4 rounded-lg duration-200 hover:border-green-600 cursor-pointer ${
    type === poison ? 'border-green-400' : 'border-blue-100'
  }`
}

            key={typeIndex} >
            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
        </button>
    )
})}
</div>

  <Header index={'02'} title={'Lock On Targets'}
description={"Select the muscles judged for annihilation."} />
<div className='px-8'>
<div className='bg-slate-100 text-blue-900 dark:bg-slate-950 dark:text-white border-green-400 flex flex-col
rounded-lg'>
<button onClick={toggleModal} className=' mx-auto cursor-pointer relative  flex py-3 px-6 items-center justify-center'>
    <p className='capitalize'>{muscles.length == 0 ? 'Select Muscle Group' : muscles.join(', ')}</p>
    <i className="fa-solid absolute right-2 top-0.25 translate-y-1/2 fa-caret-down"></i>
</button>
{showModal && (
    <div className='flex flex-col p-4 '> 
    {(poison === 'individual'? WORKOUTS[poison] : Object.keys(WORKOUTS[poison]))
    .map((muscleGroup, muscleGroupIndex) => {
        return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            </div>
  <Header index={'03'} title={'Become Juggernaut'}
description={"Select Your Ultimate Objective"} />

<div className='grid grid-cols-3 gap-4 px-8'>



{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
    return (
        <button onClick={() =>{
            setGoals(scheme)

        }} className={
  `bg-slate-100 text-blue-900 dark:bg-slate-950  dark:text-white border py-4 rounded-lg duration-200 hover:border-green-600 cursor-pointer ${
    scheme === goals ? 'border-green-400' : 'border-blue-100'
  }`
}

            key={schemeIndex} >
            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
        </button>
    )
})}
</div>

<Button onClick={updateWorkout } text={"Formulate"} className='mt-6'></Button>

   </SectionWrapper>

  )
}
//mx-auto centers everything hortizontally