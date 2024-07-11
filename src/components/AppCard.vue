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
</template>

<style>

#flagimg{
    max-width: 115px;
}
</style>