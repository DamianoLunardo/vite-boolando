<script>
import vestiti from './Vestiti.vue'
import infoDatabase from '../db.json';

export default {
  components: {
	vestiti
  },
  data () {
	return {
	infoDb : infoDatabase	
	}
},
created() {
    console.log(this.infoDb)
  }
}
</script>

<template>
    
<vestiti />
   

</template>

<style lang="scss" scoped>

</style>