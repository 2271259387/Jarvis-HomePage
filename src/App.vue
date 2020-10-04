<template>
  <div id="app">
   <search/>
   <time-info/>
  </div>
</template>

<script>

import Search from './components/Search.vue'
import TimeInfo from './components/TimeInfo.vue'
export default {
  name: 'App',
  components: {
    TimeInfo,
    Search,
    
  }
}
</script>

<style>
</style>
