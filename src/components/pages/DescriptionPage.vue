<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                style="color: skyblue"
                aria-current="page"
                href="#"
                >English</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">French</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Deutch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Spanish</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="addbtn" type="submit">+ Add</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="imageContainer">
      <img
        width="680"
        height="300"
        src="../../assets/DecriptonPageImages/geodescriptionPage.png"
      />
    </div>
    <div style="margin-top: 5%">
      <h1 class="a-walking-trail-of-m">A walking trail of Montmartre, Paris</h1>
      <p class="dominated-by-the-gra">
        Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the
        leafy hilltop village of Montmartre was once the play area of Paris’s
        most famous artists, bohemians and creatures of the night. These days,
        the winding cobbled streets host chic cafes, retro boutiques and fine
        French dining but, if you look closely enough, those in search of
        historical secrets can still find traces of the old La Bohème hidden
        between the tourist traps…..
      </p>
      <h1 class="a-walking-trail-of-m" style="margin-top: 5%">Tags</h1>
      <button
        class="addbtn"
        type="submit"
        style="margin-left: 5%; margin-top: 2%"
      >
        +
      </button>
      <button class="addbtn" type="submit" style="margin-left: 5%">Mont <fa class="icons-favourite" icon="close" /></button>
      <button class="addbtn" type="submit" style="margin-left: 5%">
        Paris <fa class="icons-favourite" icon="close" />
      </button>
    </div>
    <div class="categories">
      <h1 class="a-walking-trail-of-m">Categories</h1>
      <div style="margin-top: 5%">
        <div class="row">
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/architecture.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/citytours.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/cycling.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/driving.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/educational.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/haunted.png"
            />
          </div>
        </div>
        <div class="row" style="margin-top: 5%">
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/food.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/heritage.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/nature.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/shopping.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/walking.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/accessible.png"
            />
          </div>
        </div>
        <div class="row" style="margin-top: 5%">
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/forkids.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/rivers.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/hotels.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/trains.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/described.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/easterhunt.png"
            />
          </div>
        </div>
        <div class="row" style="margin-top: 5%">
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/arts.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/entertainment.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/life.png"
            />
          </div>
          <div class="col-md-2">
            <img
              width="100"
              height="100"
              src="../../assets/categories/religious.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DescriptionPage",
});
</script>
  <style scoped>
.container {
  width: 50%;
}
.dominated-by-the-gra {
  height: 170px;
  width: 700px;
  color: #5b5c5e;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 32px;
}

.a-walking-trail-of-m {
  height: 42px;
  width: 588px;
  color: #212121;
  font-family: "SF Pro Display";
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.54px;
  line-height: 42px;
}
.imageContainer {
  margin-top: 5%;
}
.addbtn {
  border-radius: 20px;
  height: 40px;
  width: 80px;
  background-color: aliceblue;
  color: gray;
  border: skyblue solid;
}
</style>
  