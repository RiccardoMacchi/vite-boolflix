<script>
import { store } from '../store';

export default{
    name:"AppPref",
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div v-show="store.displayPref">
        <div class="container">
            <h2>ECCO I TUOI FILM E LE TUE SERIE TV PREFERITE</h2>
        </div>
        <div v-if="store.prefList.length > 0" class="container">
            <div class="wrapper_card" v-for="(preferiti, i) in store.prefList" :key="i">
                <div class="card_img">
                    <img :src="'https://image.tmdb.org/t/p/w342' + preferiti.poster_path" :alt="preferiti.name">
                </div>
                <div class="card_info">
                    <h2 v-if="preferiti.name === undefined">{{preferiti.title}}</h2>
                    <h2 v-else>{{ preferiti.name }}</h2>
                    <h3 v-if="preferiti.original_name === undefined">{{preferiti.original_title}}</h3>
                    <h3 v-else>{{ preferiti.original_name }}</h3>
                    <div class="flagimg">
                        <img v-if="store.flags.includes(preferiti.original_language)" :src="'../src/assets/' + preferiti.original_language + '.png'" :alt="preferiti.original_language">
                        <span v-else>{{preferiti.original_language}}</span>
                    </div>
                    <h4>Valutazione degli utenti:</h4>
                    <div class="fb_stars" v-for="i in 5" @mouseover="preferiti.vote_average = i * 2">
                        <span v-if="i <= Math.round(preferiti.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                        <span v-else><i class="fa-regular fa-star"></i></span>
                    </div>
                    <div class="card_txt">
                        <h4>Panoramica</h4>
                        <p>{{preferiti.overview}}</p>
                    </div>
                    <div>
                        <button @click="store.prefList.splice(i, 1)">RIMUOVI DAI PREFERITI</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-else><h5>Non hai ancora aggiunto nessun film o serie tv</h5></div>
    </div>
    
</template>

<style lang="scss">
</style>