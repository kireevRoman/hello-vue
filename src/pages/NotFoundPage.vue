<template>
  <div class="not-found">
    <p class="not-found__title">404</p>
    <app-button rounded
                size="large"
                @click="goToHome"> На главную
    </app-button>
  </div>

</template>

<script>
export default {
  name: "NotFoundPage",
  methods: {
    goToHome() {
      this.$router.push({name: 'main'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.not-found {
  margin: auto;
  text-align: center;

  &__title {
    font-size: 160px;
    font-weight: 600;
  }
}
</style>