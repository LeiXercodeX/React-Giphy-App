import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import Context from "../context/StaticContext";

export function useGifs (keyword) {
    const {gifs, setGifs} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)

        // Recuperamos keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('LastKeyword') || false;

        keywordToUse ? 
            getGifs(keyword = keywordToUse)
                .then(res => {
                    setGifs(res);
                    // Guardamos la keyword en el LocalStorage
                    localStorage.setItem('LastKeyword', keyword)
                    setLoading(false);
                }) : false
            console.log(keywordToUse)
    }, [keyword])


    return {gifs, loading}
}