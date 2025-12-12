<script setup lang="ts">


defineProps({
    name: String,
    capital: String,
    population: Number,
    area: Number,
    src: String,
    nameRussian: String

})
</script>

<template>
  <NuxtLink
    :to="`/${name}`"
    class="link"
  >
    <div class="cardview">
      <img
        class="image"
        :src="src"
        alt=""
      />
      <div>Страна {{ name }} ({{ nameRussian }})</div>
      <div>Столица {{ capital }}</div>
      <div>Население {{ population }}</div>
      <div>Площадь {{ area }} км<sup>2</sup></div>
    </div></NuxtLink
  >
</template>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
.image{
    width: 100%;
    height: 200px;
}
.cardview{
    border: 1px solid #000;
    padding: 10px;

    border-radius:10px;
    opacity: 0.9;
    margin: 5px;
    background: #c1e6b0;
    box-shadow: 0 0 12px 1px rgba(0,0,0,0.4);
    cursor: pointer;
    transform: scale(0.8);
    transition: opacity 0.3s ease-in-out,transform 1s;
}
.link{
    text-decoration: none;
    color: #000;
    display: block;
    width: 15%;
}
.cardview:hover{
    opacity: 1;
    transform: scale(1);
}
</style>
