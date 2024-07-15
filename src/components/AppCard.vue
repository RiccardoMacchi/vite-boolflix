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
        },
        removePref(){
            for (i in store.filmList){
                if(store.filmList[i].title === addedFilm){
                    store.prefList = store.prefList.filter(obj => obj.title !== store.film[i].title)
                }
            }

        }
    },
    mounted(){
        this.consoleMeto()
    }
}
</script>

<template>
<!-- FILM -->


<!-- Div film e serie -->
    <div v-show="store.displayFilm">
        <div class="container">
            <h2>FILMS</h2>
        </div>
        <div v-if="store.filmList.length > 0" class="container">
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
                    <div class="flagimg">
                        <img v-if="store.flags.includes(film.original_language)" :src="'../src/assets/' + film.original_language + '.png'" :alt="film.original_language">
                        <span v-else>{{film.original_language}}</span>
                    </div>
                    <h4>Valutazione degli utenti:</h4>
                    <div class="fb_stars" v-for="i in 5" @mouseover="film.vote_average = i * 2">
                        <span v-if="i <= Math.round(film.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                        <span v-else><i class="fa-regular fa-star"></i></span>
                    </div>
                    <div class="card_txt">
                        <h4>Panoramica</h4>
                        <p>{{film.overview}}</p>
                    </div>
                    <div>
                        <button @click="store.prefList.push(film)" :addedFilm="film">AGGIUNGI</button>
                        <button @click="store.prefList = store.prefList.filter(obj => obj.title !== film.title)">RIMUOVI</button>
                    </div>
                    
                    <!-- <span>{{ consoleMeto() }}</span> -->
                </div>
            </div>
        </div>
        <div class="container" v-else><h5>La ricerca non ha prodotto risultati</h5></div>
    </div>    
    <!-- SERIE TV -->
    <div v-show="store.displaySerie"> 
        <div class="container">
            <h2>SERIE TV</h2>
        </div>
        <div v-if="store.serieList.length > 0" class="container">
            <div class="wrapper_card" v-for="(serie, i) in store.serieList" :key="i">
                <div class="card_img">
                    <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" :alt="serie.name">
                </div>
                <div class="card_info">
                    <h2>{{serie.name}}</h2>
                    <h3>{{serie.original_name}}</h3>
                    <div class="flagimg">
                        <img v-if="store.flags.includes(serie.original_language)" :src="'../src/assets/' + serie.original_language + '.png'" :alt="serie.original_language">
                        <span v-else>{{serie.original_language}}</span>
                    </div>
                    <h4>Valutazione degli utenti:</h4>
                    <div class="fb_stars" v-for="i in 5" @mouseover="serie.vote_average = i * 2">
                        <span v-if="i <= Math.round(serie.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                        <span v-else><i class="fa-regular fa-star"></i></span>
                    </div>
                    <div class="card_txt">
                        <h4>Panoramica</h4>
                        <p>{{serie.overview}}</p>
                    </div>
                    <div>
                        <button @click="store.prefList.push(serie)">AGGIUNGI</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-else><h5>La ricerca non ha prodotto risultati</h5></div>
    </div>
    
<!-- Arrey di lingue se inclusa stampa se no span -->
</template>

<style lang="scss">

.wrapper_card{
    flex-basis: calc(100% / 4);
    display: flex;
    text-align: center;
    position: relative;
    transform-style: preserve-3d;
    transition: all 1s ease;

    div{
        margin: 0 auto;
    }
    
    .flagimg{
        max-width: 115px;
        display: block;
    }

    .fb_stars{
        display: inline-block;
    }
    .card_txt{
        text-align: left;
        padding: 0 20px;
    }

    .card_info{
        background-color: black;
        // display: none;
        width: 100%;
        height: 100%;
        color: white;
        overflow-y: auto;
        position: absolute;
        backface-visibility: hidden;
        transform: rotateY(180deg);
    }

    .card_img{
        // width: 100%;
        height: 100%;
        // position: absolute;
        backface-visibility: hidden;
    }

    i{
        color: yellowgreen;

    }

}
h2{
    color: red;
    width: 100%;
    font-size: 1.5rem;
    margin: 25px 0;
}

.wrapper_card:hover{
    // .card_info{
        
    // 
        transform: rotateY(180deg);
    
}

h5{
    color: white;
    font-size: 2rem;
}

</style>