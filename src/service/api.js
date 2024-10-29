
import axios from 'axios'
const api = {
    getProducts() {
        return axios.get('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', {
            headers: {
                'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
                'x-rapidapi-key': '9e4e2d9d79msh1731554a8d12a16p101d5djsn7d638bdafd64' 
            }
        });
    }
};

export default api;

// fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
//         'x-rapidapi-key': '9e4e2d9d79msh1731554a8d12a16p101d5djsn7d638bdafd64' // Thay thế bằng khóa API của bạn
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));


