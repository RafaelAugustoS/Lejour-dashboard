<template>
  <header class="header-my">
    <img src="../assets/logo.png" alt="Logo Lejour" />
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-my {
  z-index: 9;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0820859),
    0px 2px 32px rgba(0, 0, 0, 0.0575557);
  height: 55px;
  padding: 0 30px;
  display: flex;
  position: fixed;
  width: 100%;
  margin-bottom: 55px;
  align-items: center;
}
</style>
