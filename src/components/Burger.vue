<template>
   <transition-group name="burger" tag="ul">
      <li key="burger-top" class="burger-top"></li>
      <Ingredient
         v-for="(ingredientValue, ingredient) in ingredients"
         :key="ingredient"

         :count="ingredientValue.count"
         :ingredient="ingredient"
         :isDraggable="isDraggable"
         @selectRemoveProduct="selectRemoveProduct"
      />
      <li key="burger-bottom" class="burger-bottom"></li>
   </transition-group>
</template>


<script>
import Ingredient from './Ingredient.vue';
import {mapGetters} from 'vuex';

export default {
   props: ['isDraggable'],
   components: {
      Ingredient
   },
   computed: {
      ...mapGetters(['ingredients'])
   },
   methods: {
      selectRemoveProduct(target) {
         this.$emit('selectRemoveProduct', target)
      }
   }
}
</script>



<style scoped>
   .burger-top,
   .burger-bottom{
      background: #FF851B;
      height: 20px;
      border-radius: 15px;
   }

   .burger-move {
      transition: .3s;
   }
</style>