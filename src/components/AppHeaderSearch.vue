<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppHeaderSearch",
    emits: ['newSearch'],
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <div>
        <input type="text" v-model="store.newFilmSearch" @keyup.enter="$emit('newSearch')" >
        <button >Search</button>
    </div>
</template>
<style>
</style>