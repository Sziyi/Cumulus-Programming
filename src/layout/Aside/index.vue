<template>
  <div class="aside">
    <aside-menu></aside-menu>
  </div>
</template>

<script setup>
import AsideMenu from './AsideMenu'
</script>
<style scoped lang="scss">
.aside {
  width: 250px;
  height: 41.3rem;
  .el-menu {
    border-right: none;
    height: 100%;
    .el-icon {
      color: #000;
    }
  }
}
</style>
