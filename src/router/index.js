import { createRouter, createWebHistory } from 'vue-router'

 
// import pages
import New from '@/views/New.vue'
import Home from '@/views/Home.vue'
import Product from '@/views/Products.vue'
import ProductDetail from '@/components/Products/Product-detail.vue'
import Cart from '@/components/UsersProduct/Cart.vue'
import Wishlist from '@/components/UsersProduct/Wishlist.vue'
import Order from '@/components/Order/Order.vue'
import Done from '@/components/Order/Done.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import Onsale from '@/views/Onsale.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [   
        { path: '/', component: Home },
        { path: '/new', component: New },
        { path: '/product', component: Product },
        { path: '/product/:id',component: ProductDetail},
        { path: '/cart', component: Cart },
        { path: '/favorite-products', component:  Wishlist},
        { path: '/cart/payment', component: Order },
        { path: '/cart/payment/done', component: Done },
        { path: '/sign-up', component: Signup },
        { path: '/login', component: Login },
        { path: '/on-sale', component: Onsale },
    ]
})

export default router