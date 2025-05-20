import React from 'react'

export default function Button(props) {
    const {text,func} =  props
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-2xl border-2 border-blue-200  border-solid cursor-pointer blueShadow duration-300'>
     <p> {text} </p></button>
  )
}
