import { useState, useRef, useEffect } from "react";

export default function useNearScreen (distance = '1px') {
    const [isNearScreen, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(()=>{
        let observer

        const looking = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        
        Promise.resolve(
            typeof IntersectionObserver !== undefined
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(()=>{
            observer = new IntersectionObserver(looking, {
                rootMargin: distance
            })

            observer.observe(elementRef.current)
        })


        return () => observer && observer.disconnect()
    })

    return {isNearScreen, elementRef}
}