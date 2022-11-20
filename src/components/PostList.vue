<template>
  <div class="post-list">
    <template v-if="posts.length > 0">
      <transition-group name="list">
        <post-item v-for="post in posts"
                   :key="`post-${post.id}`"
                   :post="post"
                   @removePost="$emit('removePost', $event)"/>
      </transition-group>
    </template>

    <app-empty v-else title="Посты не найдены или отсутствуют :("/>

  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import AppEmpty from "@/components/UI/AppEmpty";

export default {
  name: "PostList",
  components: {AppEmpty, PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => []
    }
  },

}
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>