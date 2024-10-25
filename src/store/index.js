import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    selectedProduct: null,
    selectedSize: null,
    selectedColor: null,
    listProducts: [
      {
        id: 1,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
          { color: "Black", url: require("@/assets/images/pro-2.jpg") },
          { color: "Red", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 2,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
          { color: "Black", url: require("@/assets/images/pro-2.jpg") },
          { color: "Red", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 3,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
          { color: "Black", url: require("@/assets/images/pro-2.jpg") },
          { color: "Red", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 4,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 5,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Black", url: require("@/assets/images/pro-2.jpg") },
          { color: "Red", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 6,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
          { color: "Black", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 7,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
      {
        id: 8,
        type: "Áo",
        name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
        price: 150000,
        product_desc:
          "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
        colorChoice: [
          {
            color: "Creamy white",
            url: require("@/assets/images/pro-2.jpg"),
          },
          { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
          { color: "Black", url: require("@/assets/images/pro-2.jpg") },
          { color: "Red", url: require("@/assets/images/pro-2.jpg") },
        ],
        quantity: "1",
        size: ["S", "M", "L"],
        image: require("@/assets/images/pro-2.jpg"),
      },
    ],
  },
  getters: {
    listProducts: (state) => state.listProducts,
    cart: (state) => state.cart,
    count: (state) => state.count,
    getSelectedProduct : (state) => state.selectedProduct,
    getSelectedSize: (state) => state.selectedSize,
    getSelectedColor: (state) => state.selectedColor,
  },
  mutations: {
    addToCart(state, product) {
      const ExistingItem = state.cart.find((item) => 
        item.id == product.id &&
        item.size == product.size &&
        item.color == product.color
    );
      if(ExistingItem) {
        ExistingItem.quantity ++;
      }else {
        state.cart.push({ ...product, quantity: product.quantity });
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    setSelectedSize(state, size) {
      state.selectedSize = size;
    },
    setSelectedColor(state, color) {
      state.selectedColor = color;
    },
    minusQty(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    plusQty(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      }
    },
  },
  actions: {
    selectProduct({commit}, product) {
      commit('setSelectedProduct', product)
    },
    updateSelectedSize({ commit }, size) {
      commit('setSelectedSize', size);
    },
    updateSelectedColor({ commit }, color) {
      commit('setSelectedColor', color);
    },
  }
});

export default store;
