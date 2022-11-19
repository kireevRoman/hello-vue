<template>
  <div class="post-list">
    <post-item v-for="post in posts"
               :key="`post-${post.id}`"
               :post="post"
               @removePost="$emit('removePost', $event)"/>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {PostItem},
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