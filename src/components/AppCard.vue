<script>
import { store } from '../store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';

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
        <!-- Console -->
        <span>{{ console.log("medodo in span")}}{{ consoleMeto() }}</span>
        <span>{{ console.log("span",store.filmList) }}</span>
        <!-- Console -->
        <div class="wrapper_card" v-for="(film, i) in store.filmList" :key="i">
            <div class="card_img">
                <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
            </div>
            <div class="card_info">
                <h2>{{film.title}}</h2>
                <h3>{{film.original_title}}</h3>
                <img v-if="store.flags.includes(film.original_language)" :src="'../src/assets/' + film.original_language + '.png'" :alt="film.original_language" id="flagimg">
                <span v-else>{{film.original_language}}</span>
                <h4>{{ Math.floor(film.vote_average / 2) }}</h4>
                <div v-for="i in 5" >
                    <span v-if="i <= Math.floor(film.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                    <span v-else><i class="fa-regular fa-star"></i></span>
                </div>
                <!-- <span>{{ consoleMeto() }}</span> -->
            </div>
        </div>
    </div>

<!-- SERIE TV -->
    <h2>SERIE TV</h2>
    <div class="container">
        <div class="wrapper_card" v-for="(serie, i) in store.serieList" :key="i">
            <div class="card_img">
                <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" :alt="serie.name">
            </div>
            <div class="card_info">
                <h2>{{serie.name}}</h2>
                <h3>{{serie.original_name}}</h3>
                <img v-if="store.flags.includes(serie.original_language)" :src="'../src/assets/' + serie.original_language + '.png'" :alt="serie.original_language" id="flagimg">
                <span v-else>{{serie.original_language}}</span>
                <div v-for="i in 5" >
                    <span v-if="i <= Math.floor(serie.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                    <span v-else><i class="fa-regular fa-star"></i></span>
                </div>
            </div>
        </div>
     </div>
<!-- Arrey di lingue se inclusa stampa se no span -->
</template>

<style lang="scss">
.wrapper_card{
    flex-basis: calc(100% / 4);
    display: flex;

    #flagimg{
        max-width: 115px;
    }

    .card_info{
        background-color: black;
        display: none;
        width: 100%;

        span,
        h2,
        h3,
        h4 {
            color: white;
        }
    }

}

.container div:hover{
    .card_info{
        display: block;
    }
    .card_img{
        display: none;
    }
}

</style>