<template>
   <div class="wrap d-flex mb-5 px-3">
    <div class="row w-100">
    <div class="main-content d-flex justify-content-center col-lg-8 ">
        <div class="row w-100">
        <div id="information" class=" col-md-6 " >
                <div class="form-info py-3 ">
                    <h5 class="my-3">Thông tin cá nhân</h5 >
                    <div class="row m-2 ">
                        <input  class="py-2 border rounded" name="fname" type="text"  placeholder="Họ và tên" required>
                    </div>
                    <div class="row m-2  ">
                        <input class=" py-2 border rounded" name="fname" type="text" placeholder="Số điện thoại" required>
                    </div>
                    <div class="row m-2  ">
                        <input  class="py-2 border rounded" name="fname" type="text" placeholder="Email" required>
                    </div>
                    <div class="row m-2  ">
                        <input class="py-2 border rounded" name="fname" type="text" placeholder="Địa chỉ" required>
                    </div>
                    <div class="row m-2  ">
                        <input class="py-2 border rounded" name="fname" type="text" placeholder="Tỉnh thành" required>
                    </div>
                    <div class="row m-2  ">
                        <input class="py-2 border rounded" name="fname" type="text" placeholder="Quận huyện" required>
                    </div>
                    <div class="row m-2  ">
                        <input class="py-2 border rounded" name="fname" type="text" placeholder="Phường xã" required>
                    </div>
                    <textarea class="row note-form-control m-2 w-100" rows="3" placeholder="Ghi chú..."></textarea>
            </div>
        </div>
        <div id="method " class="col-md-6  py-3">
            <div class="delivery"> 
                <h5 class="my-3 ">Vận chuyển</h5>
                <select class="w-100 p-2" name="shipping-method" id="ship-com">
                    <option>Nhanh</option>
                    <option>Tiết kiệm</option>
                    <option>Hỏa tốc</option>
                </select>
            </div>
            <div class="payment">
                <h5 class="mt-5">Thanh toán</h5>
                <div class="row ms-2">
                    <div class="form-check border p-3">
                        <input type="radio" class="form-check-input mx-2" id="radio1" name="optradio" value="Thanh toán khi giao hàng (COD)" checked>
                        <label class="form-check-label" for="radio1">Thanh toán khi giao hàng (COD) </label>
                    </div>
                    <div class="form-check border p-3">
                        <input type="radio" class="form-check-input mx-2 " id="radio2" name="optradio" value="Thanh toán trực tuyến (VNPAY-QR, Thẻ tín dụng, Thẻ nội địa)">
                        <label class="form-check-label text-wrap" style="width: 90%" for="radio2">Thanh toán trực tuyến (VNPAY-QR, Thẻ tín dụng, Thẻ nội địa) </label>
                    </div>
                </div>
     
            </div>
        </div>
        </div>

    </div>
    <aside class="col-lg-4 ">
        <div id="slide-bar" >
            <div class="slide-bar-header p-3 border-bottom">
                <h5>Đơn hàng</h5>
            </div>
            <div class="slide-bar-content px-4">
                <div class="row">
                    <!-- {{ getCart()}} -->
                    <div class="product-list" v-for="product in cartItems" :key="product.id">
                        <div class=" container d-flex align-items-center border-bottom">
                              <img class="img-payment" :src="product.image">
                            <div class="product-info m-2 w-50">
                                <p class="product-name m-0">{{product.name}}</p> 
                            </div>
                            <span class="product-size">{{product.selectedSize}}</span> 
                            <span class="product-size">{{product.selectedColor  }}</span> 
                            <span class="product-quantity px-4">x{{product.quantity}}</span> 
                            <span class="price-sp w-50 text-end">{{formatPrice(product.price*product.quantity)}}</span>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="discount-code"> 
                        <div class="d-flex py-3 border-bottom justify-content-between">
                            <input  class="mx-2 p-2 border w-75" type="text" placeholder='Nhập mã giảm giá'>
                            <button class="btn btn-dark p-2">Áp dụng</button>    
                        </div>
                        <div class="order-sum">
                            <table class="w-100 my-3 ">
                                <tbody>
                                    <tr class="total-line">
                                            <th class="total-line__name w-70 fw-normal py-1" >Tạm tính</th>
                                        <td class="total-line__price w-30 text-end ">{{totalAmount}}</td>
                                    </tr>
                                    <tr class="total-line">
                                        <th class="total-line__name w-70 fw-normal py-1">Phí vận chuyển</th>
                                        <td class="total-line__price w-30 text-end">-</td>    
                                    </tr>
                                    <tr class="border-bottom">
                                        <th class="fst-italic font-helvetica pb-3">Freeship đơn hàng từ 300k</th>
                                        <th></th>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr class="total-line">
                                        <th class="total-line__name w-70 fw-normal py-1" >Tổng cộng</th>
                                        <td class="total-line__price w-30 text-end"><h5>{{totalAmount}}</h5></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-bar-nav">
                <div class="d-flex px-4 justify-content-between">
                    <router-link to="/cart" class="nav-link">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>Quay lại giỏ hàng</router-link>
                    <router-link to="/cart/payment/done" class="btn btn-dark p-2 float-end">ĐẶT HÀNG</router-link>
                </div>
              
            </div>
        </div>
    </aside>
    </div>

 </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    // data() {
    //   return {
    //     cart: [],
    //   }
    // },
    methods: {
    // getCart() {
    //   this.cart = JSON.parse(localStorage.getItem('cart'));
    // }, 
    formatPrice(value) {
      let formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(value);
    },
    
    },
    computed: {
    cartItems() {
        return this.$store.getters.getCartItems;
    },
    // totalPerProduct() {
    //   let arr = this.cart.map((product) => {
    //       return product.quantity * product.price;
    //   },0)
    //   return arr;
    // },
    // totalAmount() {
    //   let arr =this.totalPerProduct;
    //   let sum = arr.reduce((total, currentValue) => {
    //     return total + currentValue;
    //   },0);
    //   return  this.formatPrice(sum);
    // },
    }
}
</script>

<style scoped>
.img-payment{
    height: 50px;
    width: 50px;
    object-fit: cover;
}
input::before{
    content: unset;
}
 .product-info p {
    font-size: 14px;
}
.product-size{
    font-size: 14px;
}
</style>>

