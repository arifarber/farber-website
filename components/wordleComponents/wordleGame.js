import { WORDS } from './words.js'
import 'animate.css'
import gameStyle from './wordleGame.module.css'
import React, { useState } from 'react'

const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = []
let nextLetter = 0
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
export default function Game() {
    // console.log(rightGuessString)

    return (
        <>
            {/* <div>{key()}</div> */}
            <div>{initBoard()}</div>
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
        </>
    )

    function initBoard() {
        const row = <div className={gameStyle.letterrow}></div>
        const box = <div className={gameStyle.letterbox}></div>

        return [...Array(6)].map((elementInArray, index) => (
            <div className={gameStyle.letterrow}>
                {[...Array(5)].map((elementInArray, index) => (
                    <div className={gameStyle.letterbox}></div>
                ))}
            </div>
        ))
    }
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
    if (pressedKey === 'Backspace' && nextLetter !== 0) {
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
    console.log(gameStyle.letterrow)

    let row = document.getElementsByClassName(gameStyle.letterrow)[
        6 - guessesRemaining
    ]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add(gameStyle.filledbox)
    currentGuess.push(pressedKey)
    nextLetter += 1
}
