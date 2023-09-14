import React from 'react'

type Props = {}

export default function SnakeBalls({}: Props) {
  return (
    <div className='sb-container'>
    <div className='sb-loader'>
      <div className='sb-loader--dot'></div>
      <div className='sb-loader--dot'></div>
      <div className='sb-loader--dot'></div>
      <div className='sb-loader--dot'></div>
      <div className='sb-loader--dot'></div>
      <div className='sb-loader--dot'></div>
      <div className='sb-loader--text'></div>
    </div>
  </div>
  )
}