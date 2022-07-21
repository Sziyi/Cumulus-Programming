<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside>
          <app-aside></app-aside>
        </el-aside>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Header'
</script>
<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-header {
  --el-header-padding: none;
}
.el-aside {
  display: flex;
  width: 250px;
  height: 47.3rem;
  // background: #ed46f4;
}
.el-main {
  background: #f1f1f1b8;
}
</style>
