import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    // cart: JSON.parse(localStorage.getItem("cart")) || {},
    cart: (() => {
      localStorage.removeItem("cart");
      const storedCart = localStorage.getItem("cart");
      try {
        console.log("Giá trị trong localStorage:", JSON.parse(storedCart));
        return storedCart ? JSON.parse(storedCart) : []; // Trả về mảng rỗng nếu không có dữ liệu
      } catch (error) {
        console.error("Lỗi khi phân tích giỏ hàng từ localStorage:", error);
        return []; // Trả về mảng rỗng nếu có lỗi
      }
    })(),
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

    subtotal: 0,
    total: 0,
  },
  getters: {
    listProducts: (state) => state.listProducts,
    getCartItems: (state) => state.cart,
    count: (state) => state.count,

    formattedPrice: () =>  {
      return (value) => {
        let formatter = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
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
    addToCart(state, product) {
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
    removeProduct(state, product) {
      state.cart = state.cart.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Cập nhật localStorage
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
    setPrice(state, value) {
      state.price = value;
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
    selectProduct({ commit }, product) {
      commit("setSelectedProduct", product);
    },
    updateSelectedSize({ commit }, size) {
      commit("setSelectedSize", size);
    },
    updateSelectedColor({ commit }, color) {
      commit("setSelectedColor", color);
    },
  },
});

export default store;
