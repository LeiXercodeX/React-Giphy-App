import Search from "../components/Search";
import StructureGif from "../components/StructureGif";
import { useGifs } from "../Hooks/useGifs";

export default function Detail ({params}) {
    const {id} = params;
    
    const {gifs} = useGifs();

    const gif = gifs.find(el => el.id === id) || localStorage.getItem('lastGifDetail')

    localStorage.setItem('lastGifDetail', gif)

    return <>
        <header>
            <Search />
        </header>
        <main className="flex justify-center mt-5">
            <StructureGif item={gif} key={gif.id}/>
        </main>
    </>
}   