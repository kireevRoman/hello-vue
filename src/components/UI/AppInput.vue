<template>
  <input ref='input'
         class="app-input"
         :value="modelValue"
         @input="updateInput">
</template>

<script>
export default {
  name: "AppInput",
  props: {
    modelValue: [String, Number],
    setFocus: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.setFocus && this.$refs.input.focus()
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.app-input {
  padding: 12px 16px;
  border: 1px solid $secondaryColor;
  border-radius: $smallRadius;
  color: $primaryColor;
  font-size: 16px;
}
</style>