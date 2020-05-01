<template>
   <li>
      <div
         v-for="number of count"
         :key="number"
         :class="['ingredient', ingredient, {dragabble: isDraggable}]"
         :data-ingredient="ingredient"
         draggable="true"
         @dragstart="$emit('selectRemoveProduct', $event.target)"
      >
         {{ingredient}}
      </div>
   </li>
</template>


<script>
export default {
   props: ['count', 'ingredient', 'isDraggable']
}
</script>


<style scoped>
   .ingredient{
      margin: 5px auto;
      border-radius: 10px;
      width: 90%;
      text-align: center;
      transition: .2s;
   }
   .dragabble{
      cursor: grab;
   }
   .dragabble:hover{
      transform: scale(1.045);
   }
   .dragabble:active{
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
</style>