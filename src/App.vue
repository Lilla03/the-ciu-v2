<template>
  <Header/>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/Common/Header.vue'
import Navbar from '@/components/Common/Navbar.vue'
import Footer from '@/components/Common/Footer.vue'


export default {
  name: 'App',
  components: {
     Header,
     Navbar,
     Footer,
  },
  data() {
    return {
      products: [], // Khai báo một mảng rỗng ban đầu hoặc khởi tạo dữ liệu products từ API hoặc LocalStorage
 
    };
  },
  // beforeMount() {
  //     this.products= [
  //       {
  //         id: 1,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Black", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Red", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 2,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Black", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Red", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 3,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Black", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Red", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 4,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 5,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Black", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Red", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 6,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Black", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 7,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //       {
  //         id: 8,
  //         type: "Áo",
  //         name: "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl",
  //         price: 150000,
  //         product_desc:
  //           "Khăn choàng phong cách Hàn Quốc thun trơn THE C.I.U - Orla Shawl là một phụ kiện thời trang tuyệt vời cho mọi cô gái yêu thích phong cách Hàn Quốc. Thiết kế Thời Trang: Khăn choàng Orla Shawl được thiết kế theo phong cách Hàn Quốc hiện đại và thanh lịch",
  //         colorChoice: [
  //           {
  //             color: "Creamy white",
  //             url: require("@/assets/images/pro-2.jpg"),
  //           },
  //           { color: "Grey", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Black", url: require("@/assets/images/pro-2.jpg") },
  //           { color: "Red", url: require("@/assets/images/pro-2.jpg") },
  //         ],
  //         quantity: "1",
  //         size: ["S", "M", "L"],
  //         image: require("@/assets/images/pro-2.jpg"),
  //       },
  //     ]
  // },
}
</script>