<template>
  <nav class="nav flex-column sidebar">
    <div class="navbar-nav">
      <router-link class="nav-link" to="/">Description</router-link>
      <div>
        <router-link class="nav-link" to="/">Points</router-link>
        <div class="points">
          <span class="dot">
            <span class="numbers">1</span>
          </span>
          <span class="pointContent">Abbesses Metro Station</span>
        </div>
        <div class="points">
          <span class="dot">
            <span class="numbers">2</span>
          </span>
          <span class="pointContent">Pigalle</span>
        </div>
        <div class="points">
          <span class="dot">
            <span class="numbers">+</span>
          </span>
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
  font-size: 22px;
  font-weight: 400;
  margin-top: 5%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.points {
    margin: 20px 1px 20px 1px;
}
.pointContent {
    margin-left: 30px;
    font-size: 20px;
    color: gray;
    font-weight: 300;
}
.dot {
  height: 45px;
  width: 45px;
  border: 1px solid #d6d6d6;
  border-radius: 50%;
  display: inline-block;
}
.numbers{
  font-size: 22px;
  color: darkgray;
  margin-top: 5px;
  margin-left: 15px;
}
</style>