import React from 'react'

type Props = {
    text:String,
    type:"title"|"description"|"content-title",
    textStyle?:"string",
}

export default function Typography({text,type,textStyle}: Props) {

    let style = `text-[20px] font-bolder`
    if(type=="title"){
        style= `text-[25px] text-center my-3 md:my-0 md:text-left  md:text-[30px] font-[700]`;
    }
    if(type=="description"){
        style= `text-[15px]`;
    }
    if(type=="content-title"){
        style= `text-[14] md:text-[20px] font-[700]`;
    }
  return (
    <>

    <p className={`${style} ${textStyle}`}>
        {text}
    </p>
    
    </>
  )
}