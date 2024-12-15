import axios from "axios";
const api = {
  getProducts() {
    return axios.get("https://dummyjson.com/products");
  },
 
  getProductDetail(productID){
    return axios.get(`https://dummyjson.com/products/${productID}`);
  },
  getProductsbycatagory(cartagoryName){
    return axios.get(`https://dummyjson.com/products/category/${cartagoryName}`);
  },
  getProductCategoryList() {
    return axios.get("https://dummyjson.com/products/category-list")
  },

  
};


export default api;


