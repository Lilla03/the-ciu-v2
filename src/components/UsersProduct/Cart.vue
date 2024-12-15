<template>
  <div id="cart place-items-center">
    <div class="container">
      <div class="row w-100">
        <div class="col-xs-12 col-md-8 p-4 bg-white">
          <span>
            <router-link to="/" class="text-secondary">
              <i class="fa-solid fa-angle-left"></i> Quay lại mua hàng
            </router-link>
          </span>
          <h4 class="pt-3">Giỏ hàng</h4>
          <span class="fs-6 text-secondary">
            Có <span class="text-primary">{{ cartItems?.length ?? '0' }}</span> sản phẩm trong giỏ hàng
          </span>
          <EmptyStatusVue v-show="emptyStatus" />
          <div v-show="!emptyStatus">
            <input
              class="select-all checkbox m-3"
              type="checkbox"
              @click="selectAll"
              v-model="allSelected"
            />
            <span>Chọn tất cả</span>
          </div>
          
          <div id="cart-left">
            <ul class="list-unstyled">
              <li
                class="d-flex align-items-center my-3 pb-3 border-bottom"
                v-for="product in cartItems"
                :key="product.code"
              >
                <div class="mx-3" @click="selectedProduct(product)">
                  <input class="checkbox" type="checkbox" v-model="product.selected" />
                </div>
                <router-link :to="`/product/${product.id}`">
                  <img class="img-cart" :src="product?.thumbnail ?? ''" />
                </router-link>
                <div class="row w-100">
                  <div class="col-12 col-lg-4 product-info">
                    <h6>{{ product?.title ?? '' }}</h6>
                    <h6>{{ formattedPrice(product?.price ?? '') }}</h6>
                  </div>
                  <div class="col-12 col-lg-8 d-flex">
                    <div class="input-group">
                      <button class="btn-sp" @click="minusQty(product)">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <input
                        class="form-control"
                        type="number"
                        v-model.number="product.quantity"
                      />
                      <button class="btn-sp" @click="plusQty(product)">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div class="total-col">
                      <h6>{{ amountPerProduct(product) }}</h6>
                    </div>
                    <div class="remove-product ps-4" @click="removeProduct(product)">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xs-12 col-md-4 p-3 bg-white">
          <div id="cart-right">
            <div class="cart-right-title mb-4">
              <h4>Order Summary</h4>
            </div>
            <div class="cart-right-list">
              <dl class="order-cost">
                <dt>Subtotal</dt>
                <dd>{{ formattedPrice(totalAmount) }}</dd>
                <dt>Delivery</dt>
                <dd>-</dd>
                <dt><p class="total-amount">Total price:</p></dt>
                <dd>{{ formattedPrice(totalAmount) }}</dd>
              </dl>
            </div>
            <div class="order-note">
              <label for="note">Note:</label>
              <textarea
                class="note-form-control w-100 my-3"
                rows="5"
                placeholder="Ghi chú..."
              ></textarea>
            </div>
            <div class="cart-right-payment" v-show="!emptyStatus && !(totalAmount === 0)">
              <router-link to="/cart/payment" class="btn btn-dark p-2 float-end">Thanh toán</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EmptyStatusVue from './EmptyStatus.vue';

export default {
  name: "BasicCart",
  components: { EmptyStatusVue },
  methods: {
    ...mapActions(['minusQty', 'plusQty', 'removeProduct']),
    
    // Calculate the amount per product
    amountPerProduct(product) {
      return this.formattedPrice(product.quantity * (product?.price ?? ''));
    },

    // Handle product selection toggle
    selectedProduct(product) {
      product.selected = !product.selected; // Toggle selection
      this.$store.commit('SELECTED_ITEM', product); // Update Vuex
    },

    // Handle select/deselect all products
    selectAll(event) {
      const checked = event.target.checked;
      this.$store.commit('SELECT_ALL', checked); // Update Vuex with selection state
    },
  },
  computed: {
    ...mapGetters(['getCartItems', 'formattedPrice', 'selectedItems']),
    
    cartItems() {
      return this.getCartItems;
    },
    
    // Check if the cart is empty
    emptyStatus() {
      return this.getCartItems.length === 0;
    },
    
    // Handle the state of the "select all" checkbox
    allSelected: {
      get() {
        return this.cartItems.length > 0 && this.cartItems.every(product => product.selected);
      },
      set(value) {
        this.cartItems.forEach(product => {
          product.selected = value;
          this.$store.commit('SELECTED_ITEM', product); 
        });
      }
    },
    
    // Calculate the total amount of selected items
    totalAmount() {
      const selectedItems = this.cartItems.filter(product => product.selected);
      return selectedItems.reduce((total, product) => total + (product.price * product.quantity), 0);
    },
  },
};
</script>

<style lang="scss" scoped>
#cart {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  background: rgba(50, 50, 0, 0.1);
}
.product-info {
  padding-left: 1.5rem;
  &:hover {
    box-shadow: unset;
  }
}
.checkbox {
  scale: 1.5;
}
.img-cart {
  height: 5rem;
  width: 5rem;
  object-fit: cover;
}
.form-control {
  height: fit-content;
  max-width: 4rem;
  text-align: center;
}
label {
  width: 30% !important;
}
.btn-sp {
  border: none;
  padding: 10px;
  height: fit-content;
  background-color: #fff;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.order-cost {
  all: unset;
  display: flex;
  flex-wrap: wrap;
}
dt {
  flex-basis: 50%;
}
dd {
  text-align: end;
  flex-basis: 50%;
}

.img-product {
  margin-right: 10px;
}
.input-group {
  display: flex;
  align-items: center;
}
.total-col {
  display: flex;
  align-items: center;
}
.note-form-control {
  border: 1px solid #a3a3a3;
  text-indent: 10px;
}
.order-note label {
  font-weight: 600;
}
.remove-product {
  display: flex;
  align-items: center;
}
.remove-product:hover {
  color: #c96;
}
</style>
