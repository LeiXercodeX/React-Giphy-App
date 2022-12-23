import ListOfGif from "../components/ListOfGif";
import Search from "../components/Search";
import { Link } from "wouter";
import { useGifs } from "../Hooks/useGifs";

export default function SearchingPage ({params}) {
    console.log(params)
    const {magicWord} = params
    const {loading, gifs} = useGifs(magicWord)
    return (
        <>
        <header className="mb-10">
            
                <Search />
            
        </header>
        <main className="flex flex-wrap justify-around h-full content-baseline">
            <ListOfGif  loading={loading} gifs={gifs}/>
        </main>
        </>
    )
}