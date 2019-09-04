import React, { useRef, useEffect } from 'react'
import styles from './keypad.module.css'

const Keypad = props => {
  const audioRef = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === props.audio.keyCode) {
        playSound()
      }
    })

    return document.removeEventListener('keydown', playSound)
  }, [props.audio.keyCode])

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
        ref={ audioRef } 
        src={ props.audio.url } 
        />
      <button 
        onClick={ handleClick }
        className={ styles.button }
      >
        {props.audio.keyTrigger}
      </button>
      <span className={ styles.span }>{props.audio.id}</span>
    </div>
  )
}

export default Keypad
