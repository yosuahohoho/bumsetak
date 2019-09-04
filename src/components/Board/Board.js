import React from 'react'

import Keypad from '../Keypad/Keypad'
import styles from './board.module.css'
import AUDIOS from './audiosData'

const Board = () => {
  let keypads = AUDIOS.map(audio => <Keypad audio={audio} key={audio.id} />)

  return <div className={styles.board}>{keypads}</div>
}

export default Board
