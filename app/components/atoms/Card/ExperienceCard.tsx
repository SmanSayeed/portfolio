import React from 'react'
import Typography from '../Typography/Typography'

type Props = {
    title:String,
    year:String,
    companyName:String,
    className?:String
}

export default function ExperienceCard({title,year,companyName,className}: Props) {
  return (
    <>
    <div className={`flex flex-col justify-start items-start bg-gray-200 px-1 py-1 rounded-md ${className}`}>
    <Typography text="Software Engineer" type="title" className="text-[18px]" />
    <div className='h-[5px] w-[60%] bg-gray-400 rounded-md'>

    </div>
    <p className='primary-text'>
20021-Present
    </p>
    <p className=''>
        BJIT Ltd
    </p>

    </div>
   
    </>
  )
}