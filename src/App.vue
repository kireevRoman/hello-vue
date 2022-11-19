<template>
  <main class="main-container">
    <div class="content">

      <form class="post-form" v-on:submit.prevent="createPost">
        <h2>Создание поста</h2>

        <input v-bind:value="form.title"
               v-on:input="form.title = $event.target.value"
               type="text"
               placeholder="Название поста"
               required>

        <textarea v-bind:value="form.body"
                  v-on:input="form.body = $event.target.value"
                  placeholder="Описание поста"
                  rows="4"
                  required/>

        <button type="submit">Создать пост</button>
      </form>

      <div class="post-list">
        <div class="post-item" v-for="post in posts" :key="`post-${post.id}`">
          <img class="post-item__image" src="https://unsplash.it/800/800" alt="Превью статьи">
          <div class="post-item__title">
            {{ post.title }}
          </div>
          <div class="post-item__body">
            {{ post.body }}
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Заголовок статьи',
          body: ' Текст статьи в несколько строк.  Текст статьи в несколько строк.  Текст статьи в несколько строк.'
        },
        {
          id: 2,
          title: 'Заголовок статьи 1',
          body: ' Текст статьи в несколько строк.  Текст статьи в несколько строк.  Текст статьи в несколько строк.'
        },
        {
          id: 3,
          title: 'Заголовок статьи 2',
          body: ' Текст статьи в несколько строк.  Текст статьи в несколько строк.  Текст статьи в несколько строк.'
        },

      ],
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
      this.posts.push(newPost);

      this.form = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: Arial, serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px;

  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  background: #f0f1f5;
}

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

.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.post-item {
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  background-color: #FFFFFF;
  border-radius: 8px;

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