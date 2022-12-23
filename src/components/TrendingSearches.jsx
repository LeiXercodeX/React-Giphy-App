import { useEffect, useState } from "react";
import getTrendingSearches from "../services/getTrending";
import Category from "./Category";

export default function TrendingSearches () {
    const [trends, setTrends] = useState([]);

    useEffect(()=>{
        getTrendingSearches().then(setTrends)
    }, []);

    return( 
            <Category items={trends} title={"Tendencias"} />
        )
}