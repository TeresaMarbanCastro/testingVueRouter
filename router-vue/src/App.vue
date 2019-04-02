<template>
  <div id="app">
    <home-view></home-view>
  </div>
</template>

<script>
import './wc/home-view';
import './wc/list-view';
import './wc/detail-view';
import VueRouter from 'vue-router';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default {
  name: 'app',
  router:  new VueRouter({
    routes: [
      { path: '/list', component: Foo },
      { path: '/list/:id', component: Bar }
    ]
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
