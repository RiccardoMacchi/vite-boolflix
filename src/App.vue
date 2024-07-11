<script>
import AppWrapCard from './components/AppWrapCard.vue'
import { store } from './store';
import axios from 'axios';
export default{
  components:{
    AppWrapCard,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    requestFilms(){
      axios.get(store.urlFilmList)
        .then(function(response){
          console.log(response.data.results)
          store.filmList = response.data.results
        })
        
        .catch(err =>{
            console.log(err)
        })
    }
  },
  created(){
    this.requestFilms()
  }
}
</script>

<template>

  <AppWrapCard  />
</template>

<style lang="scss">
@use "./styles/general.scss" as*;

</style>
