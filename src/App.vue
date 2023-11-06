<script>
import pageHeader from './components/Header.vue'
import pageMain from './components/Main.vue'
import pageFooter from './components/Footer.vue'



export default {
  components: {
    pageHeader,
    pageMain,
    pageFooter,
  },
  data () {
    return {
      message: 'Ciao'
    }
  }
}
</script>



<template>
<pageHeader />
<pageMain />
<pageFooter />
</template>



<style lang="scss">
@use './styles/general.scss'
</style>
