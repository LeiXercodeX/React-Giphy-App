import ListOfGif from "../components/ListOfGif";
import Search from "../components/Search";
import { useGifs } from "../Hooks/useGifs";

export default function SearchingPage ({params}) {
    // console.log(params)
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
        <div className="flex h-10 mt-10 justify-center">
            <button onClick={handleClick} className="text-gray-300 font-bold border-4 rounded-xl border-sky-800 bg-blue-600 w-1/4">More Gifs</button>
        </div>
        </>
    )
}