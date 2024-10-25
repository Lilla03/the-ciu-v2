<template>
  <div class="border-bottom m-0">
    <div class="container breadcrumb my-0">
      <ol class="d-inline-flex m-0 p-0">
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/">Trang Chủ</router-link>
        </li>
        <li class="ms-3 py-3 text-secondary">
          <router-link to="/new">New Arrival</router-link>
        </li>
      </ol>
    </div>
  </div>
  <Toolbox v-bind:strSearch="strSearch" v-on:handleSearch="handleSearch"/>
  <Products v-bind:products="listProducts" />
</template>

<script>
import Products from "@/components/Products/Product-card.vue";
import Toolbox from "@/components/Products/Tool_box.vue/";
import { mapGetters } from 'vuex';
export default {
  name: "new",
  components: {
    Products,
    Toolbox,
  },
  
  data() {
    return {
      strSearch: "mmm",
    };
  },
  method: {
    handleSearch(data) {
      console.log("handle search in New.vue: ", data);
      this.$emit('handleSearch', data)
    },
  },
      computed: {
        ...mapGetters([
      'listProducts'
    ])
  },
};
</script>
