<template>
  <div class="accordion">

    <div class="accordion__header" @click="visible = !visible">
      <p class="accordion__header-text">{{ title }}</p>
      <div :class="['accordion__header-button', { active: visible }]">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#818c99"
             fill="none"
             fill-rule="evenodd"
             stroke-linecap="square">
            <path d="M1 12h22M12 1v22"/>
          </g>
        </svg>
      </div>
    </div>

    <div ref="accordion"
         class="accordion__body"
         :style="visible && `max-height: ${$refs.accordion.scrollHeight}px`">
      <div class="accordion__body-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAccordion',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/vars.scss";

.accordion {
  width: 100%;
  cursor: pointer;
  background: #FFFFFF;
  border-radius: $defaultRadius;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    &-text {
      font-size: 28px;
      line-height: 150%;
    }

    &-button {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      transition: all ease-in-out 0.2s;

      &.active {
        transform: rotate(45deg);
      }
    }
  }

  &__body {
    overflow: hidden;
    transition: all 0.3s ease-in;
    max-height: 0;

    &-content {
      padding: 0 20px 20px;
    }
  }
}
</style>
