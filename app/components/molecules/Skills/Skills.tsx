'use client'
import React, { useState } from 'react'
import SkillCard from '../../atoms/SkillCard/SkillCardComponent';
import { motion } from "framer-motion"
type Props = {}

const skills = [
    {
        title:"Next JS",
        image:"/images/skills/nextjs.png",
        level:"Expert"
    },
    {
        title:"React JS",
        image:"/images/skills/react.png",
        level:"Expert"
    },
    {
        title:"Node JS",
        image:"/images/skills/nodejs.png",
        level:"Expert"
    },
    {
        title:"Mongo DB",
        image:"/images/skills/mongodb.png",
        level:"Expert"
    },
    {
        title:"Tailwind",
        image:"/images/skills/tailwind.png",
        level:"Expert"
    },
    {
        title:"Sass",
        image:"/images/skills/sass.png",
        level:"Expert"
    },
    {
        title:"Material UI",
        image:"/images/skills/mui.png",
        level:"Expert"
    },
    {
        title:"Bootstrap",
        image:"/images/skills/bootstrap.png",
        level:"Expert"
    },
    {
        title:"MySQL",
        image:"/images/skills/mysql.png",
        level:"Expert"
    },
    {
        title:"Ubuntu",
        image:"/images/skills/ubuntu.png",
        level:"Intermediate"
    },
    {
        title:"PHP",
        image:"/images/skills/php.png",
        level:"Intermediate"
    },
    {
        title:"Laravel",
        image:"/images/skills/laravel.png",
        level:"Intermediate"
    },
    {
        title:"Git",
        image:"/images/skills/git.png",
        level:"Expert"
    },
    {
        title:"Docker",
        image:"/images/skills/docker.png",
        level:"Experienced"
    },
    {
        title:"GraphQL",
        image:"/images/skills/graphql.png",
        level:"Experienced"
    },
]

export default function Skills({}: Props) {

    const [showAll,setShowAll] = useState(false);

  return (
    <div className='skills'>
        <h1 className='flex justify-center items-center text-4xl font-bold'>
            Skills
        </h1>
        <div className='skills-box'>
        {
            skills.map((skill:any,index:any)=>{
                return (
                    <React.Fragment key={index}>
                        <SkillCard 
                        title={skill.title}
                        image={skill.image}
                        level={skill.level}
                        />

                    </React.Fragment>
                )
            })
        }
        </div>

        <div className='skills-box-mobile'>
        {
            skills.map((skill:any,index:any)=>{
                if(index>7 && !showAll){
                    return;
                }
                return (
                    <React.Fragment key={index}>
                       <motion.div
                         initial={{ opacity: 0, scale: 0.5 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.5 }}
                       >
                        <SkillCard 
                        title={skill.title}
                        image={skill.image}
                        level={skill.level}
                        />
                        </motion.div>

                    </React.Fragment>
                )
            })
        }
    {!showAll ?  <button onClick={()=>setShowAll(!showAll)} className="show-more">
        Show {skills.length-8} more skills
      </button>
    :
    <button onClick={()=>setShowAll(!showAll)} className="show-more">
    Minimize skills
  </button>  
    }
        </div>
        
        
    </div>
  )
}