<template>
  <div class="menu">
    <div class="tagsView">
      <TagsView></TagsView>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import TagsView from '@/components/TagsView'
</script>
<style scoped lang="scss">
.tagsView {
  color: #333;
  border-bottom: 1px solid #e4e7ed;
  height: 40px;
}
</style>
