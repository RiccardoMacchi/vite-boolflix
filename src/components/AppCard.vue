<script>
import { store } from '../store';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default{
    name: "AppCard",
    data(){
        return{
            store,
        }
    },
    methods:{
        consoleMeto(){
            console.log("stampa lista in app card",store.filmList)
        }
    },
    mounted(){
        this.consoleMeto()
    }
}
</script>

<template>
<!-- FILM -->
    <h2>FILMS</h2>
    <div class="container">
        <font-awesome-icon :icon="['fas', 'star']" />
        <span>{{ console.log("medodo in span")}}{{ consoleMeto() }}</span>
        <span>{{ console.log("span",store.filmList) }}</span>
        <div v-for="(film, i) in store.filmList" :key="i">
            <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
            <h2>{{film.title}}</h2>
            <h3>{{film.original_title}}</h3>
            <img v-if="store.flags.includes(film.original_language)" :src="'../src/assets/' + film.original_language + '.png'" :alt="film.original_language" id="flagimg">
            <span v-else>{{film.original_language}}</span>
            <h4>{{ Math.floor(film.vote_average / 2) }}</h4>
            
            <!-- <span>{{ consoleMeto() }}</span> -->
        </div>
    </div>

<!-- SERIE TV -->
    <h2>SERIE TV</h2>
    <div class="container">
        <div v-for="(serie, i) in store.serieList" :key="i">
            <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" :alt="serie.name">
            <h2>{{serie.name}}</h2>
            <h3>{{serie.original_name}}</h3>
            <img v-if="store.flags.includes(serie.original_language)" :src="'../src/assets/' + serie.original_language + '.png'" :alt="serie.original_language" id="flagimg">
            <span v-else>{{serie.original_language}}</span>
            <h4>{{Math.floor(serie.vote_average)}}</h4>
        </div>
     </div>
<!-- Arrey di lingue se inclusa stampa se no span -->
</template>

<style lang="scss">
.container div{
    flex-basis: calc(100% / 4);

    #flagimg{
        max-width: 115px;
    }
}

</style>