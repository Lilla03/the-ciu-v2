<template>
  <div class="border-bottom m-0">
    <div class="container breadcrumb my-0">
      <ol class="d-inline-flex m-0 p-0">
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/">Trang Chủ</router-link>
        </li>
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/catagory">Sản phẩm</router-link>
        </li>
        <li class="ms-3 py-3 text-secondary">
          <router-link :to="`/product/${product?.id??''}`">{{ product?.title ?? "" }}</router-link>
        </li>
      </ol>
    </div>
  </div>
  <div class="container my-2 mb-5" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="d-flex justify-content-center">
              <img class="w-75" :src="product.thumbnail" />
          </div>
          
         
          <div class="d-flex">
            <div
              class="justify-content-around col-3 p-4 overflow-auto"
              v-for="(image, index) in Array.isArray(product?.images)
                ? product.images
                : []"
              :key="index"
            >
              <img :src="image" class="color-choice w-100" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <h3>{{ product?.title ?? "" }}</h3>
          <p class="fs-5">{{ product?.description ?? "" }}</p>
          <p>{{ product?.rating??''}}<i class="fa-solid fa-star m-2 fs-6"></i><span class="fs-6 text-decoration-underline">{{product?.reviews.length}} đánh giá</span></p>
          <h2><span class="fs-5 px-2 text-secondary text-decoration-line-through ">{{ formattedPrice((product?.price * (product.discountPercentage/100 + 1 ) )?? "") }}</span>{{ formattedPrice(product?.price ?? "") }}<span class="fs-5 px-2 text-primary">({{product.discountPercentage}}%)</span></h2>

          <div class="quality mt-4">
            <label class="fs-5 fw-bold me-5">Số lượng</label>
            <div class="d-inline-flex">
              <button class="btn-sp" @click="minusQty(product)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <input
                class="form-control"
                type="number"
                v-model.number="localQuantity"
                @change="updateCartQuantity"
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
          class="btn btn-lg fw-bold fs-5"
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
          data-bs-target="#shipment"
          aria-expanded="false"
          aria-controls="shipment"
        >
          Vận chuyển và trả hàng
        </button>
      </div>
      <div id="allInfoGroup">
        <div
          class="fs-5 collapse show"
          id="productDetail"
          data-bs-parent="#myGroup"
        >
        <p>Thương hiệu: {{product.brand}}</p>
        <p>Danh mục: {{product.category}}</p>
        <p>Tên sản phẩm: {{product.title}}</p>
        <p>Mô tả chi tiết: {{product.description}}</p>
        <div class="">
            <p>Kích thước:</p>
            <p><i class="fa-solid fa-check pe-3"></i>Chiều dài: {{(product.dimensions.height*2.54).toFixed(2)}}cm</p>
            <p><i class="fa-solid fa-check pe-3"></i>Chiều rộng: {{(product.dimensions.width*2.54).toFixed(2)}}cm</p>
            <p><i class="fa-solid fa-check pe-3"></i>Chiều sâu: {{(product.dimensions.depth*2.54).toFixed(2)}}cm</p>
            <p>Trọng lượng: {{(product.weight * 0.453592).toFixed(2)}}kg</p>

        </div>
      
        </div>
        <div
          class="collapse"
          id="shipment"
          data-bs-parent="#allInfoGroup"
        >
        <p>Thời gian giao hàng: {{product.shippingInformation}}</p>
        <p>Thời gian hoàn hàng: {{product.returnPolicy}}</p>
          <p>Chính sách hoàn trả: {{product.warrantyInformation}}</p>
        </div>
      </div>
    </div>

    <h2 class="mt-4">Đánh giá sản phẩm</h2>
      {{product.rating}} trên 5
    <div class="container d-flex justify-content-start">
      <div class="row w-100" >
        <div class="  border-bottom " v-for="(review,index) in product.reviews" :key="index">
           <p>{{review.reviewerName}}</p> <span class="" v-for="(rating,index) in review.rating" :key="index">
            <i class="fa-solid fa-star  fs-6"></i>
           </span>
           <p>{{review.date}}</p>
           
            <p>{{review.comment}}</p>
        </div>
      </div>
     
    </div>

  </div>
</template>

<script>
import api from "@/utils/api";
import { mapGetters } from "vuex";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: null,
      localQuantity: 1,
      // selectedSize: null,
      // selectedColor: null,
    };
  },
  async created() {
    const productId = this.$route.params.id;
    try {
      const response = await api.getProductDetail(productId);
      console.log('single product: ',response.data)
      if(response.data) {
        this.product = response.data;
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
  methods: {
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
    //   console.log(this.selectedSize)
    //   this.$store.dispatch("updateSelectedSize", size);
    // },
    // selectColor(color) {
    //   this.selectedColor = color;
    //   this.$store.dispatch("updateSelectedColor", color);
    // },
    addToCart() {
      const productToAdd = {
        ...this.product,
        quantity: this.localQuantity,
      };
      
      this.$store.commit("ADD_TO_CART", productToAdd);
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
    },
  },
  computed: {
    ...mapGetters(["formattedPrice"]),
  },
};
</script>
<style lang="scss" scoped>
#allInfoGroup p {
  font-size: 15px;
}
.fa-star{
  color: #c96;
}
.active {
  background-color: #111;
  color: #fff;
}
.img-product {
  height: 300px;
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
  &:hover {
    color: #c96;
  }
}
</style>
