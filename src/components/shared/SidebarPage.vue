<template>
  <nav class="nav flex-column sidebar">
    <div class="navbar-nav">
      <router-link class="nav-link" to="/">Description</router-link>
      <div>
        <router-link class="nav-link" to="/">Points</router-link>
        <div class="points">
          <fa class="icons-favourite" icon="circle" />
          <span class="pointContent">Abbesses Metro Station</span>
        </div>
        <div class="points">
          <fa class="icons-favourite" icon="circle" />
          <span class="pointContent">Pigalle</span>
        </div>
        <div class="points">
          <fa class="icons-favourite" icon="plus" />
          <span class="pointContent">Create new Point</span>
        </div>
      </div>
      <router-link class="nav-link" to="/media">Media</router-link>
      <router-link class="nav-link" to="/">Settings</router-link>
    </div>
  </nav>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Sidebar",
});
</script>
<style scoped>
.sidebar {
  position: absolute;
  background-color: #f6f6f6;
  height: 180vh;
  width: 25%;
}
.navbar-nav {
  margin-left: 15%;
  margin-top: 5%;
}
.nav-link {
  font-size: 20px;
  font-weight: 600;
  margin-top: 5%;
}
.points {
    margin: 20px 1px 20px 1px;
}
.pointContent {
    margin-left: 10px;
    font-size: 15px;
    color: gray;
}
</style>