<template>
   <section class="form-page">
      <div class="container">

         <h4 class="form__title">Information</h4>
         <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
               <input class="form__input" id="name" type="text" placeholder=" " required name="name">
               <label class="form__label" for="name">name</label>
            </div>
            <div class="form-group">
               <input class="form__input" id="address" type="text" placeholder=" " required name="address">
               <label class="form__label" for="address">address</label>
            </div>
            <div class="form-group">
               <input class="form__input" id="phone" type="text" placeholder=" " required name="phone">
               <label class="form__label" for="phone">phone number</label>
            </div>

            <button class="form__btn">Submit</button>
         </form>

         {{ $route.params.id }}

         <Popup
            :title="getUserData.userData.sent ? 'Thanks for your burger order': 'Error'"
            :class="{popupActive: getUserData.userData.submit}"
            @closePopup="closePopup"
         >
            <div v-if="getUserData.userData.sent" class="user-info">
               <p> <strong>Name:</strong> {{getUserData.userData.name}} </p>
               <p> <strong>Address:</strong> {{getUserData.userData.address}} </p>
               <p> <strong>Phone number:</strong> {{getUserData.userData.phone}} </p>
            </div>
            <div v-else class="user-info">
               <p class="error-description"> Please, try again </p>
            </div>
         </Popup>

      </div>
   </section>
</template>



<script>
import Popup from './Popup.vue';
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
   components: {
      Popup
   },
   computed: {
      ...mapGetters(['getUserData'])
   },
   methods: {
      ...mapMutations(['setUserData']),
      ...mapActions(['sendUserData']),

      submitForm(event) {
         let inputs = event.target.getElementsByClassName('form__input');
         let userData = {submit: true};

         for(let input of inputs) {
            let inputName = input.getAttribute('name');
            userData[inputName] = input.value;
         }
         this.sendUserData(userData)

         event.target.reset();

         setTimeout(() => {
            this.closePopup()
         }, 7000)
      },

      closePopup() {
         this.setUserData({submit: false})
      }
   }
}
</script>



<style scoped>
   .form__title{
      text-align: center;
      font-size: 30px;
      margin: 30px;
   }
   
   .form{
      position: relative;
      max-width: 300px;
      margin: 0 auto;
      padding: 40px 20px;
      padding-bottom: 20px;
      box-shadow: 0 0 20px -12px #000;
      border-radius: 10px;
   }

   .form-group{
      position: relative;
      margin-bottom: 25px;
   }

   .form__label{
      position: absolute;
      top: 0;
      left: 7px;
      transition: .3s;
      font-size: 15px;
      cursor: text;
   }

   .form__input{
      width: 100%;
      border: 0;
      border-bottom: 1px solid #000;
      padding: 3px 10px;
      outline: none;
      transition: .3s;
      background: transparent;
      font-size: 16px;
   }
   .form__input:focus{
      border-bottom: 1px solid blue;
   }

   .form__input:focus ~ .form__label,
   .form__input:not(:placeholder-shown) ~ .form__label{
      top: -65%;
      font-size: 13px;
   }

   .form__btn{
      padding: 9px 13px;
      width: 140px;
      display: block;
      background: #2c3e50;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
      border: 0;
      outline: none;
      letter-spacing: 2px;
      cursor: pointer;
      transition: .2s;
   }
   .form__btn:hover{
      background: #263443;
   }
   .form__btn:active{
      transform: scale(.970);
      opacity: .8;
   }


   .user-info{
      margin-top: 20px;
   }

   .user-info p{
      margin-bottom: 10px;
      text-transform: capitalize;
   }
   .user-info p:last-child{
      margin: 0;
   }

   .error-description{
      text-align: center;
   }
</style>