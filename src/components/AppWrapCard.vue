<script >
import AppCard from './AppCard.vue';
import AppPref from './AppPref.vue';

export default {
  name: "AppWrapCard",
  components:{
    AppCard,
    AppPref
  }
}

</script>

<template>
  <div id="wrapper_container">
    <AppCard />
    <AppPref />
  </div>
</template>

<style lang="scss" scoped>
#wrapper_container{
  height: calc(100vh - 75px);
  overflow: auto;
}
</style>
