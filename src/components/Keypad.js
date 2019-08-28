import React from 'react'

const Keypad = (props) => {

  const handleClick = (e) => {
    e.preventDefault()
    const audio = document.querySelector(`#${props.bank.keyTrigger}`)
    
    audio.currentTime = 0
    audio.play()
  }

  return (
    <div className='pad'>
      <audio src={props.bank.url} id={props.bank.keyTrigger} />
      <button onClick={handleClick}>{ props.bank.keyTrigger }</button>
    </div>
  )
}

export default Keypad
