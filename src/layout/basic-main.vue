<template>
  <div class="h-full w-full basic-main">
    <el-container class="h-full">
      <el-header height="50px" class=" border-b border-gray-100">
        <page-header></page-header>
      </el-header>
      <el-container>
        <el-aside class="aside-wrapper" width="210px">
          <side-menu></side-menu>
        </el-aside>
        <el-main class=" bg-slate-100">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import pageHeader from '@/layout/header/page-header.vue'
import SideMenu from '@/layout/side-menu/side-menu.vue'
import { defineComponent } from 'vue'
const BasicMain = defineComponent({
  name: 'basic-main',
  components: { pageHeader }
})
</script>
<style lang="stylus" scoped>
.aside-wrapper {
  border-right: 1px solid #dcdfe6;
}
.basic-main {
  .el-header {
    padding 0px;
  }
}
</style>