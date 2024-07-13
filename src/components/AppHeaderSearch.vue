<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppHeaderSearch",
    emits: ['newSearch','displayPref'],
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
            <input type="text" v-model="store.newFilmSearch" placeholder="Cerca qui tra milioni di serie e film" @keyup="$emit('newSearch')" >
            <button @click="$emit('displayPref')">Preferiti</button>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    background-color: black;
    color: red;
}
.container{
    justify-content: space-between;
    align-items: center;
    height: 75px;

    h1{
        font-size: 2rem;
    }
    input{
        width: 50%;
    }
}
</style>