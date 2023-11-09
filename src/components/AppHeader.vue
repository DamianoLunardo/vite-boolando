<script>
export default {
  data() {
    return {
      title: "Header",
      headerItems: [{ text: "Donna" }, { text: "Uomo" }, { text: "Bambino" }],
      headerIcons: [
        { icon: "/img/person-line-drawing-svgrepo-com.svg" },
        { icon: "/img/heart-svgrepo-com.svg" },
        { icon: "/img/bag-svgrepo-com.svg" },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="row container">
      <div class="col-4 center-items">
        <ul>
          <li v-for="item in headerItems" :key="item.text">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="col-4 center-items">
        <img class="logo1" src="/img/boolean-logo.png" />
      </div>
      <div class="col-4 center-items">
        <ul>
          <li v-for="item in headerIcons" :key="item.icon">
            <img class="size" :src="item.icon" alt="Icona" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.center-items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

header {
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
.size {
  width: 30px;
  height: 30px;
}
</style>
