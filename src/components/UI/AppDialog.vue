<template>
  <div v-if="active"
       @click="hideDialog"
       class="app-dialog">
    <div class="app-dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDialog",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:active', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.app-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &__content {
    width: 100%;
    max-width: 700px;
    border-radius: $defaultRadius;
    padding: 20px;
    background: #FFFFFF;
  }
}
</style>