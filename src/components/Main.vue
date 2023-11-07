<script>
import vestiti from "./Vestiti.vue";
import infoDatabase from "../db.json";

export default {
  components: {
    vestiti,
  },
  data() {
    return {
      products: infoDatabase.products,
    };
  },
  created() {
    console.log(this.products);
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <vestiti class="col-4" v-for="product in products" :item="product" />
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>
