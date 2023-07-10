import React from 'react'
import ExperienceCard from '../../atoms/Card/ExperienceCardComponent'

type Props = {}

export default function Education({}: Props) {
  const style=`w-[48%] md:w-[30%] my-2 `
  return (
    <>

<div className="my-3" >
                 =
                    <p className="content-title">
                    Education
                    </p>
                </div>
                
              <div className="flex justify-between items-start flex-wrap">
                
                   <div className={style}>
                   <ExperienceCard title="BSc in CSE" year={"2018"} companyName={"Comilla University, Cumilla, Bangladesh"} />
                  </div>
               
                  <div className={style}>
                  <ExperienceCard title="Higher Secondary School Certificate (HSC)" year={"2013"} companyName={"Trust College, Uttara, Dhaka, Bangladesh"} />
                  </div>

                  <div className={style}>
                    
                  <ExperienceCard title="Secondary School Certificate (SSC)" year={"2011"} companyName={"Uttara High School and College"} />
                    
                    </div>

                   
         

              </div>

    </>
  )
}