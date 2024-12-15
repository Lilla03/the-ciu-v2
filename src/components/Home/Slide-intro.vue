<template>
    <div class="intro-slide relative" style="height: 500px">
        <img class="slide w-100" src="@/assets/images/banner/chilling.png">
    <!-- <Carousal class="carousel d-flex" v-slot="{currentSlide}">
        <Slide v-for="(slide, index) in carousalSlide" :key="index">
            <div v-show="currentSlide === index" class="slide-info">
                <img :src="slide" class=" w-100">
            </div>
             
        </Slide>
    </Carousal> -->
    <div id="carouselExampleIndicators" class="carousel slide relative z-n1" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/e5/57/90/e55790f09b3bfea3147fd8eee89bc61a.jpg" class="d-block " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/aa/fa/e9/aafae976a38bd341fa0d1d6f57a52d6e.jpg" class="d-block  " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/cc/c0/ec/ccc0ec17f2efa897cf8aecb1be1c2df9.jpg" class="d-block" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
    </div>
</template>
<script>
// import Slide from '@/components/Slide.vue'
// import Carousal from '@/components/Carousal.vue'
// export default {
//     name:'SlideIntro',
//      setup() {
//         const carousalSlide = [
//              'https://i.pinimg.com/736x/e5/57/90/e55790f09b3bfea3147fd8eee89bc61a.jpg',
//              'https://i.pinimg.com/736x/aa/fa/e9/aafae976a38bd341fa0d1d6f57a52d6e.jpg',
//              'https://i.pinimg.com/736x/f8/87/d0/f887d0985bd5369f79897c7b8a3c31db.jpg'
//             // require('@/assets/images/banner/chilling.png'),
//             // require('@/assets/images/banner/shipping-free.png'),
//             // require('@/assets/images/banner/sale-last-chance.png'),
//             // require('@/assets/images/banner/the-new-chapter.webp'),
//         ];
//         return {carousalSlide};
//     },
//     components: {
//         Slide, Carousal
//     }
// }
</script>
<style>
.carousel-item img{
    position: absolute;
    top: 0;
    left: 0;
    object-position: center;
    object-fit: cover;
    height: fit-content;
    width: 100%;
}
</style>