<template>
<div class="container">
    <span ><router-link to="/" class='text-secondary ms-5 '><i class="fa-solid fa-angle-left"></i> Quay lại mua hàng </router-link> </span>
    <h4 class="p-3">Sản phẩm yêu thích</h4>
      <span class="fs-6 text-secondary">Có <span class="text-primary">{{wishlistItems?.length??'0'}}</span> sản phẩm trong danh sách yêu thích</span>
          <EmptyStatusVue v-show="emptyStatus"></EmptyStatusVue>
    <ProductCart v-bind:products="getWishListItems" />
</div>
</template>

<script>
import ProductCart from "@/components/Products/Product-card.vue";
import { mapGetters } from 'vuex'
import EmptyStatusVue from './EmptyStatus.vue';
export default {
    components: {
        ProductCart,
        EmptyStatusVue,
    },
     computed: {
      ...mapGetters(['getWishListItems']),
      wishlistItems() {
        return this.getWishListItems;
      },
      emptyStatus() {
        return this.getWishListItems.length === 0;
      },
    }
    
}
</script>

<style>

</style>