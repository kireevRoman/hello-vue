<template>
  <form class="post-form" @submit.prevent="createPost">
    <h2>Создание поста</h2>

    <input :value="form.title"
           @input="form.title = $event.target.value"
           type="text"
           placeholder="Название поста"
           required>

    <textarea :value="form.body"
              @input="form.body = $event.target.value"
              placeholder="Описание поста"
              rows="4"
              required/>

    <button type="submit">Создать пост</button>
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
.post-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;

  margin-bottom: 40px;

  > input, > textarea {
    padding: 10px 16px;
    border: 1px solid #7C7C7C;
    border-radius: 4px;
    font-size: 16px;
  }

  > button {
    padding: 12px 24px;
    border: 1px solid blueviolet;
    color: #FFFFFF;
    background: blueviolet;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: auto;
  }

  > *:not(:last-child) {
    margin-bottom: 16px;
  }

}
</style>