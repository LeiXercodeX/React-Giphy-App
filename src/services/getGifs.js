import { API_KEY, API_URL } from "./settings";

export default function getGifs (keyword) {
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`
    
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {data} = response;
            const gif = data.map(el => {
                const {id} = el;
                const image = el.images.downsized_medium.url;
                const {title} = el;
                return {id, image, title}
            })
            return gif
        })
}