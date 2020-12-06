const API_TOKEN = "874a77e82b76d1c52c5ab7166c8198f1"

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page 
    return fetch(url)

    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
