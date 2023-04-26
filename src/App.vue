<template>
  <MainNav />
  <Hero />
</template>

<script>
import MainNav from "./components/MainNav.vue";
import Hero from "./components/Hero.vue";
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
