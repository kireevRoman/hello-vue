<template>
  <div class="app main-container">
    <the-header/>

    <main class="content">
      <router-view/>
    </main>
  </div>

</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {TheHeader}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  @include scroll;

  > main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;

  }
}
</style>