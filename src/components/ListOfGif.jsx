import Spinner from "./Spinner";
import StructureGif from "./StructureGif";

export default function ListOfGif ({gifs, loading}) {
    return (
        <>
            {loading 
                ? <div className="flex justify-center min-h-screen w-4/5">
                    <Spinner />
                </div>
                : <div className="flex flex-wrap justify-start flex-[3]">
                    {gifs.map(el => 
                        <StructureGif key={el.id} item={el} />
                    )}
                </div>
            }
        </>
    )
}