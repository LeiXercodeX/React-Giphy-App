import { Link } from "wouter";

export default function StructureGif ({item}) {
    const {image, title, id} = item; 


   return (
    <Link to={`/gif/${id}`}>
    <article className="rounded-3xl cursor-pointer bg-stone-100 overflow-hidden w-72 h-72 flex-col transition-all duration-300 ease-out m-3">
        <div className=" w-full h-full">
            <img src={image} className="w-full h-full object-cover" />
        </div>
    </article>
    </Link>
   )
}