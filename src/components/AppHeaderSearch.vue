<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppHeaderSearch",
    data(){
        return{
            store
        }
    },
    methods:{
        requestNewFilm(){
        axios.get(store.baseUrl + store.apiKey + store.addNameFilm + store.newFilmSearch)
        
        .then(function(response){
            console.log(store.baseUrl + store.apiKey + store.addNameFilm + store.newFilmSearch)
            console.log(response.data.results)
            store.filmList = response.data.results
        })
        
        .catch(err =>{
            console.log(err)
        })
    }
  },

}
</script>

<template>
    <input type="text" v-model="store.newFilmSearch" > 
    <button @click="requestNewFilm" >Search</button>
</template>

<style>
</style>