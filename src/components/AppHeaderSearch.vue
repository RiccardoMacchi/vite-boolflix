<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppHeaderSearch",
    emits: ['newSearch'],
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <input type="text" v-model="store.newFilmSearch" > 
    <button @click="$emit('newSearch')">Search</button>
</template>

<style>
</style>