<template>
  <HelloWorld :msg="message"/>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import { mapState } from "vuex";

export default {
  computed: mapState([
    'message'
  ]),
  components: {
    HelloWorld
  },
}
</script>
