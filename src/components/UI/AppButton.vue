<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton"
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.app-button {
  padding: 12px 24px;
  border: 1px solid blueviolet;
  color: #FFFFFF;
  background: blueviolet;
  font-size: 18px;
  cursor: pointer;
  border-radius: $smallRadius;
  transition: opacity $animTime ease-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background: $secondaryColor;
    border: $secondaryColor;
    pointer-events: none;
  }
}
</style>