<script>
export default {
  data() {
    return {
      title: "Header",
    };
  },
};
</script>

<template>
  <header>
    <div class="row container">
      <div class="col-4 center-items">
        <ul>
          <li>Donna</li>
          <li>Uomo</li>
          <li>Bambino</li>
        </ul>
      </div>
      <div class="col-4 center-items ">
        <img class="logo1" src="/img/boolean-logo.png" />
      </div>
      <div class="col-4 center-items">
        <img class="person" src="/img/person-line-drawing-svgrepo-com.svg" />
        <img class="heart" src="/img/heart-svgrepo-com.svg" />
        <img src="/img/bag-svgrepo-com.svg" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.center-items {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  justify-content: center;
  gap: 10px;
}

header {
  padding-top: 20px;
  background-color: $header-color;
  font-weight: bold;
  font-size: 20px;
  color: white;
}

.logo1 {
  align-items: center;
  height: 50px;
  width: 210px;
}

.heart {
  width: 30px;
  height: 30px;
}

.person {
  width: 30px;
  height: 30px;
}



</style>
