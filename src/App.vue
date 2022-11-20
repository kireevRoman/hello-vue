<template>
  <main class="main-container">
    <div class="content">
      <app-dialog v-model:active="dialogVisible">
        <post-form @createPost="createPost"/>
      </app-dialog>

      <div class="action-panel">
        <app-input class="action-panel__search"
                   type="search"
                   v-model.trim="search"
                   placeholder="Поиск по названию"/>

        <app-button @click="dialogVisible = true">Добавить пост</app-button>
      </div>

      <post-list v-if="!isLoadingPosts" :posts="getPosts"
                 @removePost="removePost"/>
      <div v-else>Loading...</div>
    </div>
  </main>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {HTTP} from "@/api/http-config";

export default {
  components: {PostList, PostForm},

  data() {
    return {
      isLoadingPosts: false,
      search: '',
      dialogVisible: false,
      posts: [],
    }
  },

  mounted() {
    this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      this.isLoadingPosts = true;
      try {
        const response = await HTTP.get('posts', {params: {limit: 10}});
        this.posts = response.data.posts
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoadingPosts = false;
      }

    },
    createPost(newPost) {
      this.posts.unshift(newPost);
      this.dialogVisible = false;
    },
    removePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId)
    }
  },

  computed: {
    getPosts() {
      return this.posts.filter(post => post.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.action-panel {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  padding: 16px;
  border-radius: $defaultRadius;
  background: #FFFFFF;

  &__search {
    flex: 1;
    margin-right: 20px;
  }

}
</style>