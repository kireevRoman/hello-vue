<template>
  <main class="main-container">
    <div class="content">
      <app-dialog v-model:active="dialogVisible">
        <post-form @createPost="createPost"/>
      </app-dialog>

      <div class="action-panel">
        <app-input class="action-panel__search"
                   type="search"
                   v-model="search"
                   placeholder="Поиск по названию"/>

        <app-button @click="dialogVisible = true">Добавить пост</app-button>
      </div>

      <post-list :posts="getPosts"
                 @removePost="removePost"/>
    </div>
  </main>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import AppDialog from "@/components/UI/AppDialog";
import AppInput from "@/components/UI/AppInput";

export default {
  components: {AppInput, AppDialog, PostList, PostForm},
  data() {
    return {
      search: '',
      dialogVisible: false,
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

  &__search{
    flex: 1;
    margin-right: 20px;
  }

}
</style>