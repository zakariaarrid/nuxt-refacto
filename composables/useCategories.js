import { ref } from 'vue'
import axios from 'axios'
export default function useCategories() {
    const categories = ref({})

    const getCategories = async () => {        
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(response => {
                categories.value = response.data.data;
                console.log(categories.value)
        })
    }

    return { categories, getCategories }
}
