import React, { useRef, useEffect } from 'react'
import styles from './keypad.module.css'

const Keypad = props => {
  const audioRef = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === props.bank.keyCode) {
        playSound()
      }
    })

    return document.removeEventListener('keydown', playSound)
  }, [props.bank.keyCode])

  const handleClick = e => {
    e.preventDefault()
    playSound()
  }

  const playSound = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  return (
    <div className={ styles.center }>
      <audio 
        ref={audioRef} 
        src={props.bank.url} 
        id={props.bank.keyCode}
        />
      <button 
        onClick={handleClick}
        className={ styles.button }
      >
        {props.bank.keyTrigger}
      </button>
      <span className={ styles.span }>{props.bank.id}</span>
    </div>
  )
}

export default Keypad
