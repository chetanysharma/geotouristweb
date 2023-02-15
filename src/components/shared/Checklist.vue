<template>
  <div class="container">
    <h4 class="heading">Check List</h4>
    <div class="checklist">
      <div class="row" style="margin: 25px 15px 15px 0px;">
        <div class="col-md-6">
            <span style="font-size:16px">Name</span>
        </div>
        <div class="col-md-6">
            <img style="float:right" height="20" width="20" src="../../assets/successIcon.png">
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px;">
        <div class="col-md-6">
            <span style="font-size:16px">Description</span>
        </div>
        <div class="col-md-6">
            <img style="float:right" height="20" width="20" src="../../assets/successIcon.png">
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px;">
        <div class="col-md-6">
            <span style="font-size:16px">Cover Photo</span>
        </div>
        <div class="col-md-6">
            <img style="float:right" height="20" width="20" src="../../assets/successIcon.png">
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px;">
        <div class="col-md-6">
            <span style="font-size:16px">At least 1 point</span>
        </div>
        <div class="col-md-6">
            <img style="float:right" height="20" width="20" src="../../assets/successIcon.png">
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px;">
        <div class="col-md-6">
            <span style="color:gray;font-size:16px">Narration</span>
        </div>
      </div>
      <div class="row" style="margin: 25px 15px 15px 0px;">
        <div class="col-md-6">
            <span style="color:gray;font-size:16px">Category</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
            <button class="addbtn" type="submit" style="margin-left: 25%; color: skyblue;">Preview</button>
        </div>
      </div>
      <div class="row" style="margin-top:20px">
        <div class="col-md-12">
            <button class="addbtn" type="submit" style="margin-left: 25%;background-color: skyblue; color: white;">Publish</button>
        </div>
      </div>
    </div>
  </div>
</template>
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
.heading {
  margin: 15px 15px 15px 15px;
}
.checklist {
  margin: 0px 0px 0px 5px;
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