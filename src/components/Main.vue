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
        <img class="image" :src="'/img/' + selectedProduct.frontImage" />
        <div class="info-container">
          <h4>{{ selectedProduct.brand }}</h4>
          <h5>{{ selectedProduct.name }}</h5>
          <p>{{ selectedProduct.price }}</p>
          <button class="btn" @click="closeModal">Chiudi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 70%;
}
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
  align-items: center;
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 700;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  gap: 10px;
}

.btn {
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgb(171, 72, 72);
  color: white;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
}
</style>
