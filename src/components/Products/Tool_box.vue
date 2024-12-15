<template>
  <div class="container my-3 d-flex justify-content-between">
    <div class="sidebar-toggle">
      <i class="fa-solid fa-bars m-2"></i>
      <span class="text-uppercase text-align-self-center">Bộ lọc tìm kiếm</span>
    </div>
    <div class="search-box">
      <input
        v-bind:value="strSearch"
        v-on:input="handleSearch"
        class="p-2 border"
        placeholder="Tìm sản phẩm..."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBox",
  props: {
    strSearch: {
      type: String,
      default: "",
    },
  },
  methods: {
    // handleSearch(event) {
    //     console.log('handleSearch in toolbox')
    //     this.$emit('handleSearch',event.target.value)
    // }
  } 
};
</script>

<style scoped>
.sidebar-toggle:hover {
  color: #c96;
  cursor: pointer;
}
input {
  width: 300px;
}
input::before {
  content: "\f002";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
</style>
