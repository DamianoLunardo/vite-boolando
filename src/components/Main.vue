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
      store,
      isModalVisible: false,
      selectedProduct: null,
    };
  },
  methods: {
    showModal(product) {
      this.isModalVisible = true;
      this.selectedProduct = product;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedProduct = null;
    },
  },

  created() {
    //console.log(this.store.products);
    axios.get("http://localhost:3000/products").then((res) => {
      const products = res.data;
      console.log(res, products);
      this.store.products = products;
    });
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <vestiti
        class="col-4"
        v-for="product in store.products"
        :item="product"
        @show="showModal"
      />
    </div>
  </div>

  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <div class="card__header">
        <h2>{{ selectedProduct.name }}</h2>
        <button @click="closeModal">Chiudi</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal .modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 700;
}
</style>
