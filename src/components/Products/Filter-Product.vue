<template>
<div class="ps-5" v-for="(cattegory_name, index) in categoryList" :key="index"> 
    <div class="row">
        <div class="d-flex ps-5">
            <input type="checkbox" class=" m-2"> 
            <label for="">{{cattegory_name}}</label>
        </div>

    </div>

</div>

</template>

<script>
import api from '@/utils/api'
export default {
    data() {
        return{
            categoryList: [],
        }
    },
     async created() {
    try{
      console.log(this.catagory_name)
      const response = await api.getProductCategoryList(this.catagory_name);
      if(response.data) {
        this.categoryList = response.data
        console.log(this.categoryList)
      }
    }catch(error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
    }
  }
}
</script>

<style>

</style>