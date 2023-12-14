import { ref } from "vue";

export default function usePost() {
  const posts = ref([]);
  const post = ref(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/";

  const llegirPosts = async () => {
    const response = await fetch(baseUrl + "posts");
    posts.value = await response.json();
  };

  const llegirPost = async (id) => {
    const response = await fetch(baseUrl + "posts/" + id);
    post.value = await response.json();
    console.log(post.value);
  };

  return { posts, llegirPosts, post, llegirPost };
}