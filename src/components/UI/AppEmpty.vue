<template>
  <div class="app-empty">
    <img src="@/assets/svg/dialog.svg"/>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "AppEmpty",
  props: {
    title: {
      type: String,
      default: 'Ничего не найдено'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
.app-empty{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px;

  margin: auto;

  > img {
    width: 100px;
    height: 100px;

    margin-bottom: 20px;
  }

  > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: $secondaryColor;
  }
}
</style>