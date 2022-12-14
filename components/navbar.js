import Link from 'next/link'
import ThemeChanger from './DarkSwitch'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'

export default function Navbar() {
    // const navigation = ['Resume', 'Tic-Tac-Toe', 'Wordle']

    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link href="/">
                                    <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100 hover:font-bold">
                                        <span>
                                            <Image
                                                src="/img/letter-f.svg"
                                                alt="N"
                                                width="32"
                                                height="32"
                                                className="w-8"
                                            />
                                        </span>
                                        <span>Home</span>
                                    </a>
                                </Link>

                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        <li className="mr-3 nav__item">
                            <Link href="/games/wordle">
                                <a className="inline-block px-4 py-2 text-lg font-normal text-indigo-500 hover:text-indigo-700 no-underline rounded-md dark:text-gray-200 dark:hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                    Wordle
                                </a>
                            </Link>
                            <Link href="/games/tic_tac_toe">
                                <a className="inline-block px-4 py-2 text-lg font-normal text-indigo-500 hover:text-indigo-700 no-underline rounded-md dark:text-gray-200 dark:hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                    Tic-Tac-Toe
                                </a>
                            </Link>
                            <a
                                href="/files/resume2022.pdf"
                                className="inline-block px-4 py-2 text-lg font-normal text-indigo-500 hover:text-indigo-700 no-underline rounded-md dark:text-gray-200 dark:hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                {/* easier to keep link than to fix formatting */}
                    <div className="invisible">
                        <Link href="/">
                            <a className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                                Get Started
                            </a>
                        </Link>
                    </div>

                    <ThemeChanger />
                </div>
            </nav>
        </div>
    )
}
