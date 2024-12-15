<template>
<div class="container w-100">
  <div class="row">
  <div class="d-none d-md-block col-md-4 p-0 ">
    <Carousal class="carousel" v-slot="{currentSlide}">
      <Slide v-for="(slide, index) in carousalSlide" :key="index">
          <div v-show="currentSlide === index" class="slide-info">
              <img :src="slide" class=" w-100">
          </div>
            
      </Slide>
    </Carousal>

    <!-- <img src="@/assets/images/slide-login.webp"  class=" w-100"> -->
  </div>

    <div class= " mui-stack-root col-md-8">
       <img src="@/assets/images/logo.png"  class="mx-auto mt-3" height="45">
       <div class="text-center">
        <h2 class="w-100 ">Welcome to the C.I.U!</h2>
        <p class="text-secondary fs-5">Đăng nhập ngay để có trải nghiệm mua sắm tuyệt vời với chúng mình.</p>
       </div>
       <div class="col-md-6 offset-md-3 mt-5">
          <label class="input-form-label fs-5 ">Họ<sup style="color: #c96">*</sup></label>
          <div class="input-icons mb-3">
            <i class="fa-regular fa-user icon"></i>
            <input placeholder="Nhập số điện thoại hoặc email của bạn" class="input-form-control border" >
          </div>
          <label class="input-form-label fs-5">Tên<sup style="color: #c96">*</sup></label>
          <div class="input-icons mb-3">
            <i class="fa-regular fa-user icon"></i>
            <input placeholder="Nhập số điện thoại hoặc email của bạn" class="input-form-control border" >
          </div>
          <label class="input-form-label fs-5 ">Số điện thoại<sup style="color: #c96">*</sup></label>
          <div class="input-icons mb-3">
            <i class="fa-solid fa-phone icon"></i>
            <input placeholder="Nhập mật khẩu của bạn" class=" input-form-control border">
          </div>
          <label class="input-form-label fs-5">Email<sup style="color: #c96">*</sup></label>
          <div class="input-icons mb-3">
            <i class="fa-regular fa-envelope icon"></i>
            <input placeholder="Nhập số điện thoại hoặc email của bạn" class="input-form-control border" >
          </div>
          <label class="input-form-label fs-5">Mật khẩu<sup style="color: #c96">*</sup></label>
          <div class="input-icons mb-3">
            <i class="fa-solid fa-lock icon"></i>
            <input placeholder="Nhập số điện thoại hoặc email của bạn" class="input-form-control border" >
          </div>
          <label class="input-form-label fs-5">Nhập lại mật khẩu<sup style="color: #c96">*</sup></label>
          <div class="input-icons mb-3">
            <i class="fa-solid fa-lock icon"></i>
            <input placeholder="Nhập mật khẩu của bạn" class=" input-form-control border">
          </div>

          <button type="button" class="btn btn-secondary btn-lg w-100 mt-3 login-btn">Đăng ký</button>
          <p class="text-center mt-2">Bạn có tài khoản chưa <router-link to="./login" class="text-decoration-underline ">Đăng nhập</router-link></p>
          
       </div>
       <div class="text-center my-2">
       <p class="fw-bold">Hoặc là</p>
        <p class="fw-bold mt-2">Đăng nhập bằng</p>
            <div class="symbol-media p-0">
                <div class="">
                  <svg class="mx-3" xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem"  viewBox="0 0 48 48">
                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                  </svg>
                  <svg  class="mx-3" xmlns="http://www.w3.org/2000/svg"  width="3.8rem" height="3.8rem" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                </div>
            </div>
       </div>

      </div>
  </div>

 
    </div>
</template>

<script>
import Slide from '@/components/Slide.vue'
import Carousal from '@/components/Carousal.vue'


export default {
  components: { Carousal, Slide },
    name:'Login-in',
    setup() {
        const carousalSlide = [
            require('@/assets/images/sl-1.webp'),
            require('@/assets/images/sl-3.webp'),
            require('@/assets/images/sl-4.webp'),
];
        return {carousalSlide};
    }
}
</script>

<style scoped>

.mui-stack-root{
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.input-icons {
    width: 100%;
    margin-bottom: 10px;
}

.input-icons i {
    position: absolute;
}
.input-form-control{
  width: 100%;
  border: #555 solid 1px;
  border-radius: 10px !important ;
  padding: 0.5rem;
  text-indent: 2.5rem;
}
.input-form-control:active{
  border: #c96 solid 1px !important;
}
 .icon {
    padding: 10px;
    color: #c96;
    min-width: 50px;
    text-align: center;
}
.login-btn:hover{
  background: #000;
}
</style>