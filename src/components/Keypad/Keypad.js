import React, { useRef, useEffect, useCallback } from 'react'
import styles from './keypad.module.css'

const Keypad = ({ audio, setDisplay }) => {
  const audioRef = useRef(null)
  
  const changeDisplay = useCallback(
    () => {
      setDisplay(audio.id)
    }, [audio.id, setDisplay]
  )

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === audio.keyCode) {
        playSound()
        changeDisplay()
      }
    })

    return document.removeEventListener('keydown', playSound)
  }, [audio.keyCode, changeDisplay])

  const handleClick = e => {
    e.preventDefault()
    playSound()
    changeDisplay()
  }

  const playSound = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  return (
    <div className={styles['drum-pad']}>
      <audio
        ref={audioRef}
        src={audio.url}
        className='clip'
        id={audio.keyTrigger}
      />
      <button onClick={handleClick} className={styles.button}>
        {audio.keyTrigger}
      </button>
      <span className={styles.span}>{audio.id}</span>
    </div>
  )
}

export default Keypad
