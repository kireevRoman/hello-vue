<template>
  <header class="header">
    <div class="header__wrapper">
      <p class="header__title" @click="goToHome">HelloVUE</p>

      <nav class="header__links">
        <router-link class="header__links-item" :to="{name: 'posts'}">Посты</router-link>
        <router-link class="header__links-item" :to="{name: 'about'}">Профиль</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    goToHome() {
      this.$router.push({name: 'main'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.header {
  width: 100%;
  background: blueviolet;

  &__wrapper {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
  }

  &__title {
    font-weight: 600;
    font-size: 40px;
    color: #FFFFFF;

    cursor: pointer;
  }

  &__links {
    &-item {
      color: #FFFFFF;
      font-size: 18px;
      text-decoration: none;

      &.router-link-active {
        text-decoration: underline;
      }
    }

    *:not(:last-of-type) {
      margin-right: 16px;
    }
  }
}
</style>