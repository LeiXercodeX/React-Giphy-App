import ListOfGif from "../components/ListOfGif";
import Search from "../components/Search";
import { Link } from "wouter";
import { useGifs } from "../Hooks/useGifs";

export default function SearchingPage ({params}) {
    console.log(params)
    const {magicWord} = params
    const {loading, gifs, setPage} = useGifs(magicWord)

    const handleClick = ()=>{
        setPage(page => page + 1)
    }

    return (
        <>
        <header className="mb-10">
            
                <Search />
            
        </header>
        <main className="flex flex-wrap justify-around h-full content-baseline">
            <ListOfGif  loading={loading} gifs={gifs}/>
        </main>
        <button onClick={handleClick} className="bg-blue-800 w-1/2 h-8 rounded-md">Next Page</button>
        </>
    )
}