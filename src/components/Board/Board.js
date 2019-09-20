import React, { useState } from 'react'

import Keypad from '../Keypad/Keypad'
import styles from './board.module.css'
import AUDIOS from './audiosData'

const Board = () => {
  const [display, setDisplay] = useState('Hello!')

  let keypads = AUDIOS.map(audio => <Keypad audio={audio} key={audio.id} setDisplay={setDisplay} />)

  return (
    <div className={styles.board}>
      <div className={styles.info}>
        <div className={styles.display}>{display}</div>
        <h2 className={styles.brand}>BumSetak</h2>
      </div>
  
      <div className={styles.keypads}>{keypads}</div>
    </div>
  ) 
}

export default Board
