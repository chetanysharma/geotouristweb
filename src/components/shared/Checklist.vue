<template>
  <div class="container">
    <h4 class="heading">Check List</h4>
    <div class="checklist">
      <div class="row" style="margin: 25px 15px 15px 0px">
        <div class="col-md-6">
          <span style="font-size: 16px">Name</span>
        </div>
        <div class="col-md-6">
          <img
            style="float: right"
            height="20"
            width="20"
            src="../../assets/successIcon.png"
          />
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px">
        <div class="col-md-6">
          <span style="font-size: 16px">Description</span>
        </div>
        <div class="col-md-6">
          <img
            style="float: right"
            height="20"
            width="20"
            src="../../assets/successIcon.png"
          />
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px">
        <div class="col-md-6">
          <span style="font-size: 16px">Cover Photo</span>
        </div>
        <div class="col-md-6">
          <img
            style="float: right"
            height="20"
            width="20"
            src="../../assets/successIcon.png"
          />
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px">
        <div class="col-md-6">
          <span style="font-size: 16px">At least 1 point</span>
        </div>
        <div class="col-md-6">
          <img
            style="float: right"
            height="20"
            width="20"
            src="../../assets/successIcon.png"
          />
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px">
        <div class="col-md-6">
          <span style="color: gray; font-size: 16px">Narration</span>
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px">
        <div class="col-md-6">
          <span style="color: gray; font-size: 16px">Category</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button
            class="addbtn"
            type="submit"
            style="margin-left: 25%; color: skyblue"
          >
            Preview
          </button>
        </div>
      </div>
      <div class="row" style="margin-top: 20px">
        <div class="col-md-12">
          <button
            type="button"
            class="addbtn"
            @click="showModal"
            style="margin-left: 25%; background-color: skyblue; color: white"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
    <!-- modal start -->

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog" style="overflow:hidden">
      <div class="modal-dialog" style="margin-top: 15%">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h3>Publish Tour</h3>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <p>Category</p>
              </div>
              <div class="col-md-6 cols">
                <p>Walking tour</p>
                <fa style="margin-left: 10%" icon="chevron-right"></fa>
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-md-6">
                <p>Tour type</p>
              </div>
              <div class="col-md-6 cols">
                <p>Quest</p>
                <fa style="margin-left: 10%" icon="chevron-right"></fa>
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-md-6">
                <p>Privacy</p>
              </div>
              <div class="col-md-6 cols">
                <p>Code protected</p>
                <fa style="margin-left: 10%" icon="chevron-right"></fa>
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-md-6">
                <p>Schedule</p>
              </div>
              <div class="col-md-6 cols">
                <p>M W S</p>
                <fa style="margin-left: 10%" icon="chevron-right"></fa>
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-md-6">
                <p>Gamification</p>
              </div>
              <div class="col-md-6 cols">
                <p>None</p>
                <fa style="margin-left: 10%" icon="chevron-right"></fa>
              </div>
            </div>
          </div>
          <div
            class="modal-footer"
            style="justify-content: center; display: grid"
          >
            <button
              type="button"
              class="addbtn"
              @click="publishTour"
              style="background-color: skyblue; color: white; width: 200px"
            >
              Publish
            </button>
            <button
              class="addbtn"
              type="button"
              @click="closeModal"
              style="color: skyblue; width: 200px"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal end -->
    <div class="modal fade" id="tourModal" role="dialog" style="overflow:hidden">
      <div class="modal-dialog" style="margin-top: 15%">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body">
            <span
              @click="closeTourModal"
              style="display: flex; flex-direction: row-reverse; cursor: pointer;"
              aria-hidden="true"
              >&times;</span
            >
            <div class="centerImage">
              <img height="300" width="300" src="../../assets/bluetick.png" />
            </div>
            <div style="text-align: center">
              <h2 style="color: skyblue">Hurray !</h2>
            </div>
            <div style="text-align: center; margin-top: 5%;">
              <h6 style="color: gray">Your Tour is live.</h6>
            </div>
            <div style="text-align: center">
              <h6 style="color: gray">Share it to become notice.</h6>
            </div>
            <!-- <div style="text-align: center">
              <fa icon="link"></fa>
              <fa icon="link"></fa>
              <fa icon="link"></fa>
              <fa icon="link"></fa>
            </div> -->
            <div style="text-align: center;  margin-top: 10%;">
              <button
                class="addbtn"
                type="button"
                style="color: skyblue; width: 300px"
              >
                View my tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const showModal = () => {
      // eslint-disable-next-line no-debugger
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      modal.style.opacity = 1;
    };
    const closeModal = () => {
      // eslint-disable-next-line no-debugger
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
      modal.style.opacity = 0;
    };
    const publishTour = () => {
      // eslint-disable-next-line no-debugger
      closeModal();
      let modal = document.getElementById("tourModal");
      modal.style.display = "block";
      modal.style.opacity = 1;
    };
    const closeTourModal = () => {
      // eslint-disable-next-line no-debugger
      let modal = document.getElementById("tourModal");
      modal.style.display = "none";
      modal.style.opacity = 0;
    };
    return { showModal, closeModal, publishTour, closeTourModal };
  },
};
</script>
<style scoped>
.container {
  box-shadow: 1px 1px 1px 1px;
  position: static;
  height: 500px;
  width: 300px;
  border-radius: 15px;
  float: right;
  margin: 90px 35px 30px 15px;
}
.centerImage {
  text-align: center;
}
.centerImage > img {
  vertical-align: middle;
}
.heading {
  margin: 15px 15px 15px 15px;
}
.checklist {
  margin: 0px 0px 0px 5px;
}
.cols {
  display: flex;
  justify-content: end;
  align-items: baseline;
}
.addbtn {
  border-radius: 20px;
  height: 40px;
  width: 130px;
  background-color: aliceblue;
  color: gray;
  border: skyblue solid;
}
</style>