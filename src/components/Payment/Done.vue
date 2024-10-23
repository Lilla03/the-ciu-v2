<template>
<div class="container my-5 success-confirm col-md-6">

        <div class="success-icon d-flex justify-content-center mt-5"><i class="fa-solid fa-circle-check fa-6x" style = "color:#c96;"></i></div>
        <h2 class="p-4 text-center">Đơn hàng đã đặt thành công!</h2>
        <p class="text-muted mx-5" style="font-size: 14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur cursus leo. Proin id venenatis ante. Phasellus dapibus sodales nulla, eget luctus eros ultrices id. Fusce nec lectus eget nisl euismod pretium sit amet id ex. Aliquam quis efficitur magna. </p>
        <div class=" row btn-action my-3">
            <router-link to="/cart" class="btn btn-light col-md-5 col-10 mt-4">Quay lại giỏ hàng</router-link>
            <router-link to="/" class="btn btn-dark col-md-5  col-10 mt-4" style = "color:#fff; background:#c96; border:none">Tiếp tục mua sắm</router-link>
        </div>
        </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.success-confirm{
    display: flex;
    flex-direction: column;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
.btn-action{
    display: flex;
    justify-content: space-around;
}
</style>