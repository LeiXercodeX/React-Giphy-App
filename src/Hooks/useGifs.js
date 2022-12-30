import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import Context from "../context/StaticContext";


const INITIAL_PAGE = 0

export function useGifs (keyword) {
    const {gifs, setGifs} = useContext(Context);

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(INITIAL_PAGE)
    
    // Recuperamos keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('LastKeyword');

    useEffect(()=>{
        setLoading(true)


        keywordToUse ? 
            getGifs({keyword: keywordToUse})
                .then(res => {
                    console.log(keyword)
                    setGifs(res);
                    // Guardamos la keyword en el LocalStorage
                    localStorage.setItem('LastKeyword', keywordToUse)
                    
                    setLoading(false);
                }) : false
            console.log(keywordToUse)
    }, [keyword])


    useEffect(()=>{
        if (page === INITIAL_PAGE) return

        getGifs({keyword: keywordToUse, page})
         .then(nextGifs => {
            setGifs(prev => prev.concat(nextGifs))
         })
    }, [page])


    return {gifs, loading, setPage, page}
}