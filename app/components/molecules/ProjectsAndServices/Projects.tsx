import React from 'react'
import ProjectCard from '../../atoms/ProjectCard/ProjectCardComponent'

type Props = {}

export default function Projects({}: Props) {

    const style = `w-[48%] md:w-[23%] my-2`
  return (
    <>

<div className="my-3" >
                    <p className="content-title">
                    Projects
                    </p>
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