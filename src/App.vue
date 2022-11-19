<template>
  <main class="main-container">
    <div class="content">

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

      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
* {
  font-family: Arial,serif;
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

.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.post-item {
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 40px;
  background-color: #FFFFFF;

  .post-item__image {
    height: 200px;
    object-fit: cover;
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

button {
  padding: 12px 24px;
  border: 2px solid blueviolet;
  color: blueviolet;
  background: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
}
</style>