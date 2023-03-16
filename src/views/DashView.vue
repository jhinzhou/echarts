<template>
  <div class="dash-layout">
    <el-container style="height: 100%">
      <el-header style="height: 10%"><HeaderView /></el-header>
      <el-container style="height: 90%">
        <el-aside class="aside"><AsideLeftView /></el-aside>
        <el-main><MainView /></el-main>
        <el-aside class="aside"><AsideRightView /></el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import HeaderView from './HeaderView.vue'
import AsideLeftView from './AsideLeftView.vue'
import MainView from './MainView.vue'
import AsideRightView from './AsideRightView.vue'
</script>
<style scoped>
.aside {
  height: 100%;
  padding: 10px;
  width: 20%;
}
</style>
