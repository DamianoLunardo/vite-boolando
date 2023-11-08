<script>
export default {
  methods: {
    hasDiscount(badges) {
      for (const badge of badges) {
        if (badge.type === "discount" && badge.value) {
          return true;
        }
      }
    },
    getDiscount(badges) {
      for (const badge of badges) {
        if (badge.type === "discount" && badge.value) {
          return badge.value;
        }
      }
    },
    hasSustainabilityBadge(badges) {
      for (const badge of badges) {
        if (badge.type === "tag" && badge.value === "Sostenibilità") {
          return true;
        }
      }
    },
  },
  data() {
    return {
      title: "Main",
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <figure class="card__image">
      <img class="image1" :src="'/img/' + item.frontImage" />
      <img class="image2" :src="'/img/' + item.backImage" />
      <span class="heart-icon rectangle square" v-if="item.isInFavorites"
        >&hearts;</span
      >
      <div class="text">
        <span class="discount rectangle-red" v-if="hasDiscount(item.badges)">{{
          getDiscount(item.badges)
        }}</span>
        <span
          class="sustainability rectangle-green"
          v-if="hasSustainabilityBadge(item.badges)"
          >Sostenibilità</span
        >
      </div>
    </figure>
    {{ item.brand }}
    <h4>{{ item.name }}</h4>
    <p>{{ item.price }} &euro;</p>
    <!-- <span class="red-cost">14,99 &euro;</span> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
img {
  max-width: 100%;
}

figure > img {
  display: block;
  width: 100%;
}
.heart {
  width: 30px;
  height: 30px;
}
.person {
  width: 30px;
  height: 30px;
}
.red-cost {
  color: red;
}
.card__image {
  position: relative;
}
.heart-icon {
  position: absolute;
  top: 4%;
  right: 3%;
  display: block;
  text-align: center;
  font-size: 25px;
  color: red;
}
.square {
  background-color: white;
  width: 40px;
  height: 33px;
}
.text {
  position: absolute;
  bottom: 10%;
}
.discount {
  z-index: 2;
  display: inline-block;
  top: 85%;
  left: 0%;
  text-align: center;
  font-size: 15px;
  color: rgb(255, 255, 255);
}
.rectangle-red {
  width: 50px;
  height: 20px;
  background-color: red;
}
.sustainability {
  z-index: 1;
  top: 85%;
  right: 42%;
  display: inline-block;
  text-align: center;
  font-size: 15px;
  color: rgb(255, 255, 255);
}
.rectangle-green {
  width: 100px;
  height: 20px;
  background-color: green;
}
.sustainability1 {
  position: absolute;
  top: 85%;
  display: block;
  text-align: center;
  font-size: 15px;
  color: rgb(255, 255, 255);
}
.image1 {
  position: relative;
}
.image2 {
  position: absolute;
  bottom: 0px;
  opacity: 0;
  transition: all 0.7s ease;
}
.image2:hover {
  opacity: 1;
}
</style>
