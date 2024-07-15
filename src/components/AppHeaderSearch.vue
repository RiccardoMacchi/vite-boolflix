<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppHeaderSearch",
    emits: ['newSearch','displayPref','homePage','showFilm','showSerieTV'],
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <header>
        <div class="container">
            <h1 @click="$emit('homePage')">BOOLFLIX</h1>
            <nav>
                <ul>
                    <li>
                        <span @click="$emit('homePage')">HOME</span>
                    </li>
                    <li>
                        <span @click="$emit('showFilm')">FILM</span>
                    </li>
                    <li>
                        <span @click="$emit('showSerieTV')">SERIE TV</span>
                    </li>
                    <li>
                        <span @click="$emit('displayPref')">PREFERITI</span>
                    </li>
                </ul>
            </nav>
            <div>
                <input type="text" v-model="store.newFilmSearch" placeholder="Cerca qui tra milioni di serie e film" @keyup="$emit('newSearch')" >
            </div>
            <div id="pref_mobile" @click="$emit('displayPref')"><i class="fa-solid fa-heart"></i></div>
            
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/media_query" as*;


header{
    background-color: black;
    color: red;
    
}
.container{
    justify-content: flex-start;
    align-items: center;
    height: 75px;
    border-bottom: 1px solid white;
    
    div{
        flex-grow: 1;
        padding-left: 50px;
    }

    h1{
        font-size: 2rem;
    }
    input{
        padding: 5px;
        width: 100%;
    }
    span{
        // border-bottom-left-radius: 10px;
        // border-bottom-right-radius: 10px;
        padding: 6px 20px;

        &:hover{
            background-color: $bgcolor;
        }
    }
    #pref_mobile{
        display: none;

        @media screen and (max-width:678px) {
        &{
        display: flex;
        flex-grow: 0;
        padding: 0 15px;
        
            }
        }
        i{
            font-size: 1.5rem;
        }
    }
}


</style>