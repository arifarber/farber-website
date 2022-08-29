import { WORDS } from './words.js'
import 'animate.css'
import gameStyle from './wordleGame.module.css'
import React, { useState } from 'react'
import Router from 'next/router'

const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = []
let nextLetter = 0
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
export default function Game() {
    return (
        <>
            <div id="gameState">
                <InitBoard></InitBoard>
                <div className={gameStyle.keyboardcont}>
                    <div>
                        <KeyboardButton letter="q"></KeyboardButton>
                        <KeyboardButton letter="w"></KeyboardButton>
                        <KeyboardButton letter="e"></KeyboardButton>
                        <KeyboardButton letter="r"></KeyboardButton>
                        <KeyboardButton letter="t"></KeyboardButton>
                        <KeyboardButton letter="y"></KeyboardButton>
                        <KeyboardButton letter="u"></KeyboardButton>
                        <KeyboardButton letter="i"></KeyboardButton>
                        <KeyboardButton letter="o"></KeyboardButton>
                        <KeyboardButton letter="p"></KeyboardButton>
                    </div>
                    <div className={gameStyle.secondRow}>
                        <KeyboardButton letter="a"></KeyboardButton>
                        <KeyboardButton letter="s"></KeyboardButton>
                        <KeyboardButton letter="d"></KeyboardButton>
                        <KeyboardButton letter="f"></KeyboardButton>
                        <KeyboardButton letter="g"></KeyboardButton>
                        <KeyboardButton letter="h"></KeyboardButton>
                        <KeyboardButton letter="j"></KeyboardButton>
                        <KeyboardButton letter="k"></KeyboardButton>
                        <KeyboardButton letter="l"></KeyboardButton>
                    </div>
                    <div>
                        <KeyboardButton letter="Del"></KeyboardButton>
                        <KeyboardButton letter="z"></KeyboardButton>
                        <KeyboardButton letter="x"></KeyboardButton>
                        <KeyboardButton letter="c"></KeyboardButton>
                        <KeyboardButton letter="v"></KeyboardButton>
                        <KeyboardButton letter="b"></KeyboardButton>
                        <KeyboardButton letter="n"></KeyboardButton>
                        <KeyboardButton letter="m"></KeyboardButton>
                        <KeyboardButton letter="Enter"></KeyboardButton>
                    </div>
                </div>
            </div>
            <ResetButton></ResetButton>
        </>
    )
}

function InitBoard() {
    const row = <div className={gameStyle.letterrow}></div>
    const box = <div className={gameStyle.letterbox}></div>

    return [...Array(6)].map((elementInArray, index) => (
        <div key={index} className={gameStyle.letterrow}>
            {[...Array(5)].map((elementInArray, index) => (
                <div key={index} className={gameStyle.letterbox}></div>
            ))}
        </div>
    ))
}
const ResetButton = () => {
    return (
        <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => Router.reload()}
        >
            Reset
        </button>
    )
}

const KeyboardButton = ({ letter }) => {
    return (
        <button
            className={gameStyle.keyboardbutton}
            onClick={() => HandleKeyboard(letter)}
        >
            {letter}
        </button>
    )
}
//todo: play around with {letter}
const HandleKeyboard = (letter) => {
    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = letter
    if (pressedKey === 'Del' && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === 'Enter') {
        checkGuess()
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
}

function insertLetter(pressedKey) {
    if (nextLetter === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName(gameStyle.letterrow)[
        6 - guessesRemaining
    ]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add(gameStyle.filledbox)
    currentGuess.push(pressedKey)
    nextLetter += 1
}

function deleteLetter() {
    let row = document.getElementsByClassName(gameStyle.letterrow)[
        6 - guessesRemaining
    ]

    let box = row.children[nextLetter - 1]
    box.textContent = ''
    box.classList.remove(gameStyle.filledbox)
    currentGuess.pop()
    nextLetter -= 1
}
function checkGuess() {
    let row = document.getElementsByClassName(gameStyle.letterrow)[
        6 - guessesRemaining
    ]
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != 5) {
        alert('Not enough letters!')
        return
    }

    if (!WORDS.includes(guessString)) {
        alert('Word not in list!')
        return
    }

    for (let i = 0; i < 5; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]

        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = 'grey'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position
            if (currentGuess[i] === rightGuess[i]) {
                // shade green
                letterColor = 'green'
            } else {
                // shade box yellow
                letterColor = 'yellow'
            }

            rightGuess[letterPosition] = '#'
        }

        let delay = 250 * i
        setTimeout(() => {
            //shade box
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)
    }

    if (guessString === rightGuessString) {
        alert('You guessed right! Game over!')
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1
        currentGuess = []
        nextLetter = 0

        if (guessesRemaining === 0) {
            alert("You've run out of guesses! Game over!")
            alert(`The right word was: "${rightGuessString}"`)
        }
    }
}
function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName(
        gameStyle.keyboardbutton
    )) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if (oldColor === 'green') {
                return
            }

            if (oldColor === 'yellow' && color !== 'green') {
                return
            }

            elem.style.backgroundColor = color
            break
        }
    }
}
