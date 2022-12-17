import React from 'react'

export const DrumPads = ({drumPads,  handleButtonClick}) => {
  return (
    <div id='drumPad' className='drumPad'>
      {
        drumPads.map((drumPad, index) =>{
          return(
            <button className='drum_key'
             id={drumPad.title}
              key={drumPad.key}
              onClick={() => handleButtonClick(key, title)}
              >
              <audio src={drumPad.url}></audio>
              {drumPad.key}</button>
          )
        })
      }
    </div>
  )
}
