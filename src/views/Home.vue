<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in listInfo" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
import usePost from "../composables/usePost.js";
import useResource from "../composables/useResource.js";
const { listInfo, leerTodos } = useResource("posts");
leerTodos();
</script>