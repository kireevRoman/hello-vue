<template>
  <main class="main-container">
    <div class="content">
      <post-form @createPost="createPost"/>

      <post-list :posts="posts"
                 @removePost="removePost"/>
    </div>
  </main>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {PostList, PostForm},
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
    }
  },
  methods: {
    createPost(newPost) {
      this.posts.unshift(newPost);
    },
    removePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>