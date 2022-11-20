<template>
  <div class="post-item">
    <button type="button"
            class="post-item__button-remove"
            @click="removePost(post.id)">
      <img src="@/assets/svg/remove.svg" alt="Иконка удаления поста">
    </button>

    <img class="post-item__image" src="https://unsplash.it/800/800" alt="Превью статьи">

    <div class="post-item__content">
      <div class="post-item__title">
        {{ post.title }}
      </div>
      <div class="post-item__body">
        {{ post.body }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    removePost(postId) {
      this.$emit('removePost', postId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixin.scss';

.post-item {
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  background-color: #FFFFFF;
  border-radius: $defaultRadius;
  position: relative;

  .post-item__button-remove {
    position: absolute;
    right: 16px;
    top: 16px;

    width: 40px;
    height: 40px;

    border-radius: $smallRadius;
    border: none;

    background: rgba(0, 0, 0, 0.2);
    opacity: 0;

    cursor: pointer;

    transition: opacity $animTime ease-out;
  }

  &:hover .post-item__button-remove {
    opacity: 1;
  }

  .post-item__image {
    height: 200px;
    object-fit: cover;
    border-radius: $defaultRadius $defaultRadius 0 0;
  }

  .post-item__content {
    padding: 20px;
  }

  .post-item__title {
    font-size: 24px;
    font-weight: 500;
    color: $primaryColor;
    margin-bottom: 12px;
    @include truncate-1;
  }

  .post-item__body {
    font-size: 16px;
    line-height: 150%;
    color: $secondaryColor;
    @include truncate-2;
  }
}
</style>