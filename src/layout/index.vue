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
.el-header {
  --el-header-padding: none;
}
.el-aside {
  display: flex;
  width: 250px;
  height: 41.3rem;
  background: #ed46f4;
}
.el-main {
  --el-main-padding: 20px;
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--el-main-padding);
}
</style>
