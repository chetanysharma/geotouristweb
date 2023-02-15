<template>
  <Header/>
  <Sidebar/>

  <router-view/>
</template>

<script>
import Header from './components/shared/Header.vue'
import Sidebar from './components/shared/SidebarPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>

</style>
