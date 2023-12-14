import { ref } from "vue";

export default function useResource(request = "posts") {
    const listInfo = ref([]);
    const info = ref(null);
    const baseUrl = "https://jsonplaceholder.typicode.com/";

    const leerTodos = async () => {
        const response = await fetch(baseUrl + request);
        listInfo.value = await response.json();
    };

    const leerUno = async (id) => {
        const response = await fetch(baseUrl + `${request}/` + id);
        info.value = await response.json();
        console.log(info.value);
    };

    return { listInfo, leerTodos, info, leerUno };
}