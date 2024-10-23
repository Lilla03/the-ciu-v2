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
      <ProductCart :products="listProducts" @addToCart="showProductDetail"> </ProductCart>
      <PopupProductDetail
        v-show="showPopup"
        :selectedProduct="selectedProduct"
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
      <ProductCart v-bind:products="listProducts" @addToCart="showProductDetail" />
    </div>
  </div>
  <!-- end best-seller -->

  <!-- blog -->
  <div class="lazy-box my-5">
    <div class="container">
      <div class="lazy-title">
        <h4 class="text-uppercase text-center p-3">blog</h4>
      </div>
      <div id="blog-media" class="text-center">
        <div class="container my-3">
          <div class="row">
            <div class="col-lg-6">
              <div class="entry-mask">
                <div class="blog-thumbnail">
                  <a href="#"></a>
                  <div class="entry-body p-5 text-white text-start">
                    <div class="entry-meta fs-6">
                      <a>Apr Mon 2024</a>
                      <span>|</span>
                      <a>0 Comments</a>
                    </div>
                    <div class="entry-title fs-4 fw-semibold">
                      Mệnh Hỏa Mặc Màu Gì Cho May Mắn?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog-list">
                <div class="ul">
                  <div class="li d-flex mb-3">
                    <img src="#" class="w-25 m-2" />
                    <div class="row text-start my-3">
                      <span class="text-secondary">Mar Wed 2024</span>
                      <span>Du Lịch Hà Giang Mặc Gì Đẹp?</span>
                    </div>
                  </div>
                  <div class="li d-flex mb-3">
                    <img src="#" class="w-25 m-2" />
                    <div class="row text-start my-3">
                      <span class="text-secondary">Mar Wed 2024</span>
                      <span>Du Lịch Hà Giang Mặc Gì Đẹp?</span>
                    </div>
                  </div>
                  <div class="li d-flex mb-3">
                    <img src="#" class="w-25 m-2" />
                    <div class="row text-start my-3">
                      <span class="text-secondary">Mar Wed 2024</span>
                      <span>Du Lịch Hà Giang Mặc Gì Đẹp?</span>
                    </div>
                  </div>
                  <div class="li d-flex mb-3">
                    <img src="#" class="w-25 m-2" />
                    <div class="row text-start my-3">
                      <span class="text-secondary">Mar Wed 2024</span>
                      <span>Du Lịch Hà Giang Mặc Gì Đẹp?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <a href="#" class="read-more d-flex text-uppercase">
          Xem thêm
          <span class="read-more-icon mx-2"
            ><i class="fa-solid fa-arrow-right"></i></span
        ></a>
      </div>
    </div>
  </div>
  <!-- end blog -->
</div>
</template>

<script>
import SlideIntro from "@/components/Home/Slide-intro.vue";
import IntroSlicer from "@/components/User/Intro_slicer.vue";
import ProductCart from "@/components/Products/Product-card.vue";
import PopupProductDetail from "@/components/Home/PopupProductDetail.vue";

export default {
  name: "Home ",
  components: {
    SlideIntro,
    IntroSlicer,
    ProductCart,
    PopupProductDetail,
  },
  // props: {
  //   listProducts: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
          this.listProducts= [
        {
          id: 1,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
            { color: "Black", url: require("@/assets/images/pro-2.jpg") },
            { color: "Red", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 2,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
            { color: "Black", url: require("@/assets/images/pro-2.jpg") },
            { color: "Red", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 3,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
            { color: "Black", url: require("@/assets/images/pro-2.jpg") },
            { color: "Red", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 4,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 5,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Black", url: require("@/assets/images/pro-2.jpg") },
            { color: "Red", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 6,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
            { color: "Black", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 7,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 8,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          colorChoice: [
            {
              color: "Creamy white",
              url: require("@/assets/images/pro-2.jpg"),
            },
            { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
            { color: "Black", url: require("@/assets/images/pro-2.jpg") },
            { color: "Red", url: require("@/assets/images/pro-2.jpg") },
          ],
          quantity: "1",
          size: ["S", "M", "L"],
          image: require("@/assets/images/pro-2.jpg"),
        },
      ]
    return {
      showPopup: false,
      selectedProduct: {},
    };
  },

  methods: {
    showProductDetail(product) {
      this.selectedProduct = product;
      this.showPopup = true;
      console.log(this.selectedProduct)
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
