<template>
  <div class="text-center">
    <div class="container my-3">
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 my-3"
          v-for="product in products"
          :key="product.id"
        >
          <div class="product-info">
            <figure class="border-bottom">
              <div class="hover-img overflow-hidden">
                <div v-for="(image, index) in product.images" :key="index">
                  <img class="w-100" :src="image.baseUrl" /> <!-- Sử dụng baseUrl để hiển thị ảnh -->
                </div>
              </div>

              <div class="product-action">
                <div class="add-to-wishlist" @click="addToWishList(product)">
                  <span class="add-wishlish-action"
                    ><i class="fa-regular fa-heart"></i
                  ></span>
                  </div>
                  <div @click="addToCart(product)" class="add-to-cart py-2">
                  <i class="fa-solid fa-cart-plus me-2"></i>thêm vào giỏ hàng
                </div>
                <slot />
              </div>
            </figure>

            <div class="product-type">
              {{ product.categoryName }}
            </div>
            <div class="product-name">
              <div class="text-truncate px-3">
                <router-link :to="`/product/${product.id}`">
                  {{ product.name }}
                </router-link>
              </div>
            </div>
            <div class="product-price fs-5">
              {{ formattedPrice(product.price.value) }}
            </div>
            <div class=" row ms-1 py-3">
              <div class="d-flex flex-row  overflow-auto" >
                <div v-for="(image, index) in product.allArticleBaseImages" :key="index">
                  <img :src="image" style="max-width: 50px; height: 50px;" class="p-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
 props: {
    products: {
      type: Array,
      required: true,
    },
 },
 computed: {
    ...mapGetters(['formattedPrice'])
 },
  methods: {
    ...mapActions(['selectProduct']),

    getCart() {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    },

    addToCart(product) {
      this.$emit("addToCart", product);
    },
    getWishList() {
      const wishlist = localStorage.getItem("wishlist");
      return wishlist ? JSON.parse(wishlist) : [];
    },

    addToWishList(product) {
      let wishlist = this.getWishList();
      const existingProductIndex = wishlist.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex > -1) {
        alert("Sản phẩm đã được thêm vào mục yêu thích");
      } else {
        product.quantity = 1;
        wishlist.push(product);
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },
  },
};
</script>
<style lang="scss" scoped>
.color-choice {
  width: 40px;
  height: 40px;
}
.product-info figure .hover-img img{
  -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
  
}
.product-info figure:hover .hover-img img{
  -webkit-transform: scale(1.3);
	transform: scale(1.3);
}
.add-to-cart {
  cursor: pointer;
}
</style>
