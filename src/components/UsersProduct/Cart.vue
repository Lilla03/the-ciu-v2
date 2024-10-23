<template>
  <div id="cart">
    <div class="container">
      <div class="row w-100">
        <div class="col-xs-12 col-md-8 p-4 bg-white">
          <span
            ><router-link to="/" class="text-secondary"
              ><i class="fa-solid fa-angle-left"></i> Quay lại mua hàng
            </router-link>
          </span>

          <h4 class="p-3">Giỏ hàng</h4>
          <EmptyStatusVue v-show="emptyStatus"></EmptyStatusVue>
          <div v-show="!emptyStatus">
            <input
              class="select-all checkbox mx-3"
              name="select-all"
              type="checkbox"
              @click="selectAll"
            /><span>Chọn tất cả</span>
          </div>
          
          <div id="cart-left">
            <ul class="list-unstyled">
              {{
                getCart()
              }}

              <li
                class="d-flex align-items-center my-3 pb-3 border-bottom"
                v-for="product in cart"
                :key="product.id"
              >
                <div class="check" @click="selectedProduct(product)">
                  <input class="m-3 checkbox" type="checkbox"   v-model="product.selected"/>
                </div>

                <img class="img-cart" :src="product.image" />
                <div class="row w-100">
                  <div class="col-12 col-lg-6 product-info">
                    <h6>{{ product.name }}</h6>
                    <span class="product-price">{{
                      formatPrice(product.price)
                    }}</span>

                    <div class="choice row">
                      <div
                        class="select-size col d-flex justify-content-between"
                      >
                        <lable class="col-6">Size:</lable>
                        <select class="custom-select col-6">
                          <option v-for="size in product.size" :key="size">
                            {{ size }}
                          </option>
                        </select>
                      </div>
                      <div class="w-100"></div>
                      <div
                        class="select-color mt-2 col d-flex justify-content-between"
                      >
                        <lable class="col-6">Màu sắc:</lable>
                        <select class="custom-select col-6">
                          <option
                            v-for="colorChoice in product.colorChoice"
                            :key="colorChoice.color"
                          >
                            {{ colorChoice.color }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 d-flex">
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
                      <h5>{{ amountPerProduct(product) }}</h5>
                    </div>
                    <div
                      class="remove-product ps-4"
                      @click="removeProduct(product)"
                    >
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
                <dd>{{ totalAmount }}</dd>
                <dt>Delivery</dt>
                <dd>-</dd>
                <dt><p class="total-amount">Total price:</p></dt>
                <dd>{{ totalAmount }}</dd>
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
            <div class="cart-right-payment" v-show="!emptyStatus">
              <router-link to="/cart/payment" class="btn btn-dark p-2 float-end"
                >Thanh toán</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import EmptyStatusVue from './EmptyStatus.vue';
export default {
  name: "BasicCart",
  components: {EmptyStatusVue,},
  setup() {
    const emptyStatus = ref(false);
    const selectProduct = ref({});
    const selectedProductList = ref([]);
    return { emptyStatus, selectProduct, selectedProductList};
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    formatPrice(value) {
      let formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(value);
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    minusQty(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
      this.updateCart();
    },
    plusQty(product) {
      product.quantity++;
      this.updateCart();
    },
    getCart() {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      if (this.cart.length === 0) {
        this.emptyStatus = true;
      }
    },
    removeProduct(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    amountPerProduct(product) {
      return this.formatPrice(product.quantity * product.price);
    },
    selectAll(event) {
      const checked = event.target.checked;
      this.$el.querySelectorAll(".check input").forEach((checkbox) => {
        checkbox.checked = checked;
      });
    },
    selectedProduct(product) {
      this.selectProduct = product;
      if (!this.selectedProductList.includes(product)) {
         this.selectedProductList.push(product);
      } 
      console.log(this.selectedProductList)
    },
  },
    computed: {
  totalPerProduct() {
    return this.selectedProductList.map((product) => product.quantity * product.price);
  },
  totalAmount() {
    const sum = this.selectedProductList.reduce((total, product) => product.quantity * product.price , 0);
    return this.formatPrice(sum);
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
  scale: 1.6;
}
.img-cart {
  height: 5rem;
  width: 5rem;
  object-fit: cover;
}
.form-control {
  height: fit-content;
  max-width: 5rem;
  text-align: center;
}
lable {
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
}
.order-cost {
  display: flex;
  flex-wrap: wrap;
  grid-row-start: 2;
  grid-row-end: auto;
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
