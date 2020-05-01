<template>
   <ul class="burger-product__list">
      <li
         v-for="(ingredientValue, ingredient) in ingredients"
         :key="ingredient"
         :class="['burger-product__item', ingredient]"
         @dragstart="$emit('selectProduct', $event.target)"
         draggable="true"
         :data-ingredient="ingredient"
      > {{ingredient}} </li>
   </ul>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
   computed: {
    ...mapGetters(['ingredients'])
  }
}
</script>


<style scoped>
   .burger-product__list{
      position: absolute;
      top: 0;
      left: 10px;
      display: flex;
      flex-direction: column;
   }

   .burger-product__item{
      margin: 5px;
      padding: 5px 20px;
      text-align: center;
      cursor: grab;
      font-size: 14px;
      transition: .2s;
   }
   .burger-product__item:hover{
      transform: scale(1.045);
   }
   .burger-product__item:active{
      cursor: grabbing;
      opacity: .6;
      transform: scale(0.945);
   }

   .bacon{
      background: orange;
   }
   .meat{
      background: red;
   }
   .cheese{
      background: yellow;
   }
   .mushroom{
      background: brown;
   }


   @media screen and (max-width: 700px) {
      .burger-product__list{
         display: none;
      }
   }
</style>