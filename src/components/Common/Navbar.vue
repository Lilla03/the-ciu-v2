<template>
  <div class="header-sticky sticky-top">
    <div class="container-fluid p-2 bg-dark">
      <div class="header-bottom">
        <div class="container-fluit m-lg-auto ">
          <div class="d-flex justify-content-between align-items-center ">
            <div class="header-left">
              <nav class="main-nav navbar-expand-lg">
                <ul class="navbar-nav me-auto mb-lg-0">
                  <li class="nav-item p-2">
                    <router-link to="/home">Trang chủ</router-link>
                  </li>
                  <li class="nav-item p-2">
                    <router-link to="/new">New</router-link>
                  </li>
                  <li class="nav-item p-2 sf-with-ul">
                    <router-link to="/catagory"
                      >Sản phẩm <i class="fa fa-angle-down fa-xs"></i
                    ></router-link>
                    <ul class="dropdown-menu p-4">
                      <li>
                        Áo<span class="chevron-right fa-xs float-end"></span>
                      </li>
                      <li>
                        Quần<span class="chevron-right fa-xs float-end"></span>
                      </li>
                      <li>
                        Áo khoác<span
                          class="chevron-right fa-xs float-end"
                        ></span>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item p-2">
                    <router-link to="/">Best seller</router-link>
                  </li>
                  <li class="nav-item p-2">
                    <router-link to="/on-sale"
                      >On sale <i class="fa fa-angle-down fa-xs"></i
                    ></router-link>
                  </li>
                  <li class="nav-item p-2">
                    <router-link to="/">Blog</router-link>
                  </li>
                </ul>
              </nav>
              <button class="btn-mobile-menu">
                <i
                  @click="toggleMobilNav"
                  class="fa-solid fa-bars"
                  v-show="mobile"
                ></i>
              </button>
            </div>
            <div class="header-right d-flex align-items-center px-3 ">
              <router-link to="/favorite-products" class="wish-list"
                ><sup class="wish-list_count"
                  >{{ getWishListCount }}
                </sup></router-link
              >
              <router-link to="/cart" class="shopping-cart"
                ><sup class="cart_count">{{ getCartCount }}</sup></router-link
              >
              <div>
                <div v-if="!isLoggedIn">
                  <router-link to="/login" class="btn-login">
                    <span class="login-text">Đăng nhập</span>
                  </router-link>
                </div>

                <div v-if="isLoggedIn" class="dropdown"  >
                  <span style="color: #c96"  class=" text-uppercase dropdown-toggle" data-bs-toggle="dropdown" >
                    <i class="fa-regular fa-user p-2"></i>{{
                    user?.username??''
                  }}</span>
                  <ul style="color: #c96" class="dropdown-menu" >
                    <li class="dropdown-item">Quản lý đơn hàng</li>
                    <li class="dropdown-item">Thông tin tài khoản</li>
                    <li class="dropdown-item"  @click="handleLogout()">Đăng xuất</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="mobile-nav">
      <ul class="dropdown-nav pt-5" v-show="mobileNav">
        <!-- <img src="@/assets/images/logo.png"  class="mx-auto w-100" height="40"> -->
        <li class="px-3 py-2"><router-link to="/">Trang chủ</router-link></li>
        <li class="px-3 py-2"><router-link to="/new">New</router-link></li>
        <li class="px-3 py-2 product-list">
          <router-link to="/catagory"
            >Sản phẩm
            <i class="fa fa-angle-up fa-xs py-2 px-3" v-show="iconDropdown"></i
            ><i
              class="fa fa-angle-down fa-xs py-2 px-3"
              v-show="!iconDropdown"
            ></i>
          </router-link>
          <ul v-show="contentDropdown" style="display: unset" class="py-0">
            <li>Áo</li>
            <li>Quần</li>
            <li>Chân váy</li>
            <li>Đầm</li>
            <li>Áo khoác</li>
            <li>Bộ</li>
            <li>Yếm</li>
            <li>Phụ kiện</li>
          </ul>
        </li>
        <li class="px-3 py-2"><router-link to="/">Best seller</router-link></li>
        <li class="px-3 py-2">
          <router-link to="/on-sale">On sale </router-link>
        </li>
        <li class="px-3 py-2"><router-link to="/">Blog</router-link></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      mobile: true,
      mobileNav: false,
      contentDropdown: false,
      iconDropdown: true,
      showLogoutButton: false
      // count_wishlist: 0,
      // cart: [],
      // wishlist: [],
    };
  },
  mounted() {
    // this.intervalId = setInterval(this.checkCartUpdate, 1000);
    // this.intervalId = setInterval(this.checkWishListUpdate, 1000);
    document.addEventListener("click", this.handleClickOutside);
    console.log("isLoggedIn:", this.isLoggedIn); // Kiểm tra giá trị của isLoggedIn
    console.log("user", this.user);
  },

  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
    clearInterval(this.intervalId);
  },
  methods: {
      ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push("/");
    },
      // handleToggleButton() {
      //   this.showLogoutButton = !this.showLogoutButton;
      //   console.log('show dropdown button')
      // },
    toggleMobilNav() {
      this.mobileNav = !this.mobileNav;
    },
        toggle() {
      this.mobileNav = !this.mobileNav;
    },
    // toggle mobile navigation
    handleClickOutside(event) {
      const btn_mobile_menu = this.$el.querySelector(".btn-mobile-menu");
      const product_list = this.$el.querySelector(".product-list");
      // display navigation
      if (
        !btn_mobile_menu.contains(event.target) &&
        !product_list.contains(event.target)
      ) {
        this.mobileNav = false;
      }
      // display dropdown content
      if (product_list.contains(event.target)) {
        this.contentDropdown = !this.contentDropdown;
        this.iconDropdown = !this.iconDropdown;
      }
    },
    // updateCount() {
    //    return this.count_cart = this.cart ? this.cart.length : 0,
    //           this.count_wishlist = this.wishlist ? this.wishlist.length : 0;
    // },
    // getCart() {
    //     const cart = localStorage.getItem('cart');
    //     return cart ? JSON.parse(cart) : [];
    // },
    // getWishList() {
    //       const wishlist = localStorage.getItem('wishlist');
    //       return wishlist ? JSON.parse(wishlist) : [];
    //   },
    // checkCartUpdate() {
    //   const newCart = this.getCart();
    //   if (JSON.stringify(newCart) !== JSON.stringify(this.cart)) {
    //     this.cart = newCart;
    //     this.updateCount();
    //   }
    // },
    // checkWishListUpdate() {
    //   const newWishlish = this.getWishList();
    //   if (JSON.stringify(newWishlish) !== JSON.stringify(this.wishlist)) {
    //     this.wishlist = newWishlish;
    //     this.updateCount();
    //   }
    // },
  },
  computed: {
    ...mapGetters(["getCartCount", "getWishListCount", "isLoggedIn", "user"]),
  },
};
</script>
<style lang="scss" scoped>

// .dropdown-menu {
//   position: absolute;
//   background-color: #fff;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 200px;
//   top: 100%;
//   left: 0;
//   padding: 10px;
//   display: none;
//   z-index: 999;
// }

// .dropdown-menu p {
//   margin: 0;
//   padding: 10px 0;
//   cursor: pointer;
// }

// .dropdown-menu p:hover {
//   background-color: #f5f5f5;
// }

// .user-info {
//   position: relative;
// }

// .user-info .dropdown-menu {
//   display: block;
// }


.header-sticky {
  z-index: 99;
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 100%;
  width: 50%;

  padding: 0px;
  ul,
  li {
    list-style: none;
    padding-left: 30px;
    padding-bottom: 4px;
    border-bottom: 1px, solid transparent;

    &:hover {
      border-color: #c96;
      transition: 0.5 ease all;
    }
    a {
      color: #000;
    }
    ul {
      li {
        padding: 0.3rem 1rem;
      }
    }
  }
}
// .dropdown-menu{
//   li{
//     cursor: pointer;
//   }
// }
</style>
