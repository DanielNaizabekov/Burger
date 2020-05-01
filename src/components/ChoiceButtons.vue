<template>
   <div class="choice-buttons">
      <button
         @click="$emit('cancel')"
         class="choice-button warning"
      >{{warning}}</button>

      <router-link
         v-if="linkAddress"
         :to="linkAddress"
      >
         <button class="choice-button success">{{success}}</button>
      </router-link>
      
      <button
         v-else
         @click="$emit('cntinue')"
         :class="{noAccess: !isSelected}"
         class="choice-button success"
      >{{success}}</button>
   </div>
</template>


<script>
export default {
   props: ['isSelected', 'warning', 'success', 'linkAddress']
}
</script>


<style scoped>
   .choice-buttons{
      max-width: 250px;
      margin: 20px auto;
      display: flex;
      justify-content: space-around;
   }

   .choice-button{
      min-width: 95px;
      padding: 10px 0;
      text-align: center;
      cursor: pointer;
   }

   .warning{
      background: #d35400;
   }
   .success{
      background: #2ecc71;
   }

   .noAccess{
      background: red !important;
      pointer-events: none;
   }
</style>