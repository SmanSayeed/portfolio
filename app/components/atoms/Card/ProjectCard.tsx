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
    <div className={`flex flex-col justify-start items-center bg-white px-3 py-3 rounded-md ${className} shadow-lg min-h-[400px]`}>
    <Typography text={title} type="content-title"  />
    <div className='h-[200px] w-[200px] bg-gray-400 rounded-md'>

    </div>
    <p className='primary-text font-extrabold'>
{year}
    </p>  
    <p className=''>
       {companyName}
    </p>
     

    </div>
   
    </>
  )
}