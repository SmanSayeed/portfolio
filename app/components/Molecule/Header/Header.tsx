import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <>
  
  <div  className='h-20 w-full bg-blue-800 text-white flex justify-between items-center'>
    <div className='w-[30%] ml-5 '>
        Saadman Sayeed's portfolio
    </div>
  <div className='h-20 w-full text-white flex justify-end gap-10 items-center mr-5'>

            <div>
              Skills
            </div>

            <div>
              Projects
            </div>

            <div>
              Services
            </div>

            <div>
              Experience
            </div>

            <div>
              Contact
            </div>

      </div>

  </div>
   
    </>
  )
}