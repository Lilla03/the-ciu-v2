<template>
    <div class="intro-slide">
        <!-- <img class="slide w-100" src="@/assets/images/banner/chilling.png"> -->
    <Carousal class="carousel d-flex" v-slot="{currentSlide}">
        <Slide v-for="(slide, index) in carousalSlide" :key="index">
            <div v-show="currentSlide === index" class="slide-info">
                <img :src="slide" class=" w-100">
            </div>
             
        </Slide>
    </Carousal>
    </div>
</template>
<script>
import Slide from '@/components/Slide.vue'
import Carousal from '@/components/Carousal.vue'
export default {
    name:'SlideIntro',
     setup() {
        const carousalSlide = [
            require('@/assets/images/banner/birthday-gift.png'),
            require('@/assets/images/banner/chilling.png'),
            require('@/assets/images/banner/shipping-free.png'),
            require('@/assets/images/banner/sale-last-chance.png'),
            require('@/assets/images/banner/the-new-chapter.webp'),
        ];
        return {carousalSlide};
    },
    components: {
        Slide, Carousal
    }
}
</script>