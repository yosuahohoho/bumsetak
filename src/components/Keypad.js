import React from 'react'

const Keypad = () => {

  const handleClick = (event) => {
    event.preventDefault()
    const audio = document.querySelector('audio')
    audio.play()
  }

  return (
    <div className='keypad'>
      <button onClick={handleClick}>A</button>
      <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' />
    </div>
  )
}

export default Keypad
