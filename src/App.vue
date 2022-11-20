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

</style>