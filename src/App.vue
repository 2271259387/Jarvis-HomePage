<template>
  <div id="app">
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
export default {
  name: 'App',
  components: {
    TimeInfo,
    Search,
    Motto,
    BaseInfo
  }
}
</script>

<style>

</style>
