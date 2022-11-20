<template>
  <div class="posts">
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

    <template v-if="!isLoadingPosts">
      <post-list :posts="getPosts"
                 @removePost="removePost"/>

      <app-load-more class="posts__load-more"
                     title="Загружено"
                     :current="getPosts.length"
                     :total="totalPosts"
                     :loading="isLoadingLoadMorePosts"
                     @nextPosts="loadMorePosts"/>

    </template>

    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {HTTP} from "@/api/http-config";


const LIMIT = 30;
export default {
  name: 'PostPage',
  components: {PostList, PostForm},
  data() {
    return {
      isLoadingPosts: false,
      isLoadingLoadMorePosts: false,
      search: '',
      dialogVisible: false,
      posts: [],
      totalPosts: 0,
      paramsQuery: {
        limit: LIMIT,
        skip: 0
      }
    }
  },

  mounted() {
    this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      this.isLoadingPosts = true;
      try {
        const response = await HTTP.get('posts', {params: this.paramsQuery});
        this.posts = [...this.posts, ...response.data.posts];
        this.totalPosts = response.data.total;
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoadingPosts = false;
      }
    },
    async loadMorePosts() {
      this.paramsQuery = {...this.paramsQuery, skip: this.paramsQuery.skip + LIMIT}
      this.isLoadingLoadMorePosts = true;
      try {
        const response = await HTTP.get('posts', {params: this.paramsQuery});
        this.posts = [...this.posts, ...response.data.posts];
        this.totalPosts = response.data.total;
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoadingLoadMorePosts = false;
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

.posts {
  display: flex;
  flex-direction: column;
}

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

.posts__load-more {
  margin: 0 auto;
}
</style>