<template>
  <el-scrollbar>
    <el-menu
      router
      default-active="2"
      class="side-menu"
      active-text-color="#ffd04b"
      @select="onSelectMenu"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航</span>
        </template>
        <el-menu-item index="1-1" :route="routerAbout">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
let routerAbout = {
  name: 'AboutIndex',
  path: '/about/index'
}
// 处理菜单事件
const onSelectMenu = (route: any) => {
  console.info(route)
}
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'side-menu'
})
</script>

<style lang="stylus" scoped>
.side-menu {
  border-right: none;
}
</style>