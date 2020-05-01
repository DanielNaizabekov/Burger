<template>
  <header class="header">
     <div class="container header-container">
        <h1 class="logo">Burger</h1>
        <nav class="nav">
            <ul class="nav-list">
               <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/contacts">Contacts</router-link>
               </li>
            </ul>
         </nav>
     </div>
  </header>
</template>


<style scoped>
   .header{
      background: #3D9970;
   }

   .header-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .logo{
      font-size: 24px;
      color: #001f3f;
   }

   .nav-list{
      display: flex;
   }

   .nav-link{
      color: #fff;
      padding: 17px 25px;
      display: block;
      text-decoration: none;
      transition: .2s;
   }
   .nav-link:hover{
      background: #001f3f;
   }
</style>