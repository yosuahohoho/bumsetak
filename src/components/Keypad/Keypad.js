import React, { useRef, useState, useEffect, useCallback } from 'react'
import styles from './keypad.module.css'

const Keypad = ({ audio, setDisplay }) => {
  const [isActive, setIsActive] = useState(false)

  const audioRef = useRef(null)
  const playSound = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  const changeDisplay = useCallback(() => {
    setDisplay(audio.id)
  }, [audio.id, setDisplay])

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === audio.keyCode) {
        setIsActive(true)
        playSound()
        changeDisplay()

        setTimeout(() => {
          setIsActive(false)
        }, 100)
      }
    })

    return document.removeEventListener('keydown', playSound)
  }, [audio.keyCode, changeDisplay])

  const handleClick = e => {
    e.preventDefault()
    setIsActive(true)
    playSound()
    changeDisplay()

    setTimeout(() => {
      setIsActive(false)
    }, 100)
  }

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
        className={styles.button}>
        {audio.keyTrigger}
      </button>
      <span className={styles.span}>{audio.id}</span>
    </div>
  )
}

export default Keypad
