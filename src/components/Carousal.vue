<template>
  <div class="carousel-conponent">
    <slot :currentSlide="currentSlide"/>
    <!-- Navigation -->
    <div class="navigate w-100 px-3">
        <div class="toggle-page left" >
            <i class="fa-solid fa-angle-left" @click="prevSlide"></i>
        </div>
        <div class="toggle-page right">
            <i class="fa-solid fa-angle-right" @click="nextSlide"></i>
        </div>
    </div>
    <!-- Pagination -->
    <div class="pagination w-100">
        <span class="m-2 rounded-circle"
            @click="goToSlide (index)"
            v-for="(slide, index) in getSlideCount"
            :key="index"
            :class="{active: index  === currentSlide}"   
        >
        </span>
    </div>

  </div>
 
</template>

<script>
import {ref, onMounted} from "vue"
export default {
    setup() {
        const currentSlide = ref(0);
        const getSlideCount = ref(0);
        const autoPlayEnable = ref(true);
        const timeoutDuration = ref(3000);

        // next slide
        const nextSlide = () => {
             currentSlide.value = (currentSlide.value + 1) % getSlideCount.value;
        }
        // prev slide
        const prevSlide = () => {
              currentSlide.value = (currentSlide.value - 1 + getSlideCount.value) % getSlideCount.value;
        }
        // go to slide
        const goToSlide = (index) => {
            currentSlide.value = index;
        }
        // auto play
        const autoPlay =  () => {
            setInterval(()=> {
                nextSlide();
            }, timeoutDuration.value)
        }
        if(autoPlayEnable.value) {
            autoPlay();
        }
        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".slide").length;
        })
        return {currentSlide, nextSlide, prevSlide, goToSlide ,getSlideCount};
        
    }
}
</script>

<style scope="">
.carousel-conponent{
    position: relative;
    height: 585px;
}
.navigate{
    position: absolute;
    top:50%;
    left:0;
    display: flex;
    justify-content: space-between;
}
.toggle-page {
    border-radius: 50%;
    background: rgba(229, 230, 230, 0.5);
    width: 40px;
    height: 40px;
}
.toggle-page i {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
}

.toggle-page:hover {
    border-radius: 50%;
    background: #fff;
}

.toggle-page:hover i {
    color: #c96;   
}
.pagination{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
}
.pagination span{
    width: 20px;
    height: 20px;
    display: inline-block; 
    background-color: #fff;
    border: 1px #c96 solid;
}
.pagination span.active {
    background-color: #c96;
}
</style>