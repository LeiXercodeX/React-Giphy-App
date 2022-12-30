import React, {Suspense} from "react";
import useNearScreen from "../Hooks/useNearScreen";

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
);


export default function LazyTrending () {
    const {elementRef, isNearScreen} = useNearScreen();
    

    return <div className="flex-1" ref={elementRef}>
        <Suspense fallback={'Estoy cargando...'} >
        {isNearScreen ?
            <TrendingSearches />
            : null
        }
        </Suspense>
    </div>
}