import React from 'react'

export const Display = ({currentSong, updateCurrent}) => {
  return (
    <div id='dispay' className='display'>
      <div className="display__text">
        <p>{currentSong}</p>
      </div>
      <div className="input__controls">
        <input type="range" name="" id=""  />
      </div>
    </div>
  )
}
