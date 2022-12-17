import React from 'react'

export const DrumPads = ({drumPads}) => {
  return (
    <div id='drumPad' className='drumPad'>
      {
        drumPads.map((drumPad, index) =>{
          return(
            <button className='drum_key' id='drum_key'>{drumPad.key}</button>
          )
        })
      }
    </div>
  )
}
