<template>
    <div class="header-middle  mb-5">
            <div class="container">
                <div class="header-center">
                    <router-link to='/' class="logo" ><img src="@/assets/images/logo.png"  class="m-md-auto" height="38"></router-link>
                </div>
                <div class="header-search">
                    <div class="row">
                        <div class="d-flex border-bottom p-0">
                            <button class="btn-search"><i class="fas fa-search"></i> </button>
                            <input type="text" class="form-control border-0 px-1 w-100" placeholder="Tìm sản phẩm..."> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'BasicHeader',
}
</script>

<style scoped>

</style>

