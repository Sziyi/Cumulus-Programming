<template>
  <div class="aside-menu">
    <el-menu
      active-text-color="#409eff"
      background-color="#fdfdfd"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#000"
      router
    >
      <menu-tree v-for="item in data" :key="item" :menu="item"></menu-tree>
    </el-menu>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const data = ref([])
const getMenuList = async () => {
  const res = await store.dispatch('user/userInfo')
  console.log(res.data.menus)
  data.value = res.data.menus
}
getMenuList()
</script>
<style scoped lang="scss">
.aside-menu {
  width: 250px;
  height: 41.3rem;
  .el-menu {
    border-right: none;
    height: 100%;
  }
}
</style>
