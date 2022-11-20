<template>
  <form class="post-form" @submit.prevent="createPost">
    <h2>Создание поста</h2>

    <app-input
        v-model="form.title"
        type="text"
        placeholder="Название поста"
        required/>

    <app-text-area
        v-model="form.body"
        placeholder="Описание поста"
        rows="4"
        required/>

    <app-button
        type="submit"
        class="post-form__button">
      Создать пост
    </app-button>
  </form>
</template>

<script>

export default {
  name: "PostForm",

  data() {
    return {
      form: {
        title: '',
        body: ''
      }
    }
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        ...this.form
      };

      this.form = {
        title: '',
        body: ''
      }

      this.$emit('createPost', newPost);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.post-form {
  display: flex;
  flex-direction: column;

  &__button {
    margin-left: auto;
  }

  > *:not(:last-child) {
    margin-bottom: 16px;
  }

}
</style>