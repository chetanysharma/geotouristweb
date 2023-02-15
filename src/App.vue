<template>
  <Header/>
  <Sidebar/>
  <Checklist/>
  <router-view/>
</template>

<script>
import Header from './components/shared/Header.vue'
import Sidebar from './components/shared/SidebarPage.vue'
import Checklist from './components/shared/Checklist.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Checklist
  }
}
</script>

<style>

</style>
