<template>
  <div class="border-bottom m-0">
    <div class="container breadcrumb my-0">
      <ol class="d-inline-flex m-0 p-0">
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/">Trang Chủ</router-link>
        </li>
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/product">Sản phẩm</router-link>
        </li>
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/product/3"
            >Đầm denim hai dây THE C.I.U - Azura Dress 2</router-link
          >
        </li>
      </ol>
    </div>
  </div>
  <div
    class="container my-2 mb-5"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="image-product hover-zoom">
            <img class="w-100" :src="product.images" />
          </div>
          <div class="d-flex">
            <div
              class="justify-content-around col-3 p-4"
              v-for="colorChoice in product.colorChoice"
              :key="colorChoice"
            >
              <img class="color-choice w-100" :src="colorChoice.url" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <h3>{{ product.name }}</h3>
          <p>{{ product.product_desc }}</p>
          <h3>{{ formattedPrice(product.price) }}</h3>
          <div class="size-option mt-3">
            <label class="fs-5 fw-bold me-3">Size:</label>
            <div
              class="btn btn-light"
              v-for="(size, index) in product.variantSizes"
              :key="index"
              :class="{ active: product === size.filterCode }"
              @click="selectSize(size.filterCode)"
            >
              {{ size.filterCode }}
            </div>
          </div>
          <div class="color-option mt-3">
            <label class="fs-5 fw-bold me-3">Color:</label>
           <div
              class="btn btn-light"
              v-for="(color, index) in product.articleColorNames"
              :key="index"
              :class="{ active: product === color  }"
              @click="selectColor(color )"
            >
              {{ color }}
            </div>
          </div>
          <div class="quality mt-4">
            <label class="fs-5 fw-bold me-5">Số lượng</label>
            <div class="d-inline-flex">
              <button class="btn-sp" @click="minusQty(product)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <input
                class="form-control"
                type="number"
                v-model.number="product.quantity"
              />
              <button class="btn-sp" @click="plusQty()">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="multi-task mt-4">
            <button class="btn btn-add-to-cart" @click="addToCart(product)">
              Thêm vào giỏ hàng
            </button>
            <router-link
              @click="addToCart(product)" 
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

    <div class="row mt-4 more-information-container">
      <div class="d-flex">
        <button
          class="btn btn-lg fw-bold fs-5 "
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#productDetail"
          aria-expanded="false"
          aria-controls="productDetail"
        >
          Chi tiết sản phẩm
        </button>
        <button
          class="btn btn-lg fw-bold fs-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bonusInformation"
          aria-expanded="false"
          aria-controls="bonusInformation"
        >
          Thông tin bổ sung
        </button>
        <button
          class="btn btn-lg fw-bold fs-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shipment"
          aria-expanded="false"
          aria-controls="shipment"
        >
          Vận chuyển và trả hàng
        </button>
      </div>
      <div id="allInfoGroup">
        <div class="fs-5 collapse show" id="productDetail" data-bs-parent="#myGroup">
          {{ product.product_desc }}
        </div>
        <div class="collapse" id="bonusInformation" data-bs-parent="#myGroup">
          <img src="@/assets/images/bonus_infomation.jpg" class="w-100" />
        </div>
        <div class="collapse" id="shipment" data-bs-parent="#allInfoGroup">
          
        </div>
      </div>
    </div>

    <h2 class="mt-4">Sản phẩm tương tự</h2>
    <!-- <ProductCart :products="relatedProducts"/> -->
     <div class="container d-flex justify-content-center">
        <a href="#" class="read-more d-flex text-uppercase">
          Xem thêm
          <span class="read-more-icon mx-2"
            ><i class="fa-solid fa-arrow-right"></i></span
        ></a>
      </div>
  </div>
</template>

<script>
import api from '@/service/api';
import { mapGetters } from 'vuex';
// import ProductCart from './Product-card.vue'
export default {
  name: "ProductDetail",
  // components:{ProductCart},
  data() {
    return {
      product: {},
      product_id: '',
    }
  },
  onBeforeRouteUpdate() {
     const product_data =  api.getProducts().then(response => {
        return response.data.results;
     });
           console.log( this.$router.params.id )
      this.product_id =  this.$router.params.id;

      this.product = product_data[ this.product_id]
      console.log(this.product)

  },
  computed: {
    ...mapGetters(['formattedPrice']),
  },
  methods: {

    minusQty(product) {
      this.$store.commit('minusQty', product)
    },
    plusQty(product) {
       this.$store.commit('plusQty',product)
    },

   

  },
};
</script>

<style lang="scss" scoped>

.img-product {
  height: 300px;
}
p {
  font-size: 1.3rem;
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
  padding: 0.5rem 1em;
  border: 1px #555 solid;
  margin-right: 1rem;
  font-size: 1.2rem;
}
.read-more {
  color: #c96;
  &:hover{
    color: #c96;
  }
}
</style>
