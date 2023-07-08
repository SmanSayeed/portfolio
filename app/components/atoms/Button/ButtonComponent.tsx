import React,{ ReactNode } from 'react'

type Props = {
    children:ReactNode,
    className?:String,
}

export default function Button({children,className}: Props) {
  return (
    <div className={`px-3 py-2 flex justify-center items-center text-white button-bg font-extralight text-sm rounded-md ${className}`}>
        {children}
    </div>
  )
}