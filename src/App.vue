<template>
  <div id="app">
    <Header />
    <div class="container">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
export default {
  name: "App",
  components: { Header, Sidebar, Dashboard },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0 auto;
  box-sizing: border-box;
}
#app {
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: auto;
  width: 100%;
  height: calc(100vh - 55px);
}
</style>
