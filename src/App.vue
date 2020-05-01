<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>


<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>


<style>
  html, body{
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: #42b983;
  }

  .container{
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
  }




  /* ==== fonts ==== */
  @font-face {
    font-family: 'icomoon';
    src:  url('assets/fonts/icomoon.eot?fe7p6a');
    src:  url('assets/fonts/icomoon.eot?fe7p6a#iefix') format('embedded-opentype'),
      url('assets/fonts/icomoon.ttf?fe7p6a') format('truetype'),
      url('assets/fonts/icomoon.woff?fe7p6a') format('woff'),
      url('assets/fonts/icomoon.svg?fe7p6a#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-trash-o:before {
    content: "\f014";
  }
  /* ==== fonts ==== */
</style>