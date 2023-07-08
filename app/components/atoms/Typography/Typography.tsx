import React from 'react'

type Props = {
    text:String,
    type:"title"|"description",
    className?:"string"|null|""|undefined,
}

export default function Typography({text,type,className}: Props) {

    let style = `text-[20px] font-bolder`
    if(type=="title"){
        style= `text-[30px] font-[700]`;
    }
    if(type=="description"){
        style= `text-[20px] font-bolder`;
    }
  return (
    <>

    <p className={`${style} ${className}`}>
        {text}
    </p>
    
    </>
  )
}