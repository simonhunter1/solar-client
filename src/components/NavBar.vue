<template>
  <div id="NavBar">
    <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
        The Logo
        </a>
        <div class="navbar-burger" v-bind:class="{'is-active': isActive}" @click="toggleIsActive">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isActive}">
        <div class="navbar-start">
        <menu-item link="#">Hello</menu-item>
        <menu-item link="#">Roundabout</menu-item>
        </div>
        <div class="navbar-end">
        <menu-item link="#">Goodbye</menu-item>
        </div>
    </div>
    </nav>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'NavBar',
  template: '<NavBar/>',
  components: {
      MenuItem
  },
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleIsActive: function() {
      this.isActive = !this.isActive
    }
  }
}
</script>
