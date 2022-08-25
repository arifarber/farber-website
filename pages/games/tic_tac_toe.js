import Link from 'next/link'
import Head from 'next/head'
import Game from '/components/tic_tac_toe_game.js'
import styles from '/styles/tic_tac_toe.module.css'

export default function TicTacToe() {
    return (
        <>
            <Head>
                <title>Tic-Tac-Toe</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <h1 className="text-3xl font-bold underline text-center">
                Tic-Tac-Toe
            </h1>

            <div className={styles.gamespace}>
                <Game></Game>
            </div>
            <footer>
                <h3 class="absolute bottom-0 h-16 text-2xl hover:underline text-blue-600 font-bold">
                    <Link href="/">← Home</Link>
                </h3>
            </footer>
        </>
    )
}
