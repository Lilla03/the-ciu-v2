<template>
<div class="container">
    <span ><router-link to="/" class='text-secondary ms-5 '><i class="fa-solid fa-angle-left"></i> Quay lại mua hàng </router-link> </span>
    <h4 class="p-3">Sản phẩm yêu thích</h4>
    <ProductCart v-bind:products="getWishListItems" />
</div>
</template>

<script>
import ProductCart from "@/components/Products/Product-card.vue";
import { mapGetters } from 'vuex'
export default {
    components: {
        ProductCart,
    },
    // data() {
    //     return {
    //       wishlist: [],
    //     }
    // },
    // mounted() {
    //     this.getWishList();
    // },
    // methods: {
    // getWishList() {
    //       const my_wishlist = localStorage.getItem('wishlist');
    //       this.wishlist = my_wishlist ? JSON.parse(my_wishlist) : [];
    //   },
    // },
     computed: {
      ...mapGetters(['getWishListItems'])
    }
    
}
</script>

<style>

</style>