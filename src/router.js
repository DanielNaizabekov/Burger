import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router ({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home
      },
      {
         path: '/contacts',
         name: 'contacts',
         component: () => import('./components/Contacts.vue')
      },
      {
         path: '/form/:id',
         name: 'form',
         component: () => import('./components/Form.vue')
      }
   ]
})