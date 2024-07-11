<script>
import { store } from '../store';

export default{
    name: "AppCard",
    data(){
        return{
            store,
        }
    },
    methods:{
        flag(){
            
        }
    }
}
</script>

<template>
    <div v-for="film in store.filmList">
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="">
        <h2>{{film.title}}</h2>
        <h3>{{film.original_title}}</h3>
        <h3>{{film.original_language}}</h3>
        <h4>{{film.vote_average}}</h4>
    </div>
</template>

<style>
</style>