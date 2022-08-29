import Head from 'next/head'
import Navbar from '/components/navbar'
import Hero from '/components/hero'

export default function Home() {
    return (
        <>
            <Head>
                <title>Ari Farber</title>
                <meta
                    name="description"
                    content="Personal Website of Ari Farber"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Hero />
        </>
    )
}


