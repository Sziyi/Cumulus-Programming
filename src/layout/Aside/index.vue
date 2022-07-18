<template>
  <div class="aside">
    <!-- <el-menu
      active-text-color="#409eff"
      background-color="#fdfdfd"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#000"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>后台面板</span>
        </template>
        <el-menu-item index="1-4-1">
          <el-icon><HomeFilled /></el-icon>
          主控台</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-4-1">
          <el-icon><HomeFilled /></el-icon>
          商品管理</el-menu-item
        >
        <el-menu-item index="2-4-2">
          <el-icon><HomeFilled /></el-icon>
          分类管理</el-menu-item
        >
        <el-menu-item index="2-4-3">
          <el-icon><HomeFilled /></el-icon>
          规格管理</el-menu-item
        >
        <el-menu-item index="2-4-4">
          <el-icon><HomeFilled /></el-icon>
          优惠券管理</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="3-4-1">
          <el-icon><HomeFilled /></el-icon>
          用户管理</el-menu-item
        >
        <el-menu-item index="3-4-1">
          <el-icon><HomeFilled /></el-icon>
          会员等级</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="4-4-1">
          <el-icon><HomeFilled /></el-icon>
          订单管理</el-menu-item
        >
        <el-menu-item index="4-4-1">
          <el-icon><HomeFilled /></el-icon>
          评论管理</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="5-4-1">
          <el-icon><HomeFilled /></el-icon>
          管理员管理</el-menu-item
        >
        <el-menu-item index="5-4-1">
          <el-icon><HomeFilled /></el-icon>
          权限管理</el-menu-item
        >
        <el-menu-item index="5-4-1">
          <el-icon><HomeFilled /></el-icon>
          角色管理</el-menu-item
        >
      </el-sub-menu>
    </el-menu> -->
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
