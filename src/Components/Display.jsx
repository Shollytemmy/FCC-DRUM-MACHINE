import React from 'react'

export const Display = ({currentSong, updateCurrent}) => {
  return (
    <div id='dispay' className='display'>
      <p>{currentSong}</p>
    </div>
  )
}
