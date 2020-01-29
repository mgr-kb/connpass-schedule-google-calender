<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ state.hoge }}</p>
    <p>{{ state.foo }}</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { createComponent, reactive } from "@vue/composition-api";
import axios from "axios";

const getData = async () => {
  const data = await axios
    // .get("https://connpass.com/api/v1/event/?nickname=mgr")
    .get("/event")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};

export default createComponent({
  components: {
    HelloWorld
  },
  setup() {
    const state = reactive({
      hoge: "fuga",
      foo: {}
    });
    const axiosData = async () => {
      const events = await getData();
      state.foo = events;
    };
    axiosData();
    console.log(state);
    return {
      state
    };
  }
});
</script>
