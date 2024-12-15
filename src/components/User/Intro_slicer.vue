<template>
  <div class="container my-5">
    <div class="lazy-title">
      <h4 class="text-uppercase text-center">Danh mục nổi bật</h4>
    </div>
    <div id="catalog-lazy">
      <div class="row text-uppercase text-center">
        <div class="col-md-3">
          <div class="catalog-item__beauty">
            <div class="banner-content">
              <div class="row d-flex justify-content-center">
                <p class="banner-title">Beauty</p>
                 <router-link :to="`/catagory/beauty`" class="btn-outline-white"> mua ngay</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="catalog-item__fragrances">
            <div class="banner-content">
              <div class="row d-flex justify-content-center">
                <p class="banner-title">Fragrances</p>
               <router-link :to="`/catagory/fragrances`" class="btn-outline-white"> mua ngay</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="catalog-item__furniture">
            <div class="banner-content">
              <div class="row d-flex justify-content-center">
                <p class="banner-title">furniture</p>
                 <router-link :to="`/catagory/furniture`" class="btn-outline-white"> mua ngay</router-link>
              </div>
            </div>
          </div>
        </div>
                <div class="col-md-3">
          <div class="catalog-item__groceries">
            <div class="banner-content">
              <div class="row d-flex justify-content-center">
                <p class="banner-title">groceries</p>
                <router-link :to="`/catagory/groceries`" class="btn-outline-white"> mua ngay</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped></style>
