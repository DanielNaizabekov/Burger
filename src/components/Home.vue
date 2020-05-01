<template>
  <section class="home">
    <div class="container">

      <div class="burger-wrapper">
        <div @dragover.prevent @drop="addProduct" class="burger">
          <Burger @selectRemoveProduct="selectRemoveProduct" :isDraggable="true"/>
        </div>

        <BurgerProductList @selectProduct="selectProduct"/>

        <div
          @dragover.prevent
          @drop="removeProduct"
          class="trach"
        > <i class="icon-trash-o"></i> </div>
      </div>

      <BurgerControl @cntinue="isPopupOpen = true"/>

      <Popup
        title="Do you want to continue?"
        @closePopup="isPopupOpen = false"
        :class="{popupActive: isPopupOpen}"
        :choiceButtons="{warning: 'Cancel', success: 'Agree', linkAddress: '/form'}"
      >
        <Burger class="popup__burger" :isDraggable="false"/>
        <p class="total-price">Total price: {{totalPrice}}</p>
      </Popup>
    </div>
  </section>
</template>

<script>
import Burger from './Burger.vue';
import BurgerProductList from './BurgerProductList';
import BurgerControl from './BurgerControl.vue';
import Popup from './Popup.vue';
import {mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    Burger,
    BurgerProductList,
    BurgerControl,
    Popup
  },
  data() {
    return {
      isPopupOpen: false,
      productItem: null,
      removeProductItem: null
    }
  },
  computed: {
    ...mapGetters(['totalPrice'])
  },
  methods: {
    ...mapMutations(['less', 'more']),

    selectProduct(target) {
      this.productItem = target
    },

    addProduct() {
      if(this.productItem) {
        let ingredient = this.productItem.getAttribute('data-ingredient');
        this.more(ingredient)
      }

      this.productItem = null
      this.removeProductItem = null
    },

    selectRemoveProduct(target) {
      this.removeProductItem = target
    },

    removeProduct() {
      if(this.removeProductItem) {
        let ingredient = this.removeProductItem.getAttribute('data-ingredient')
        this.less(ingredient)
      }

      this.productItem = null
      this.removeProductItem = null
    }
  }
}
</script>


<style scoped>
  .burger-wrapper{
    position: relative;
  }

  .burger{
    max-width: 300px;
    margin: 30px auto;
    height: 200px;
    overflow: auto;
  }

  .popup__burger{
    height: auto;
    margin: 15px 0;
  }

  .total-price{
    text-align: center;
  }

  .trach{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 100px;
  }
  @media screen and (max-width: 700px) {
    .trach{
      display: none;
    }
  }
</style>