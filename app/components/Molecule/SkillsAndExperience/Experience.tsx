import React from 'react'
import Typography from '../../atoms/Typography/TypographyComponent'
import ExperienceCard from '../../atoms/Card/ExperienceCard'

type Props = {}

export default function Experience({}: Props) {

    const style = `w-[48%] md:w-[20%] my-2`
  return (
    <>

<div className="my-3" >
                    <Typography text="Experience" type="content-title" />
                </div>
                
              <div className="flex justify-between items-start flex-wrap">
                
                   <div className={`${style}`}>
                   <ExperienceCard title="Software Engineer" year={"2021-Present"} companyName={"BJIT ltd"} />
                  </div>
               
                  <div className={`${style}`}>
                  <ExperienceCard title="Web Developer" year={"2020-2021"} companyName={"Essential Infotech ltd"} />
                  </div>

                  <div className={`${style}`}>
                    
                  <ExperienceCard title="Web Developer" year={"2019-2020"} companyName={"Mensa Digiworld"} />
                    
                    </div>

                    <div className={`${style}`}>
                    <ExperienceCard title="Web Developer" year={"2018-2019"} companyName={"IPIT Ltd"} />
         
            
                    </div>
         

              </div>

    </>
  )
}