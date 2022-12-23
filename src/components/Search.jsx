import logo from '../assets/palette.svg';
import { useLocation, Link } from "wouter";
import { useState } from 'react';

export default function Search() {
    const [location, setLocation] = useLocation()
    const [word, setWord] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(`/search/${word}`)
    }

    const handleInput = (e) => {
        setWord(e.target.value)
    }


    return (
        <div className='flex flex-col items-center'>
                <div className='p-10 cursor-pointer'>
                    <Link to='/' >
                    <div className='h-60'>
                        <img className='h-full movement w-full'
                            src={logo} alt="logo"/>
                    </div>
                    </Link>
                    <h1 className='text-7xl text-center text-shadow font-concert'>GiphyApp</h1>
                </div>
                <form onSubmit={handleSubmit}
                    className='h-10 w-1/3 border-b-4 border-gray-300 flex justify-center backdrop-blur-3xl rounded-t-md bg-gradient-to-bl from-gray-500'>
                    <input onInput={handleInput}
                        className='outline-none focus:outline-2 focus:outline-gray-300  rounded-t-md font-bold text-xl w-full text-center bg-transparent placeholder:text-slate-700'
                        type="text" placeholder='Begin fun' value={word}/>
                </form>
        </div>
    )
}