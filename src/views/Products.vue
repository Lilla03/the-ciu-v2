<template>
    <div class="border-bottom m-0 ">
      <div class="container breadcrumb my-0">
          <ol class="d-inline-flex m-0 p-0">
              <li class="ms-3 py-3 text-secondary"><router-link to="/">Trang Chủ</router-link></li>
              <li class="ms-3 py-3 text-secondary"><router-link to="/product" >Danh sách sản phẩm</router-link></li>
          </ol>
      </div>
  </div>  
  <Toolbox/>
    <products v-bind:products="products" />
</template>

<script>
import products from '@/components/Products/Product-card.vue'
import Toolbox from '@/components/Products/Tool_box.vue'

export default {
  props: ['product'],
  name: 'product',
  components: {
    products,
    Toolbox,
  },

 
}
</script>