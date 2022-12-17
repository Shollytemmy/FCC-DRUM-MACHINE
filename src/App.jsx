import React, { useState, useEffect } from 'react'

import './App.scss'
import { DrumPads } from './Components/DrumPads'
import { Display } from './Components/Display'

function App() {
  const [drumPads, setDrumPads] = useState([
    {
    key: "Q",
    title: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    title: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },

  {
    key: "E",
    title: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },

  {
    key: "A",
    title: "Heater-4_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    key: "S",
    title: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    title: "Dsc_Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    title: "Heater-6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "X",
    title: "Dsc_Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "C",
    title: "Kick_n_Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },

])

const [currentSong, updateCurrent] = useState("")


const handleButtonClick = (title, key) =>{
  return() =>{
    document.getElementById(key).play();

    updateCurrent(title);
   

  }
}
const handleKeypress = (e) =>{

  const drumKey = drumPads.find((pad) => pad.key === e.key)

  if(drumKey){
    document.getElementById(drumKey.title).click();
  }
}

useEffect(() => {
  
  window.addEventListener('keypress', handleKeypress)

  return () => {
    window.removeEventListener('keypress', handleKeypress)
  };
});



  return (
    <div className="drum-machine" id='drum-machine'>
      
      <DrumPads
       drumPads ={drumPads}
       handleButtonClick = {handleButtonClick}
       />
      <Display 
      currentSong ={currentSong}
       updateCurrent = {updateCurrent}
       
        />
    </div>
  )
}

export default App
