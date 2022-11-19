<template>
  <div class="post-item">
    <button type="button"
            class="post-item__button-remove"
            @click="removePost(post.id)">
      <img src="@/assets/svg/remove.svg" alt="Иконка удаления поста">
    </button>

    <img class="post-item__image" src="https://unsplash.it/800/800" alt="Превью статьи">

    <div class="post-item__title">
      {{ post.title }}
    </div>
    <div class="post-item__body">
      {{ post.body }}
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
.post-item {
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: relative;

.post-item__button-remove {
  position: absolute;
  right: 16px;
  top: 16px;

  width: 40px;
  height: 40px;

  border-radius: 4px;
  border: none;

  background: rgba(0, 0, 0, 0.2);
  opacity: 0;

  cursor: pointer;

  transition: opacity 0.3s ease-out;
}

&:hover .post-item__button-remove {
   opacity: 1;
 }

.post-item__image {
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.post-item__title {
  font-size: 24px;
  font-weight: 500;
  padding: 20px 20px 12px;
}

.post-item__body {
  padding: 12px 20px 20px;
  font-size: 16px;
  line-height: 150%;
}
}
</style>