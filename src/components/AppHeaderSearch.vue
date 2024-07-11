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

  },

}
</script>

<template>
    <input type="text" v-model="store.newFilmSearch" > 
    <button @click="$emit('prova')" >Search</button>
</template>

<style>
</style>