<template>
  <div @click="$emit('closePopup')" class="popup-overlay">
     <div class="popup__close-btn"><span class="popup__close-btn-inner"></span></div>
     <div @click.stop class="popup-inner">
        <h3 class="popup__title"> {{title}} </h3>
        <slot></slot>
        <ChoiceButtons
            v-if="choiceButtons"
            :warning="choiceButtons.warning"
            :success="choiceButtons.success"
            @cancel="$emit('closePopup')"
            :linkAddress="choiceButtons.linkAddress"
         />
     </div>
  </div>
</template>


<script>
import ChoiceButtons from './ChoiceButtons.vue';


export default {
   components: {
      ChoiceButtons
   },
   props: ['title', 'choiceButtons']
}
</script>


<style scoped>
   .popup-overlay{
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -100;
      opacity: 0;
      transition: .3s;
   }

   .popupActive{
      z-index: 100;
      opacity: 1;
   }

   .popup-inner{
      padding: 20px;
      background: #fff;
      border: 1px solid #000;
      min-width: 300px;
   }

   .popup__title{
      text-align: center;
   }

   .popup__close-btn{
      width: 30px;
      height: 30px;
      position: fixed;
      top: 15px;
      right: 15px;
      border: 0;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: .2s;
   }
   .popup__close-btn:active{
      transform: scale(.8);
   }

   .popup__close-btn-inner,
   .popup__close-btn-inner:after{
      width: 30px;
      height: 3px;
      background: #fff;
      transform: rotate(45deg);
   }

   .popup__close-btn-inner{
      display: inline-block;
      position: relative;
   }

   .popup__close-btn-inner:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(85deg);
   }
</style>