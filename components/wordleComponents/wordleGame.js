import { WORDS } from './words.js'
import 'animate.css'
import gameStyle from './wordleGame.module.css'

export default function Game() {
    const NUMBER_OF_GUESSES = 6
    let guessesRemaining = NUMBER_OF_GUESSES
    let currentGuess = []
    let nextLetter = 0
    let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
    console.log(rightGuessString)
    return (
        <>
            <div>{initBoard()}</div>
            <div id="keyboard-cont">
                <div>
                    <button class={gameStyle.keyboardbutton}>q</button>
                    <button class={gameStyle.keyboardbutton}>w</button>
                    <button class={gameStyle.keyboardbutton}>e</button>
                    <button class={gameStyle.keyboardbutton}>r</button>
                    <button class={gameStyle.keyboardbutton}>t</button>
                    <button class={gameStyle.keyboardbutton}>y</button>
                    <button class={gameStyle.keyboardbutton}>u</button>
                    <button class={gameStyle.keyboardbutton}>i</button>
                    <button class={gameStyle.keyboardbutton}>o</button>
                    <button class={gameStyle.keyboardbutton}>p</button>
                </div>
                <div className={gameStyle.secondRow}>
                    <button class={gameStyle.keyboardbutton}>a</button>
                    <button class={gameStyle.keyboardbutton}>s</button>
                    <button class={gameStyle.keyboardbutton}>d</button>
                    <button class={gameStyle.keyboardbutton}>f</button>
                    <button class={gameStyle.keyboardbutton}>g</button>
                    <button class={gameStyle.keyboardbutton}>h</button>
                    <button class={gameStyle.keyboardbutton}>j</button>
                    <button class={gameStyle.keyboardbutton}>k</button>
                    <button class={gameStyle.keyboardbutton}>l</button>
                </div>
                <div>
                    <button class={gameStyle.keyboardbutton}>Del</button>
                    <button class={gameStyle.keyboardbutton}>z</button>
                    <button class={gameStyle.keyboardbutton}>x</button>
                    <button class={gameStyle.keyboardbutton}>c</button>
                    <button class={gameStyle.keyboardbutton}>v</button>
                    <button class={gameStyle.keyboardbutton}>b</button>
                    <button class={gameStyle.keyboardbutton}>n</button>
                    <button class={gameStyle.keyboardbutton}>m</button>
                    <button class={gameStyle.keyboardbutton}>Enter</button>
                </div>
            </div>
        </>
    )
    function initBoard() {
        const row = <div className="letter-row"></div>
        const box = <div className="letter-box"></div>

        return [...Array(6)].map((elementInArray, index) => (
            <div className={gameStyle.letterrow}>
                {[...Array(5)].map((elementInArray, index) => (
                    <div className={gameStyle.letterbox}></div>
                ))}
            </div>
        ))
    }
}
