<template>
  <div class="border-bottom m-0">
    <div class="container breadcrumb my-0">
      <ol class="d-inline-flex m-0 p-0">
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/">Trang Chủ</router-link>
        </li>
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/new">New Arrival</router-link>
        </li>
      </ol>
    </div>
  </div>
  <Toolbox v-bind:strSearch="strSearch" v-on:handleSearch="handleSearch"/>
  <Products v-bind:products="products" />
</template>

<script>
import Products from "@/components/Products/Product-card.vue";
import Toolbox from "@/components/Products/Tool_box.vue/";
export default {
  name: "new",
  components: {
    Products,
    Toolbox,
  },
  
  data() {
    return {
      products: [
        {
          id: 1,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 2,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 3,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 4,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 5,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 6,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 7,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
        {
          id: 8,
          type: "Áo",
          name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
          price: 150000,
          product_desc:
            "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
          color: ["Creamy white", "Grey", "Black", "Red"],
          quality: "1",
          image: require("@/assets/images/pro-2.jpg"),
        },
      ],
      strSearch: "mmm",
    };
  },
  method: {
    handleSearch(data) {
      console.log("handle search in New.vue: ", data);
      this.$emit('handleSearch', data)
    },
  },
};
</script>
