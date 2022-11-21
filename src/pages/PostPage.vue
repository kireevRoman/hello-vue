<template>
  <div class="posts">
    <app-dialog v-model:active="dialogVisible">
      <post-form @createPost="createPost($event); dialogVisible = false"/>
    </app-dialog>

    <div class="action-panel">
      <app-input class="action-panel__search"
                 type="search"
                 :model-value="search"
                 @update:model-value="setSearch"
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
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'PostPage',
  components: {PostList, PostForm},
  data() {
    return {
      dialogVisible: false,
    }
  },

  mounted() {
    this.fetchPosts();
  },

  methods: {
    ...mapActions("posts", ["createPost", "fetchPosts", "removePost", "loadMorePosts"]),
    ...mapMutations({
      setSearch: "posts/setSearch",
    }),
  },

  computed: {
    ...mapState({
      isLoadingPosts: state => state.posts.isLoadingPosts,
      isLoadingLoadMorePosts: state => state.posts.isLoadingLoadMorePosts,
      search: state => state.posts.search,
      totalPosts: state => state.posts.totalPosts,
    }),
    ...mapGetters({
      getPosts: "posts/getPosts",
    })
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