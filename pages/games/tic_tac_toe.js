import styles from './tic_tac_toe.module.css'
import Link from 'next/link'
import Game from '/components/tic_tac_toe_game.js'

export default function TicTacToe() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <Game></Game>
        <h3 className={styles.alink}>
          <Link href="/">
          <a>← Home</a>
          </Link>
        </h3>
        
        
      </>
    );
  }