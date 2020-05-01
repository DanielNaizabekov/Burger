<template>
   <div class="burger-builder">
      <ul class="burger-control">
         <li class="price">{{totalPrice}}</li>
         <li
            v-for="(ingredientValue, ingredient) in ingredients"
            v-bind:key="ingredient"

            class="burger-control__item"
         >
            <button
               :data-ingredient="ingredient"
               data-type="less"
               @click="burgerHandler"
               class="burger-control__btn"
               :class="{noAccess: ingredientValue.count == 0}"
            >-</button>

            <span>{{ingredient}}</span>

            <button
               :data-ingredient="ingredient"
               data-type="more"
               @click="burgerHandler"
               class="burger-control__btn"
            >+</button>
         </li>
      </ul>
      <ChoiceButtons
         @cancel="resetHandler"
         @cntinue="$emit('cntinue')"
         :isSelected="totalPrice"
         warning="Reset"
         success="Continue"
      />
   </div>
</template>


<script>
import ChoiceButtons from './ChoiceButtons.vue';
import {mapGetters, mapMutations} from 'vuex';

export default {
   components: {
      ChoiceButtons
   },
   computed: {
      ...mapGetters(['ingredients', 'totalPrice'])
   },
   methods: {
      ...mapMutations(['less', 'more', 'reset']),

      burgerHandler(event) {
         let ingredient = event.target.getAttribute('data-ingredient');
         let type = event.target.getAttribute('data-type');

         if(type === 'less') {
            this.less(ingredient)
         }

         if(type === 'more') {
            this.more(ingredient)
         }
      },
      resetHandler() {
         this.reset()
      }
   }
}
</script>


<style scoped>
   .burger-control{
      width: 250px;
      margin: 0 auto;
   }

   .burger-control__item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ccc;
      padding: 10px;
   }

   .burger-control__btn{
      width: 30px;
      height: 30px;
      font-size: 25px;
      line-height: 10px;
      text-align: center;
      padding: 0;
      cursor: pointer;
   }

   .price{
      text-align: center;
      margin-bottom: 10px;
   }

   .noAccess{
      background: red !important;
      pointer-events: none;
   }
</style>