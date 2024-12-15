<template>
    <div class="border-bottom m-0 ">
      <div class="container breadcrumb my-0">
          <ol class="d-inline-flex m-0 p-0">
              <li class="ms-3 py-3 text-secondary"><router-link to="/">Trang Chủ</router-link></li>
              <li class="ms-3 py-3 text-secondary"><router-link to="/catagory" >Danh sách sản phẩm</router-link></li>
          </ol>
      </div>
  </div>  
  <Toolbox/>
  <div class="row w-100">
    <div class="col-md-3">
      <Filter/>
    </div>
    <div class="col-md-9">
      <products v-bind:products="showedProducts" />
    </div>
  </div>

</template>

<script>
import products from '@/components/Products/Product-card.vue'
import Toolbox from '@/components/Products/Tool_box.vue'
import Filter from '@/components/Products/Filter-Product.vue'
import api from '@/utils/api'
export default {
  props: ['catagory_name'],
  name: 'productsByACatagory',
  data() {
    return {
      showedProducts: null,
    }
  },
  components: {
    products,
    Toolbox,
    Filter,
  },
  async created() {
    try{
      console.log(this.catagory_name)
      const response = await api.getProductsbycatagory(this.catagory_name);
      if(response.data) {
        this.showedProducts = response.data.products
        console.log(this.showedProducts.products)
      }
    }catch(error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
    }
  }
}
</script>