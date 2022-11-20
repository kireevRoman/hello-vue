<template>
  <div class="load-more">
    <p class="load-more__title">{{ title }} {{ current }} из {{ total }}</p>
    <app-button v-if="current < total"
                :disabled="loading"
                rounded
                @click="$emit('nextPosts')">
      {{ label }}
    </app-button>
  </div>

</template>

<script>

export default {
  name: "AppLoadMore",
  props: {
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Загрузить еще'
    },
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    }

  }
}
</script>

<style lang="scss" scoped>
.load-more {
  margin-left: auto;
  margin-right: auto;

  &__title {
    text-align: center;
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 150%;
  }
}
</style>