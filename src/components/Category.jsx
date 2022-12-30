import { Link } from "wouter"

export default function Category ({title, items}) {

    return (
        <aside className="text-white pl-4 pt-2 md:bg-slate-600/80 md:rounded-xl md:sticky md:top-0">
            <div className="md:flex flex-col">
            <h2 className="text-4xl mb-5">{title}</h2>
            {items ?
                items.map(item => (
                    <Link to={`/search/${item}`}>
                        <span key={item} 
                            className="text-xl mb-1 mr-3 pl-4 md:mr-0 cursor-pointer transition hover:text-emerald-400">
                                {item}
                        </span>
                    </Link>
                ))
                : <h3>Cargando...</h3>
            }
            </div>
        </aside>
    )
}