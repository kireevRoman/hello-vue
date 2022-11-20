<template>
  <button :class="['app-button', `app-button__${size}`, {'app-button__round': rounded}]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    size: {
      type: String,
      description: 'small | large'
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
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
.app-button__small {
  padding: 8px 16px;
  font-size: 14px;
}
.app-button__large {
  padding: 24px 48px;
  font-size: 24px;
}
.app-button__round {
  border-radius: 80px;
}
</style>