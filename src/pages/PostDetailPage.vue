<template>
  <div class="post-detail">
    <template v-if="post">
      <div class="post-detail__header">
        <a class="post-detail__header-link" href="#" @click="$router.go(-1)">❬ Назад к постам</a>
      </div>

      <div class="post-detail__body">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>

      <div class="post-detail__tags">
        <p class="post-detail__tags-item" v-for="tag in post.tags">
          {{ tag }}
        </p>
      </div>
    </template>

    <div v-else>Loading...</div>

  </div>

</template>

<script>
import {HTTP} from "@/api/http-config";

export default {
  name: "PostDetailPage",
  data() {
    return {
      isLoadingPost: false,
      post: null
    }
  },
  mounted() {
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      const postId = this.$route.params.id

      this.isLoadingPost = true;
      try {
        const response = await HTTP.get(`posts/${postId}`);
        this.post = response.data;
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoadingPost = false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.post-detail {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #FFFFFF;
  border-radius: $defaultRadius;

  &__header {
    position: relative;
    background-size: cover;
    background: url('https://unsplash.it/1440/800') center;
    border-radius: $defaultRadius $defaultRadius 0 0;
    height: 300px;

    &-link {
      position: absolute;
      top: 16px;
      left: 30px;
      font-size: 24px;
      font-weight: 500;
      color: #FFFFFF;
      text-decoration: none;
    }
  }

  &__body {
    padding: 30px;

    h1 {
      font-size: 24px;
      line-height: 150%;
      margin-bottom: 12px;
    }

    p {
      font-size: 18px;
      line-height: 150%;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;

    &-item {
      background: blueviolet;
      color: #FFFFFF;
      font-size: 14px;
      border-radius: 40px;
      padding: 6px 12px;
    }

    > *:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>