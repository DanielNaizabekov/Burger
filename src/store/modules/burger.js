export default {
   state: {
      ingredients: {
         bacon: {count: 1, price: 30},
         meat: {count: 1, price: 50},
         cheese: {count: 1, price: 20},
         mushroom: {count: 1, price: 10}
      },
      userData: {submit: false}
   },
   getters: {
      ingredients(state) {
         return state.ingredients
      },
      totalPrice(state) {
         let ingredientsInfo = Object.values(state.ingredients);
         let price = 0;

         for(let item of ingredientsInfo) {
            price+= item.count * item.price
         }

         return price
      },
      getUserData(state) {
         return {
            userData: state.userData
         }
      }
   },
   mutations: {
      less(state, ingredient) {
         let ingredientCount = state.ingredients[ingredient].count

         if(ingredientCount !== 0) {
            state.ingredients[ingredient].count--
         }
      },
      more(state, ingredient) {
         state.ingredients[ingredient].count++
      },
      reset(state) {
         let names = Object.keys(state.ingredients);

         for(let name of names) {
            state.ingredients[name].count = 1
         }
      },
      setUserData(state, userData) {
         state.userData = userData
      },
   },
   actions: {
      sendUserData(ctx, userData) {
         let extendUserData = userData

         fetch('https://burger-2ae9d.firebaseio.com/.json', {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
         })
         .then(() => {
            extendUserData.sent = true
            ctx.commit('setUserData', extendUserData)
         })
         .catch(() => {
            extendUserData.sent = false
            ctx.commit('setUserData', extendUserData)
         })
      }
   }
}