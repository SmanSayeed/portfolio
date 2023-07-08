import React from 'react'
import Typography from '../../atoms/Typography/TypographyComponent'
import ProjectCard from '../../atoms/ProjectCard/ProjectCard'

type Props = {}

export default function Projects({}: Props) {

    const style = `w-[48%] md:w-[23%] my-2`
  return (
    <>

<div className="my-3" >
                    <Typography text="Projects" type="content-title" />
                </div>
                
              <div className="flex justify-between items-start flex-wrap">
                
                   <div className={`${style}`}>
                   <ProjectCard title="Afterbee" year={"2021-Present"} companyName={"BJIT ltd"} />
                  </div>
               
                  <div className={`${style}`}>
                  <ProjectCard title="Fitlab" year={"2020-2021"} companyName={"Essential Infotech ltd"} />
                  </div>

                  <div className={`${style}`}>
                    
                  <ProjectCard title="Robotics" year={"2019-2020"} companyName={"Mensa Digiworld"} />
                    
                    </div>

                    <div className={`${style}`}>
                    <ProjectCard title="AMR" year={"2018-2019"} companyName={"IPIT Ltd"} />
         
            
                    </div>
         

              </div>

    </>
  )
}