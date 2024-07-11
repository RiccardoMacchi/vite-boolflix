<script>
import { store } from '../store';

export default{
    name: "AppCard",
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <div v-for="(film, i) in store.filmList" :key="i">
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
        <h2>{{film.title}}</h2>
        <h3>{{film.original_title}}</h3>
        <img v-if="film.original_language === 'en' || film.original_language === 'fr' || film.original_language === 'es' || film.original_language === 'it' || film.original_language === 'ko' || film.original_language === 'de' " :src="'../src/assets/' + film.original_language + '.png'" :alt="film.original_language" id="flagimg">
        <span v-else>{{film.original_language}}</span>
        <h4>{{film.vote_average}}</h4>
    </div>
<!-- SERIE TV -->
    <div v-for="(serie, i) in store.serieList" :key="i">
        <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" :alt="serie.name">
        <h2>{{serie.name}}</h2>
        <h3>{{serie.original_name}}</h3>
        <img v-if="serie.original_language === 'en' || serie.original_language === 'fr' || serie.original_language === 'es' || serie.original_language === 'it' || serie.original_language === 'ko' || serie.original_language === 'de' " :src="'../src/assets/' + serie.original_language + '.png'" :alt="serie.original_language" id="flagimg">
        <span v-else>{{serie.original_language}}</span>
        <h4>{{serie.vote_average}}</h4>
    </div>
</template>

<style>

#flagimg{
    max-width: 115px;
}
</style>