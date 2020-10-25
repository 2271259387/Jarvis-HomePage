<template>
  <div id="app">
   <jarvis/>
   <search/>
   <time-info/>
   <motto/>
   <base-info/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import TimeInfo from './components/TimeInfo.vue'
import Motto from './components/Motto.vue'
import BaseInfo from './components/BaseInfo.vue'
import Jarvis from './components/Jarvis.vue'
export default {
  name: 'App',
  components: {
    TimeInfo,
    Search,
    Motto,
    BaseInfo,
    Jarvis
  }
}
</script>

<style>

</style>
