// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import OnsenNavigator from './OnsenNavigator'
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)

/* eslint-disable no-new */
// Init App

new Vue({
  el: '#main',
  template: '<onsen-navigator/>',
  // Register Component
  components: { OnsenNavigator }
})
