import { createStore } from "vuex";
import api from "@/utils/api";
import axios from "axios";

const store = createStore({
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    selectedItems: [],
    selectedProduct: null,
    selectedSize: null,
    selectedColor: null,
    listProducts: [],
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  getters: {
    token: (state) => state.token || localStorage.getItem("token"), 
    user: (state) => state.user || JSON.parse(localStorage.getItem("user")),
    isLoggedIn: (state) => !!state.token,
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
      state.cart.forEach(item => {
        sum += item.quantity * item.price;
      });
      return sum;
    },

    // Calculate the total amount based on selected items
    totalAmount(state) {
      const selectedItems = state.cart.filter(item => item.selected);
      const sum = selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      return sum;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    CLEAR_TOKEN(state) {
      state.token = null;
    },
    SET_LIST_PRODUCTS(state, products) {
      state.listProducts = products;
    },
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...product });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    ADD_TO_WISHLIST(state, product) {
      const existingItem = state.wishlist.find(item => item.id === product.id);
      if (!existingItem) {
        state.wishlist.push({ ...product });
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      } else {
        alert('Product already in wishlist');
      }
    },
    REMOVE_PRODUCT(state, product) {
      state.cart = state.cart.filter(item => item.id !== product.id);
      state.selectedItems = state.selectedItems.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("selectedItems", JSON.stringify(state.selectedItems));
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
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    SELECTED_ITEM(state, product) {
      const index = state.selectedItems.findIndex(item => item.id === product.id);
      if (index === -1) {
        state.selectedItems.push(product);
      } else {
        state.selectedItems = state.selectedItems.filter(item => item.id !== product.id);
      }

      const productIndex = state.cart.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        state.cart[productIndex].selected = product.selected;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    SELECT_ALL(state, selected) {
      state.cart.forEach(product => {
        product.selected = selected;
        const index = state.selectedItems.findIndex(item => item.id === product.id);
        if (selected && index === -1) {
          state.selectedItems.push(product);
        } else if (!selected && index !== -1) {
          state.selectedItems = state.selectedItems.filter(item => item.id !== product.id);
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    CLEAR_SELECTED_ITEMS(state) {
      state.selectedItems = [];
    },

    minusQty(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    plusQty(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      return axios.post('https://dummyjson.com/auth/login', { username, password })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);
            commit("SET_TOKEN", response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data));
            commit("SET_USER", response.data);
            return response;
          } else {
            throw new Error("Invalid credentials");
          }
        }).catch(error => {
          console.error("Login error:", error);
        });
    },
    logout({ commit }) {
      commit("CLEAR_TOKEN");
      commit("SET_USER", null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    fetchData({ commit }) {
      return api.getProducts()
        .then(response => {
          commit("SET_LIST_PRODUCTS", response.data.products);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    },

    selectProduct({ commit }, product) {
      commit("SET_SELECTED_PRODUCT", product);
    },
    removeProduct({ commit }, product) {
      commit("REMOVE_PRODUCT", product);
    },
    minusQty({ commit }, product) {
      commit("minusQty", product);
    },
    plusQty({ commit }, product) {
      commit("plusQty", product);
    },
    selectItem({ commit }, product) {
      commit("SELECTED_ITEM", product);
    },
    selectAll({ commit }, selected) {
      commit("SELECT_ALL", selected);
    },
  },
});

export default store;
