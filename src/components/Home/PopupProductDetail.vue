<template>
  <div v-show="showPopup" class="container-fluit popup-product-detail">
    <div class="row p-3 popup-content bg-white overflow-auto">
      <span class="cancel-btn p-2 m-2" @click="closePopup()"
        ><i class="fa-solid fa-x"></i
      ></span>
      <div class="col-md-5">
        <div class="image-product hover-zoom">
          <!-- <div v-for="(image, index) in selectedProduct.images" :key="index"> -->
            <img class="w-100" :src="selectedProduct.thumbnail" />
          <!-- </div> -->
          <span class="p-2"
            ><i class="fa-regular fa-heart me-3 mt-3"></i>Thêm vào danh sách yêu
            thích</span
          >
        </div>
      </div>
      <div class="col-md-2 overflow-auto" style="height: 500px">
        <div
          v-for="(image, index) in selectedProduct.images"
          :key="index"
        >
          <img :src="image" class="p-1 w-100 h-auto" />
        </div>
      </div>
      <div class="col-md-5">
        <div class="row">
          <h4>{{ selectedProduct?.title ?? "" }}</h4>
          <h4>{{ formattedPrice(selectedProduct?.price) ?? "" }}</h4>
          <!-- <div class="row size-option mt-1">
            <div class="col-md-3">
              <label class="fs-6 fw-bold me-3">Size:</label>
            </div>
            <div class="">
              <div
                class="btn btn-light px-0 py-1 my-1"
                v-for="(size, index) in selectedProduct.variantSizes"
                :key="index"
                :class="{ active: selectedSize === size.filterCode }"
                @click="selectSize(size.filterCode)"
              >
                {{ size.filterCode }}
              </div>
            </div>
          </div>
          <div class="row color-option mt-1">
              <div class="col-md-3">
            <label class="fs-6 fw-bold me-2">Color:</label>
              </div>
              <div class="">
            <div
              class="btn btn-light  p-1 my-1"
              v-for="(color, index) in selectedProduct.articleColorNames"
              :key="index"
              :class="{ active: selectedColor === color }"
              @click="selectColor(color)"
            >
              {{ color }}
            </div>
              </div>
          </div> -->
          <div class="quality mt-2">
            <label class="fs-6 fw-bold me-5">Số lượng</label>
            <div class="d-inline-flex">
              <button class="btn-sp" @click="minusQty">
                <i class="fa-solid fa-minus"></i>
              </button>
              <input
                class="form-control"
                type="number"
                v-model.number="localQuantity"
                @change="updateCartQuantity"
              />
              <button class="btn-sp" @click="plusQty">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <router-link  :to="`/product/${selectedProduct.id}`">Chi tiết sản phẩm</router-link>
          <div class="multi-task mt-4">
            <button class="btn btn-add-to-cart" @click="addToCart">
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
import { mapGetters } from "vuex";
export default {
  name: "PopupProductDetail",
  props: ["selectedProduct"],
  data() {
    return {
      showPopup: true,
      localQuantity: 1,
      selectedSize: null,
      selectedColor: null,
    };
  },
  emits: ["closePopup"],

  computed: {
    ...mapGetters(["formattedPrice", "getCartItems"]),
    // quantity: {
    //   get() {
    //     const item = this.getCartItems.find(
    //       (item) => item.code=== this.selectedProduct.id
    //     );
    //     return item ? item.quantity : 1;
    //   },
    //   set(value) {
    //     this.$store.dispatch("updateLocalQuantity", {
    //       productId: this.selectedProduct.id,
    //       quantity: value,
    //     });
    //   },
    // },
  },
  methods: {
    closePopup() {
      this.$emit("closePopup"); 
    },
    plusQty() {
      this.localQuantity++;
    },
    minusQty() {
      if (this.localQuantity > 1) {
        this.localQuantity--;
      }
    },
    // selectSize(size) {
    //   this.selectedSize = size;
    //   this.$store.dispatch("updateSelectedSize", size);
    // },
    // selectColor(color) {
    //   this.selectedColor = color;
    //   this.$store.dispatch("updateSelectedColor", color);
    // },
    addToCart() {
      // if (!this.selectedSize || !this.selectedColor) {
      //   alert("Vui lòng chọn kích thước và màu sắc.");
      //   return;
      // }
      const productToAdd = {
        ...this.selectedProduct,
        // selectedColor: this.selectedColor,
        // selectedSize: this.selectedSize,
        quantity: this.localQuantity,
      };
      
      this.$store.commit("ADD_TO_CART", productToAdd);
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
  z-index: 999;
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
.active {
  background-color: #111;
  color: #fff;
}
</style>
