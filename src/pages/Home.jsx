import ListOfGif from "../components/ListOfGif";
import Search from "../components/Search";
import { useGifs } from "../Hooks/useGifs";
import LazyTrending from "../components/LazyTrending";

export default function Home () {
    const {loading, gifs} = useGifs()

    const recoverKeyword = localStorage.getItem("LastKeyword") || false;


    return (
        <>
        <header className="mb-32">
            <Search />
        </header>

        { recoverKeyword ?
        <main>
            <h2 className="font-bold text-4xl ml-6 mb-4x text-gray-300">Ultima Busqueda: {decodeURI(recoverKeyword)}</h2>
            <div className="md:flex justify-between p-4 h-full content-baseline">
                <ListOfGif loading={loading} gifs={gifs} />
                <LazyTrending />
            </div>
        </main> : false
        }
        </>
    )
}