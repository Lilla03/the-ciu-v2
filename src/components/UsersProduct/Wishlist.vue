<template>
<div class="container">

    <span ><router-link to="/" class='text-secondary ms-5 '><i class="fa-solid fa-angle-left"></i> Quay lại mua hàng </router-link> </span>
    <h4 class="p-3">Sản phẩm yêu thích</h4>
        {{getWishList()}}   
    <Products v-bind:products="wishlist" />
</div>
</template>

<script>
import Products from '@/components/Products/Product-card.vue'
export default {
    components: {
        Products,
    },
    data() {
        return {
          wishlist: [],
        }
    },
    mounted() {
        this.getWishList();
    },
    methods: {
    getWishList() {
          const my_wishlist = localStorage.getItem('wishlist');
          this.wishlist = my_wishlist ? JSON.parse(my_wishlist) : [];
      },
    }
    
}
</script>

<style>

</style>