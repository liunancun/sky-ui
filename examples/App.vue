<template>
  <div id="app">
    <el-button @click="sendRequest">发送请求</el-button>
  </div>
</template>

<script>
import request from "./utils/request";

export default {
  name: "app",
  methods: {
    sendRequest() {
      request({
        url: "https://api.ipify.org",
        method: "get"
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>