<template>
  <div class="flex justify-between page-header-wrapper">
    <div class="flex-none w-64">
      <Logo class=" leading-snug"></Logo>
    </div>
    <div class="flex-grow flex justify-end">
      <el-avatar
        shape="square" :size="30"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></el-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/layout/logo/logo.vue'
import { defineComponent } from 'vue'
const PageHeader = defineComponent({
  name: 'page-header',
  props: {}
})
</script>

<style lang="stylus" scoped>
.page-header-wrapper {
  // height: 100px;
}
</style>