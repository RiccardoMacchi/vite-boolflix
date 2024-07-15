<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppHeaderSearch",
    emits: ['newSearch','displayPref','homePage'],
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
                    <li>
                        <input type="text" v-model="store.newFilmSearch" placeholder="Cerca qui tra milioni di serie e film" @keyup="$emit('newSearch')" >
                    </li>
                </ul>
            </nav>
            
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;


header{
    background-color: black;
    color: red;
    
}
.container{
    justify-content: space-between;
    align-items: center;
    height: 75px;
    border-bottom: 1px solid white;
    nav{
        flex-grow: 1;
    }
    h1{
        font-size: 2rem;
    }
    input{
        padding: 5px;
        width: 50%;
    }
    span{
        // border-bottom-left-radius: 10px;
        // border-bottom-right-radius: 10px;
        padding: 6px 20px;

        &:hover{
            background-color: $bgcolor;
        }
    }
}
</style>