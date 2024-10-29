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
          item.code == product.code
      );
      if (ExistingItem) {
        ExistingItem.quantity++;
      } else {
        state.cart.push({ ...product});
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REMOVE_PRODUCT(state, product) {
      state.cart = state.cart.filter(item => item.code !== product.code);
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
        console.log(response.data.results[0]);
        commit('SET_LIST_PRODUCTS', response.data.results);
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
