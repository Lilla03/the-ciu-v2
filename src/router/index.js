import { createRouter, createWebHistory } from "vue-router";

// import pages
import New from "@/views/New.vue";
import Home from "@/views/Home.vue";
import Product from "@/views/Products.vue";
import ProductDetail from "@/components/Products/Product-detail.vue";
import Cart from "@/components/UsersProduct/Cart.vue";
import Wishlist from "@/components/UsersProduct/Wishlist.vue";
import Order from "@/components/Order/Order.vue";
import Done from "@/components/Order/Done.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Onsale from "@/views/Onsale.vue";
import productsByACatagory from "@/components/Products/Products-by-a-catagory.vue";
// import layout
import defaultLayout from "@/layouts/default-layout.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "HomeView",
          component: Home,
        },
      ],
    },
    {
      path: "/home",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "HomeView",
          component: Home,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/new",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "NewView",
          component: New,

        },
      ],
    },
    {
      path: "/catagory",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "ProductView",
          component: Product,
        
        },
      ],
    },
    {
      path: "/catagory/:catagory_name",
      component: defaultLayout,

      children: [
        {
          path: "",
          name: "productsByACatagoryView",
          component: productsByACatagory,
        
          props: true,
        },
      ],
    },
    {
      path: "/product/:id",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "ProductDetailView",
          component: ProductDetail,
         
        },
      ],
    },
    {
      path: "/cart",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "CartView",
          component: Cart,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/favorite-products",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "WishlistView",
          component: Wishlist,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/cart/payment",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "OrderView",
          component: Order,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/cart/payment/done",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "DoneView",
          component: Done,
          meta: { requiresAuth: true },
        },
      ],
    },
    { path: "/sign-up", component: Signup },
    { path: "/login", component: Login },
    {
      path: "/on-sale",
      component: defaultLayout,
      children: [
        {
          path: "",
          name: "OnsaleView",
          component: Onsale,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },

});

router.beforeEach((to, from, next) => {
  // Kiểm tra xem route đích có yêu cầu xác thực (requiresAuth) hay không
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Nếu route yêu cầu xác thực, kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!localStorage.getItem('token')) {
      next('/login'); // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    } else {
      next(); // Nếu người dùng đã đăng nhập, cho phép tiếp tục đến route đích
    }
  } else {
    next(); // Nếu route không yêu cầu xác thực, cho phép tiếp tục đến route đích
  }
});

export default router;
