import Head from 'next/head'
import 'animate.css'
import GameBoard from '/components/wordleComponents/wordleGame.js'
export default function Word() {
    return (
        <>
            <Head>
                <title>Wordle</title>
                <meta CharSet="UTF-8"></meta>
            </Head>
            
            <h1 className="text-3xl font-bold underline text-center"> Wordle Clone </h1>
            <div className='m-auto flex content-center flex-col'><GameBoard></GameBoard></div>
            
        </>
    )
}
