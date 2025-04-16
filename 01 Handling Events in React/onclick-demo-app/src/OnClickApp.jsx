import React,{useState,useEffect} from 'react'

export default function OnClickApp() {
    const[text,setText]=useState("Not Clicked");

    const handleClick =()=>{
        setText("Clicked");
    };
  return (
    <div>
      
      <p>{text}</p>
      <button
        onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}