<script>
import AppHeader from './components/AppHeader.vue'
import pageMain from './components/Main.vue'
import pageFooter from './components/Footer.vue'




export default {
  components: {
    AppHeader,
    pageMain,
    pageFooter,
  },
  data () {
    return {
      message: 'Ciao',
    
    }
  }
}
</script>



<template>
<AppHeader />
<pageMain />
<pageFooter />
</template>



<style lang="scss">
@use './styles/general.scss';
</style>
