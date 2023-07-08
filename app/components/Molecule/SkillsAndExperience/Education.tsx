import React from 'react'
import Typography from '../../atoms/Typography/TypographyComponent'
import ExperienceCard from '../../atoms/Card/ExperienceCard'

type Props = {}

export default function Education({}: Props) {
  const style=`w-[48%] md:w-[30%] my-2 `
  return (
    <>

<div className="my-3" >
                    <Typography text="Education" type="content-title" />
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