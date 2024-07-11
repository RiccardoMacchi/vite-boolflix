import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    serieList: [],
    baseUrl: "https://api.themoviedb.org/3/search/",
    movieUrl: "movie?",
    serieUrl: "tv?",
    apiKey: "api_key=00de424db6d0d5359e33a658efbcb0df",
    addName: "&query=",
    newFilmSearch: "",
    urlFilmList: "https://api.themoviedb.org/3/genre/28/movies?api_key=00de424db6d0d5359e33a658efbcb0df&language=it&include_all_movies=false",
});

console.log(store.urlFilmList)