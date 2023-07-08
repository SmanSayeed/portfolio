import React from 'react'


type Props = {
    title:String,
    year:String,
    companyName:String,
    className?:String
}

export default function ExperienceCard({title,year,companyName,className}: Props) {
  return (
    <>
    <div className={`flex flex-col justify-start items-start bg-gray-200 px-3 py-3 rounded-md ${className} shadow-lg min-h-[150px]`}>
    <div className='text-xl'>{title}</div>
    <div className='h-[5px] w-[80%] bg-gray-400 rounded-md'>

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