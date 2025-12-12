<script setup lang="ts">

//  type CardViewVue = {
//    name: string,
//    capital: string,
//    population: number,
//    area: number,
//    src: string,
//    nameRussian: string

//  }
interface Country {
  cca3: string
  name: { common: string },
  population: number,
  area: number,
  flags: { svg: string },
  capital: string[],
  translations: {
    rus: {
      official: string
    }
  }
  // добавь любые другие поля при необходимости
}
const { data } = await useFetch<Country[]>('/api/countries')
</script>

<template>
  <div v-if="data">
    <!-- <span style="color: #943;">{{data[0].borders.length}}</span> стран рядом
    {{ data[0].borders }}
    <br></br>
    <span style="color: #943;">{{data[0].population}}</span> жителей
    <br></br>
    <span style="color: #943;">{{data[0].region}}</span>
    <br></br>
    <span style="color: #943;">{{data[0].capital[0]}} столица</span>
    <br></br>
    <span>{{data[0].name.common}} общее название</span>
    <br></br>
    <span style="color: #943;">{{data[0].flags.svg}}</span>
    <br></br> -->
    <!-- <span>{{data[0].tld}} домена</span>
    <br></br>
    <span>{{data[0].idd}} телефоны</span>
    <br></br>
    <span>машины {{data[0].car}} </span>
    <br></br>
    <span>недели начинаются с {{data[0].startOfWeek}} </span>
    <br></br>
    <span>монеты {{data[0].currencies}} </span>
    <br></br>
    <span>языки {{data[0].languages}} </span>
    <br></br>
    <span>время {{data[0].timezones}} </span>
    <br></br>
    <span>Выход к морю {{!data[0].landlocked}} </span>

        <br></br>
    <span>статус членства ООН {{data[0].unMember}} </span>
        <br></br>
    <span> индккс всемирного банка {{data[0].gini}} </span>
    <span> географические размеры {{data[0].area}} км<sup>2</sup></span>
        <br></br> -->
    <div class="container">
      <CountrisCardView
        v-for="value in data"
        :key="value.cca3"
        :area="value.area"
        :name="value.name.common"
        :src="value.flags.svg"
        :nameRussian="value.translations.rus.official"
        :capital="value.capital[0]"
        :population="value.population"
      ></CountrisCardView>
    </div>
  </div>
</template>

<style lang="scss">
h1{
  color: red
}
.container{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
