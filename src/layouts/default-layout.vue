<template>
  <Header/>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/Common/Header.vue'
import Navbar from '@/components/Common/Navbar.vue'
import Footer from '@/components/Common/Footer.vue'


export default {
  name: 'App',

  components: {
     Header,
     Navbar,
     Footer,
  },


}
</script>