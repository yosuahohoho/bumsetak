import React, { useRef, useState, useEffect, useCallback } from 'react'
import styles from './keypad.module.css'

const Keypad = ({ audio, setDisplay }) => {
  const [isActive, setIsActive] = useState(false)

  const audioRef = useRef(null)
  const setSound = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }
  
  const handleKeypadActive = useCallback(() => {
    setIsActive(true)
    setSound()
    setDisplay(audio.id)
    
    //use for scale transition effect
    setTimeout(() => {
      setIsActive(false)
    }, 100)
  }, [audio.id, setDisplay])

  const handleClick = e => {
    e.preventDefault()
    handleKeypadActive()
  }

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === audio.keyCode) {
        handleKeypadActive()
      }
    })

    return document.removeEventListener('keydown', handleKeypadActive)
  }, [audio.keyCode, handleKeypadActive])

  return (
    <div className={styles['drum-pad']}>
      <audio
        ref={audioRef}
        src={audio.url}
        className='clip'
        id={audio.keyTrigger}
      />
      <button
        onClick={handleClick}
        className={isActive ? styles.active : styles.button}>
        {audio.keyTrigger}
      </button>
      <span className={styles.span}>{audio.id}</span>
    </div>
  )
}

export default Keypad
