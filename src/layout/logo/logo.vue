<template>
  <div class="logo-wrapper">XXX Admin</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'logo'
})
</script>

<style scoped lang="stylus">
.logo-wrapper {
  min-height: 50px;
  width: 100%;
  padding: 2px 5px;
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: bold;
  width: 100%;
  font-family: 'Lato', sans-serif;
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: #7976f3
  text-shadow: -1px -1px 0 #af7dff, 1px 1px 0 #333, 1px 1px 0 #444;
}
</style>