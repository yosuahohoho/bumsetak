import React from 'react'

import Board from './components/Board/Board'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container} id='drum-machine'>
      <header className={styles.header}>
        <h1>BumSetak</h1>
      </header>
      <Board />
      <footer className={styles.footer}>2019&copy;yosuahohoho</footer>
    </div>
  )
}

export default App
