<template>
  <div class="row m-2">
    <select class="py-2 border rounded">
      <option v-for="(city, index) in cities" :key="index">
        {{ city.name }}
      </option>
    </select>
  </div>
  <div class="row m-2">
    <select class="py-2 border rounded">
      <option v-for="(district, index) in districts" :key="index">
        {{ district.name }}
      </option>
    </select>
  </div>
  <div class="row m-2">
    <select class="py-2 border rounded">
      <option v-for="(commune, index) in communes" :key="index">
        {{ commune.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
