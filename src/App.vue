<script>
// Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import AppHeaderSearch from './components/AppHeaderSearch.vue';
import AppWrapCard from './components/AppWrapCard.vue'
import { store } from './store';
import axios from 'axios';
export default{
  components:{
    AppWrapCard,
    AppHeaderSearch
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    requestFilms(){
      axios.get(store.urlFilmList)
        .then(function(response){
          store.filmList = response.data.results
          console.log("store in axios",store.filmList)
        })
        .catch(err =>{
            console.log(err)
        })
        axios.get(store.urlSerieList)
        .then(function(response){
          store.serieList = response.data.results
          console.log("store in axios",store.serieList)
        })
        .catch(err =>{
            console.log(err)
        })
    },
    requestNewFilm(){
        let fullApiM = store.baseUrl + store.movieUrl + store.apiKey + store.addName + store.newFilmSearch
        axios.get(fullApiM)
        .then(function(response){
            console.log(store.baseUrl + store.apiKey + store.addName + store.newFilmSearch)
            store.filmList = response.data.results
            console.log("richeista film",store.filmList)
        })
        .catch(err =>{
            console.log(err)
        })
        let fullApiS = store.baseUrl + store.serieUrl + store.apiKey + store.addName + store.newFilmSearch
        axios.get(fullApiS)
        .then(function(response){
            store.serieList = response.data.results
            console.log("richeista serie",store.serieList)
        })
        .catch(err =>{
            console.log(err)
        })
    },
// Methods nav bar
    prefTvFilm(){
      if (store.displayPref === false){
        store.displayPref = !store.displayPref
        store.displayFilm = false
        store.displaySerie = false
      } else{
        store.displayPref = !store.displayPref
        store.displayFilm = true
        store.displaySerie = true
      }
          
    },
    home(){
        store.displayFilm = true
        store.displaySerie = true
        store.displayPref = false
        this.requestFilms()
    },
    serieTV(){
      store.displaySerie = true
      store.displayFilm = false
      store.displayPref = false
    },
    movie(){
      store.displayFilm = true
      store.displaySerie = false
      store.displayPref = false
    }
  },
  created(){
    this.requestFilms()
  }
}
</script>

<template>
  <AppHeaderSearch @showSerieTV="serieTV" @showFilm="movie" @homePage="home" @displayPref="prefTvFilm" @newSearch="requestNewFilm"/>
  <main>
    <AppWrapCard  />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as*;
@use "./styles/partials/variables" as*;

main{
  background-color: $bgcolor;
}

</style>
