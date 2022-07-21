<template>
  <div class="menu">
    <div class="tagsView">
      <TagsView></TagsView>
    </div>
    <div class="router">
      <router-view></router-view>
      <div class="d"></div>
    </div>
  </div>
</template>

<script setup>
import TagsView from '@/components/TagsView'
</script>
<style scoped lang="scss">
.menu {
  height: 98%;
}
.tagsView {
  color: #333;
  border-bottom: 1px solid #e4e7ed;
  height: 40px;
}
.router {
  width: 100%;
  height: 85%;
  // background: red;
  overflow-y: auto;
  .d {
    height: 529px;
    width: 100%;
  }
}
</style>
