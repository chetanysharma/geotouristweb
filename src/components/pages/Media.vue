<template>
    <div class="container">
        <div class="mediaHeader">
            <h3 style="color:gray; font-weight: 300; font-size: 35px;">Media</h3>
            <button style="position:absolute; right:28%"  class="addbtn">+ Add ...</button>
        </div>
        <hr>
        <div class="mediaHeader">
            <h3 style="font-weight:600; font-size: 20px;">Audio</h3>
            <fa color="skyblue" style="position:absolute; right:28%; height: 25px;" icon="microphone"></fa>
            <div class="audioHeader">

            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
  width: 45%;
}
.mediaHeader {
    display: flex;
    margin: 40px 0px 20px 0px;
}
.addbtn {
  border-radius: 20px;
  height: 40px;
  width: 100px;
  background-color: aliceblue;
  color: gray;
  border: skyblue solid;
}
</style>