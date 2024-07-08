import React, { useState } from 'react';
import styles from "../style" ;


const Project = () => {
    const [names, setName] = useState("");

    function handleTextChange(event) {
      setName(event.target.value)
      
    }
  return (
    <div id='pro' className="flex items-center">
    <input type="text" onChange={handleTextChange} className="flex ml-40 items-center w-[30%]"/>
    <p className={`${styles.paragraph} mb-1 text-white`}>My Real Name: {names}</p>
  </div>
  )
}

export default Project