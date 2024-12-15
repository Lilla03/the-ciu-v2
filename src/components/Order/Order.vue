<template>
  <div class="wrap d-flex mb-5 px-3">
    <div class="row w-100">
      <div class="main-content d-flex justify-content-center col-lg-8">
        <div class="row w-100">
          <div id="information" class="col-md-6">
            <div class="form-info py-3">
              <h5 class="my-3">Thông tin cá nhân</h5>
              <div class="row m-2">
                <input
                  class="py-2 border rounded"
                  name="fname"
                  type="text"
                  placeholder="Họ và tên"
                  required
                />
              </div>
              <div class="row m-2">
                <input
                  class="py-2 border rounded"
                  name="phone"
                  type="text"
                  placeholder="Số điện thoại"
                  required
                />
              </div>
              <div class="row m-2">
                <input
                  class="py-2 border rounded"
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="row m-2">
                <input
                  class="py-2 border rounded"
                  name="address"
                  type="text"
                  placeholder="Địa chỉ"
                  required
                />
              </div>
              <textarea
                class="row note-form-control m-2 w-100  border"
                rows="3"
                placeholder="Ghi chú..."
              ></textarea>
            </div>
          </div>
          <div id="method " class="col-md-6 py-3">
            <div class="delivery">
              <h5 class="my-3">Vận chuyển</h5>
              <select class="w-100 p-2 border rounded" name="shipping-method" id="ship-cost">
                <option value="5">Nhanh</option>
                <option value="3">Tiết kiệm</option>
                <option value="10">Hỏa tốc</option>
              </select>
            </div>
            <div class="payment">
              <h5 class="mt-5">Thanh toán</h5>
              <div class="row">
                <div class="form-check border p-3">
                  <input
                    type="radio"
                    class="form-check-input mx-2"
                    id="radio1"
                    name="optradio"
                    value="Thanh toán khi giao hàng (COD)"
                    checked
                  />
                  <label class="form-check-label" for="radio1">Thanh toán khi giao hàng (COD)</label>
                </div>
                <div class="form-check border p-3">
                  <input
                    type="radio"
                    class="form-check-input mx-2"
                    id="radio2"
                    name="optradio"
                    value="Thanh toán trực tuyến (VNPAY-QR, Thẻ tín dụng, Thẻ nội địa)"
                  />
                  <label
                    class="form-check-label text-wrap"
                    style="width: 90%"
                    for="radio2"
                    >Thanh toán trực tuyến (VNPAY-QR, Thẻ tín dụng, Thẻ nội địa)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="col-lg-4">
        <div id="slide-bar">
          <div class="slide-bar-header p-3 border-bottom">
            <h5>Đơn hàng</h5>
          </div>
          <div class="slide-bar-content px-4">
            <div class="row">
              <div
                class="product-list"
                v-for="product in selectedItems"
                :key="product.id"
              >
                <div class="container w-100 d-flex align-items-center border-bottom justify-content-between">
                  <img class="img-payment" :src="product?.thumbnail ?? ''" />
                  <div class="d-flex w-100 justify-content-between m-2">
                    <div class="d-flex flex-column">
                      <p class="m-0">{{ product.title }}</p>
                    </div>
                    <div class="align-self-center">
                      <span class="align-self-center me-3">x{{ product.quantity }}</span>
                      {{ formattedPrice(product.price * product.quantity) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="discount-code">
                <div class="d-flex py-3 border-bottom justify-content-between">
                  <input
                    class="mx-2 p-2 border w-50 rounded"
                    type="text"
                    placeholder="Nhập mã giảm giá"
                  />
                  <button class="btn btn-dark p-2 font-size-sm">Áp dụng</button>
                </div>
                <div class="order-sum">
                  <table class="w-100 my-3">
                    <tbody>
                      <tr class="total-line">
                        <th class="total-line__name w-70 fw-normal py-1">Tạm tính</th>
                        <td class="total-line__price w-30 text-end">
                          {{ formattedPrice(totalAmount) }}
                        </td>
                      </tr>
                      <tr class="total-line">
                        <th class="total-line__name w-70 fw-normal py-1">Phí vận chuyển</th>
                      </tr>
                      <tr class="border-bottom">
                        <th></th>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="total-line">
                        <th class="total-line__name w-70 fw-normal py-1">Tổng cộng</th>
                        <td class="total-line__price w-30 text-end">
                          <h5>{{ formattedPrice(totalAmount) }}</h5>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-bar-nav">
            <div class="d-flex px-4 justify-content-between">
              <router-link to="/cart" class="nav-link fs-7">
                <i class="fa fa-angle-left" aria-hidden="true"></i> Quay lại giỏ hàng
              </router-link>
              <router-link to="/cart/payment/done" class="btn btn-dark p-2 float-end">
                ĐẶT HÀNG
              </router-link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      ship_cost: 0,
      cities: null,
      districts: null,
      communes: null,
    };
  },
  computed: {
    ...mapGetters(["formattedPrice", "selectedItems"]),
    totalAmount() {
      const sum = this.selectedItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return sum;
    },
  },
};
</script>

<style scoped>
input:focus {
  border: 1px gray solid;
}
.img-payment {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
input::before {
  content: unset;
}
</style>
