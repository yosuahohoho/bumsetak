import React, { useRef } from 'react'

const Keypad = (props) => {

  const audioRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  return (
    <div className='pad'>
      <audio ref={audioRef} src={props.bank.url} id={props.bank.keyTrigger} />
      <button onClick={handleClick}>{ props.bank.keyTrigger }</button>
      <span>{props.bank.id}</span>
    </div>
  )
}

export default Keypad
