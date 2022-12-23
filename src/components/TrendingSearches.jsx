import { useEffect, useState } from "react";
import getTrendingSearches from "../services/getTrending";
import Category from "./Category";
import useNearScreen from "../Hooks/useNearScreen";

function TrendingSearches () {
    const [trends, setTrends] = useState([]);

    useEffect(()=>{
        getTrendingSearches().then(setTrends)
    }, []);

    return( 
            <Category items={trends} title={"Tendencias"} />
        )
}


export default function LazyTrending () {
    const {elementRef, isNearScreen} = useNearScreen();
    

    return <div ref={elementRef}>
        {isNearScreen ?
            <TrendingSearches />
            : null
        }
    </div>
}

