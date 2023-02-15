<template>
<nav
  class="sticky-top"
  style="background-color:aliceblue"
>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="logoContainer">
          <img class="logo" src="../../assets/geotouristLogo.png"/>
          <span class="geo">geo</span>
          <span class="tourist">tourist</span>
        </div>
      </div>
      <div class="col-md-4">
          <div class="navlinks">
            <div class="middlenav">
              <span class="discover">Discover</span>
            </div>
            <div class="middlenav">
              <span class="create">Create</span>
            </div>
            <div class="middlenav">
              <button class="button">
                <span class="download">Download</span>
              </button>
          </div>
          <span></span>
        </div>
      </div>
      <div class="col-md-4">
        <div style="float:right">
          <fa class="icons-favourite" icon="bookmark" />
          <fa class="icons-notifications" icon="bell" />
          <fa class="oval-4" icon="user" />
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
  
  <script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
});
</script>
  
  <style scoped>
.logoContainer {
  height: 56px;
  width: 226.8px;
}
.container {
    padding: 1%;
}
.middlenav {
  width: 33.33%;
  float: left;
}
.logo {
  height: 50.4px;
  width: 49.14px;
}
.logo-vectorised {
  height: 50.4px;
  width: 204.12px;
}
.nav-bar {
  height: 80px;
  width: 1440px;
}
.nav {
  height: 36px;
  width: 321px;
}
.icons-favourite {
  height: 24px;
  width: 24px;
  margin: 0 50px 0 0;
}
.icons-notifications {
  height: 27px;
  width: 27px;
  margin: 0 50px 0 0;
}
.oval-4 {
  height: 24px;
  width: 24px;
  margin: 0 15px 0 0;
}
.navlinks {
  position: relative;
  top: 20%;
}
.discover {
  height: 23px;
  width: 67px;
  opacity: 0.9;
  color: #5b5c5e;
  font-family: Avenir;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 23px;
}
.create {
  height: 23px;
  width: 53px;
  opacity: 0.9;
  color: #2daee1;
  font-family: Avenir;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 23px;
}
.button {
  height: 36px;
  width: 108px;
  border-radius: 24px;
  background-color: #bdbfc2;
}
.download {
  height: 20px;
  width: 79.51px;
  color: #ffffff;
  font-family: Avenir;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
}
.geo {
  height: 12.32px;
  width: 13.93px;
  padding-left: 15px;
  font-size: 30px;
  color: #bdbfc2;
}
.tourist {
  height: 12.32px;
  font-size: 30px;
  width: 13.93px;
  color: #2daee1;
}
</style>