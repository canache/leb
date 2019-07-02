<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/FooterComponent.vue'
import { mdbIcon} from 'mdbvue';

export default {
  name: 'app',
  components: {
    Navbar, Footer, mdbIcon
  }

};
</script>

