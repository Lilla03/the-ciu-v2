<template>
  <div v-show="showPopup" class="container-fluit popup-product-detail">
    <div class="row p-3 popup-content bg-white overflow-auto">
      <span class="cancel-btn p-2 m-2" @click="closePopup()"
        ><i class="fa-solid fa-x"></i
      ></span>
      <div class="col-md-5">
        <div class="image-product hover-zoom">
          <img class="w-100" :src="selectedProduct.image" />
          <span class="p-2"
            ><i class="fa-regular fa-heart me-3 mt-3"></i>Thêm vào danh sách yêu
            thích</span
          >
        </div>
      </div>
      <div class="col-md-2">
        <div
          v-for="colorChoice in selectedProduct.colorChoice"
          :key="colorChoice"
        >
          <img class="color-choice w-100 px-3 py-1" :src="colorChoice.url" />
        </div>
      </div>
      <div class="col-md-5">
        <div class="row">
          <h4>{{ selectedProduct.name }}</h4>
          <p>{{ selectedProduct.product_desc }}</p>
          <h4>{{ formatPrice(selectedProduct.price) }}</h4>
          <div class="size-option mt-3">
            <label class="fs-6 fw-bold me-3">Size:</label>
            <div
              class="btn btn-light"
              v-for="size in selectedProduct.size"
              :key="size"
              :class="{ active: selectedSize === size }"
              @click="selectSize(size)"
            >
              {{ size }}
            </div>
          </div>
          <div class="color-option mt-3">
            <label class="fs-6 fw-bold me-2">Color:</label>
            <div
              class="btn btn-light"
              v-for="colorChoice in selectedProduct.colorChoice"
              :key="colorChoice.color"
              :class="{ active: selectedColor === colorChoice.color }"
              @click="selectColor(colorChoice.color)"
            >
              {{ colorChoice.color }}
            </div>
          </div>
          <div class="quality mt-2">
            <label class="fs-6 fw-bold me-5">Số lượng</label>
            <div class="d-inline-flex">
              <button class="btn-sp" @click="minusQty(selectedProduct)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <input
                class="form-control"
                type="number"
                v-model.number="localQuantity"
              />
              <button class="btn-sp" @click="plusQty(selectedProduct)">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="multi-task mt-4">
            <button
              class="btn btn-add-to-cart"
              @click="addToCart"
            >
              Thêm vào giỏ hàng
            </button>
            <router-link
              @click="addToCart"
              :style="{ color: 'white' }"
              to="/cart"
              ><button class="btn btn-buy-now btn-dark">
                Mua ngay
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupProductDetail",
  props: ["selectedProduct"],
  data() {
    return {
      showPopup: true, // Đảm bảo rằng showPopup được quản lý bên trong component con
      localQuantity: 1,
      selectedSize: null, // Thêm biến để lưu kích thước đã chọn
      selectedColor: null, // Thêm biến để lưu màu sắc đã chọn
    };
  },
  emits: ["closePopup"],
  methods: {
    closePopup() {
      this.$emit("closePopup"); // Phát ra sự kiện đóng popup cho component cha
    },
    formatPrice(value) {
      let formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(value);
    },
    minusQty(product) {
      this.$store.commit("minusQty", product);
    },
    plusQty(product) {
      this.$store.commit("plusQty", product);
      console.log(product.quantity);
    },
    getCart() {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    },
    // addToCart(product) {
    //   let cart = this.getCart();
    //   const existingProductIndex = cart.findIndex(
    //     (item) => item.id === product.id
    //   );
    //   if (existingProductIndex > -1) {
    //     alert("Sản phẩm đã được thêm vào giỏ hàng");
    //     cart[existingProductIndex].quantity =
    //       (cart[existingProductIndex].quantity || 1) + 1;
    //   } else {
    //     product.quantity = 1;
    //     cart.push(product);
    //   }
    //   localStorage.setItem("cart", JSON.stringify(cart));
    // },
    // selectedSize(size) {
    //   this.product.size = size;
    // },
    // selectedColor(color){
    //   this.product.color = color;
    // }
    selectSize(size) {
    this.selectedSize = size; // Lưu kích thước đã chọn
    this.$store.dispatch("updateSelectedSize", size); // Cập nhật vào store
  },
  selectColor(color) {
    this.selectedColor = color; // Lưu màu sắc đã chọn
    this.$store.dispatch("updateSelectedColor", color); // Cập nhật vào store
  },
  addToCart() {
    if (!this.selectedSize || !this.selectedColor) {
      alert("Vui lòng chọn kích thước và màu sắc.");
      return;
    }

    const productToAdd = {
      id: this.selectedProduct.id,
      name: this.selectedProduct.name,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: this.localQuantity,
      price: this.selectedProduct.price,
    };

    this.$store.commit("addToCart", productToAdd);
    alert("Sản phẩm đã được thêm vào giỏ hàng.");
  },
  },
 
};
</script>

<style lang="scss" scoped>
.popup-product-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  .popup-content {
    margin: 4rem 8rem;
    max-height: 100dvh;
    position: relative;
  }
  p {
    font-size: 1.2rem;
  }
  .size-option .btn {
    width: 3.5rem;
    margin: 0 0.5rem;
  }
  .color-option .btn {
    width: fit-content;
    margin: 0 0.5rem;
  }
  .form-control {
    height: fit-content;
    max-width: 5rem;
    text-align: center;
  }
  .btn-sp {
    border: none;
    padding: 10px;
    height: fit-content;
    background-color: #fff;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .multi-task .btn {
    border: 1px #555 solid;
    margin-right: 1rem;
    font-size: 1rem;
  }
}
.cancel-btn {
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 2rem;
  height: 2rem;
  &:hover {
    background-color: rgba(229, 229, 229, 0.8);
    border-radius: 50%;
  }
}
</style>
