<script>
import vestiti from "./Vestiti.vue";
//import infoDatabase from "../db.json";
import { store } from "../store";
import axios from "axios";

export default {
  components: {
    vestiti,
  },
  data() {
    return {
      //products: infoDatabase.products,
      store
    };
  },
  created() {
    //console.log(this.store.products);
    axios.get('http://localhost:3000/products')
    .then(res => {
      const products = res.data
      console.log(res, products)
      this.store.products = products
    })
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <vestiti class="col-4" v-for="product in store.products" :item="product" />
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>
