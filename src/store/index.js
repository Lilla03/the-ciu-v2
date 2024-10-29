import { createStore } from "vuex";
import api from "@/service/api";

const store = createStore({
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    selectedItems: [],

    selectedProduct: null,
    selectedSize: null,
    selectedColor: null,
    listProducts: [],
    // listProducts: [
    //   {
    //     id: 1,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Black", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Red", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 2,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Black", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Red", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 3,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Black", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Red", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 4,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 5,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Black", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Red", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 6,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Black", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 7,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    //   {
    //     id: 8,
    //     type: "Áo",
    //     name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
    //     price: 150000,
    //     product_desc:
    //       "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
    //     colorChoice: [
    //       {
    //         color: "Creamy white",
    //         url: require("@/assets/images/pro-2.jpg"),
    //       },
    //       { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Black", url: require("@/assets/images/pro-2.jpg") },
    //       { color: "Red", url: require("@/assets/images/pro-2.jpg") },
    //     ],
    //     quantity: "1",
    //     size: ["S", "M", "L"],
    //     image: require("@/assets/images/pro-2.jpg"),
    //   },
    // ],

    subtotal: 0,
    total: 0,
  },
  getters: {
    listProducts: (state) => state.listProducts,
    getCartItems: (state) => state.cart,
    getWishListItems: (state) => state.wishlist,

    getCartCount: (state) => state.cart.length,
    getWishListCount: (state) => state.wishlist.length,

    selectedSize: (state) => state.selectedSize,
    selectedColor: (state) => state.selectedColor,
    selectedItems: (state) => state.selectedItems,

    formattedPrice: () =>  {  
      return (value) => {
        let formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        return formatter.format(value);
      }

    },

    getSubtotal(state) {
        let sum = 0;
        state.cart.map(item => {
          sum += item.quantity * item.price;
        })
        return sum;
    }
  },
  mutations: {
    SET_LIST_PRODUCTS(state, products) {
      state.listProducts = products;
    },
    ADD_TO_CART(state, product) {
      const ExistingItem = state.cart.find(
        (item) =>
          item.id == product.id &&
          item.size == product.size &&
          item.color == product.color
      );
      if (ExistingItem) {
        ExistingItem.quantity++;
      } else {
        state.cart.push({ ...product});
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REMOVE_PRODUCT(state, product) {
      state.cart = state.cart.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Cập nhật localStorage
    },
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product;
    },
    SET_SELECTED_SIZE(state, size) {
      state.selectedSize = size;
    },
    SET_SELECTED_COLOR(state, color) {
      state.selectedColor = color;
    },
    SET_LOCAL_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    SELECTED_ITEM(state, product) {
      if(!state.selectedItems.includes(product)) {
        state.selectedItems.push(product);
      }else {
        state.selectedItems = state.selectedItems.filter(item => item != product)
      }
    },

    CLEAR_SELECTED_ITEMS  (state) {
      state.selectedItems = [];
    },

      minusQty(state, product) {
        const item = state.cart.find((item) => item.id === product.id);
        if (item && item.quantity > 1) {
          item.quantity--;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      },
      plusQty(state, product) {
        const item = state.cart.find((item) => item.id === product.id);
        if (item) {
          item.quantity++;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      },
  },
  actions: {
    async fetchData({commit}) {
      try{
        const response = await api.getProducts();

        commit('SET_LIST_PRODUCTS', response.data.results);
        console.log(this.listProducts)
      }catch(error) {
        console.log('Error fetching data: ', error)
      }
    },
    selectProduct({ commit }, product) {
      commit("SET_SELECTED_PRODUCT", product);
    },
    removeProduct({commit}, product) {
      commit("REMOVE_PRODUCT", product)
    },
    updateSelectedSize({ commit }, size) {
      commit("SET_SELECTED_SIZE", size);
    },
    updateSelectedColor({ commit }, color) {
      commit("SET_SELECTED_COLOR", color);
    },
    updateLocalQuantity({ commit }, { productId, quantity }) {
      commit('SET_LOCAL_QUANTITY', { productId, quantity });
    },
    minusQty({ commit }, product) {
      commit('minusQty', product);
    },
    plusQty({ commit }, product) {
      commit('plusQty', product);
    },
  },
});

export default store;
