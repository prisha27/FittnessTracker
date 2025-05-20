import React from 'react'

export default function Button({ text, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 mx-auto py-4 rounded-2xl border-2 border-blue-200 border-solid cursor-pointer blueShadow duration-300 ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}
