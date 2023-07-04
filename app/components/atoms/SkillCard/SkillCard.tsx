import Image from 'next/image'
import React from 'react'

type Props = {
    image:string,
    title:string,
    level:"Expert"|"Intermediate"|"Experienced"
}

export default function SkillCard({image,title,level}: Props) {
  return (
    <>
        <div className='skill-card'>
            <div className='skill-card-image-div'>
                <Image
                className='skill-card-image'
                src={image}
                alt={"icon"}
                height={100}
                width={100}
                />
            </div>
            <div className={`skill-card-content `}>
                <p className="skill-card-title">
                    {title}
                </p>
                <p className={`skill-card-level badge ${level}`}>
                    {level}
                </p>    
                

            </div>
        </div>
    </>
  )
}