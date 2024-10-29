<template>
  <div>
    <SlideIntro />
    <div class="lazy-box my-5">
      <IntroSlicer />
    </div>
    <div class="lazy-box my-5">
      <div class="container">
        <div class="lazy-title">
          <h4 class="text-uppercase text-center">New arrivals</h4>
        </div>
        <ProductCart :products="listProducts" @addToCart="showProductDetail">
        </ProductCart>
        <PopupProductDetail
          v-show="showPopup"
          :selectedProduct="selectedProduct" :price="price"
          @closePopup="closePopup"
        >
        </PopupProductDetail>
      </div>
    </div>
    <!--  policy  -->
    <div class="bg-dark">
      <div class="container">
        <div class="row d-flex justify-content-between text-center">
          <div class="col-sm-6 col-lg-3 py-5 px-0">
            <div class="policy-box">
              <div class="d-block">
                <div class="policy-icon">
                  <i class="fa-solid fa-rotate-left"></i>
                </div>
                <div class="policy-content">Thanh toán</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 py-5 px-0">
            <div class="policy-box">
              <div class="d-block">
                <div class="policy-icon"><i class="fa-solid fa-truck"></i></div>
                <div class="policy-content">Vận chuyển</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 py-5 px-0">
            <div class="policy-box">
              <div class="d-block">
                <div class="policy-icon"><i class="fa-solid fa-lock"></i></div>
                <div class="policy-content">Trả hàng và hoàn tiền</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 py-5 px-0">
            <div class="policy-box">
              <div class="d-block">
                <div class="policy-icon">
                  <i class="fa-solid fa-headphones"></i>
                </div>
                <div class="policy-content">Hỗ trợ dịch vụ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end policy -->

    <!-- best-seller -->
    <div class="lazy-box my-5">
      <div class="container">
        <div class="lazy-title">
          <h4 class="text-uppercase text-center">Best seller</h4>
        </div>
        <ProductCart
          v-bind:products="listProducts"
          @addToCart="showProductDetail"
        />
      </div>
    </div>
    <!-- end best-seller -->

    <!-- blog -->
    <div class="lazy-box my-5">
      <MiniBlogVue />
    </div>
    <!-- end blog -->
  </div>
</template>

<script>
import SlideIntro from "@/components/Home/Slide-intro.vue";
import IntroSlicer from "@/components/User/Intro_slicer.vue";
import ProductCart from "@/components/Products/Product-card.vue";
import PopupProductDetail from "@/components/Home/PopupProductDetail.vue";
import MiniBlogVue from "@/components/Home/MiniBlog.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home ",
  components: {
    SlideIntro,
    IntroSlicer,
    ProductCart,
    PopupProductDetail,
    MiniBlogVue,
  },
  data() {
    return {
      showPopup: false,
      price: null,
      selectedProduct: {},
    };
  },
  computed: {
    ...mapGetters(["listProducts"]),
  },
  methods: {
    showProductDetail(product) {
      this.selectedProduct = product;
      this.price = product.price.value;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchData");
  },
};
</script>
<style lang="scss" scoped></style>
