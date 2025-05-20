import React from 'react'
import Button from './Button'

export default function Hero({onAccept}) {
  return (
   <div className='min-h-screen flex flex-col gap-15 items-center justify-center text-center max-w-[900px]
   w-full mx-auto p-5'>
    <div className='flex flex-col gap-4'>
   <p> IT'S TIME TO GET</p>
   <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
   </div>
   <p className='text-sm md:text-base font-light'>With us, you can easily <span className='text-blue-300 font-medium'>log your workouts</span>, set fitness goals, and monitor your progress <span className='text-blue-300 font-medium'>all in one place</span>. Whether you're a <span className='text-blue-300 font-medium'>beginner or a seasoned athlete</span>, our app helps you stay motivated and organized, making every workout count. Start your fitness journey today and unlock your <span className='text-blue-300 font-medium'>full potential</span> with Swoley-Fit!

</p>
<Button text={"Accept & Begin"} onClick={onAccept}></Button>
    </div>
   
  )
}
