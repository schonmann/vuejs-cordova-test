<template>
  <!-- App -->
  <v-ons-page>
    asdasdasd
  </v-ons-page>
</template>

<script>
export default {
  name: 'onsen-navigator',
  methods: {
    push: function (pageComponent) {
    },
    pop: function () {
    },
    resetTo: function (pageComponent, options) {

    }
  },

  mounted() {
    var navigator = this
    window.getNavigator = () => {
      return {
        push: navigator.push,
        pop: navigator.pop,
        resetTo: navigator.resetTo
      }
    }
  }
}
</script>