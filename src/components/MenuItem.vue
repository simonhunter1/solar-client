<template>
    <a :href="link" class="navbar-item"><slot></slot></a>
</template>

<script>
export default {
  name: 'MenuItem',
  template: '<MenuItem/>',
  data () {
    return {
      msg: 'This is the Menu Item'
    }
  },
  props: [ 'link' ],
}
</script>
