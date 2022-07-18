<template>
  <div class="header">
    <div class="title">
      <el-icon class="el-input__icon"><ElemeFilled /></el-icon>
      积云编程
    </div>
    <div class="s">
      <el-icon><Fold /></el-icon>
      <el-icon><Expand /></el-icon>
      <el-icon><Refresh /></el-icon>
    </div>
    <div class="r">
      <div class="q">
        <el-icon><FullScreen /></el-icon>
      </div>
      <el-avatar class="t" :size="30" />
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
const store = useStore()
const handleCommand = (command) => {
  // console.log(command)
  switch (command) {
    case 'a':
      handlePassword()
      break
    case 'logout':
      handleLogout()
      break
  }
}

const handlePassword = () => {
  console.log('密码')
}
const handleLogout = () => {
  ElMessageBox.confirm('是否要退出登录？', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      store.dispatch('user/userLogout')
      ElNotification({
        message: '退出登录成功',
        type: 'success'
      })
    })
    .catch(() => {
      ElNotification({
        type: 'info',
        message: '取消退出登录'
      })
    })
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 60px;
  --tw-bg-opacity: 1;
  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));
  .title {
    width: 150px;
    height: 60px;
    line-height: 60px;
    margin: 0px 50px;
    text-align: center;
    font-size: 1.25rem;
    color: #fff;
    float: left;
  }
  .s {
    line-height: 60px;
    font-size: 1rem;
    color: #fff;
    float: left;
  }
  .r {
    width: 200px;
    height: 60px;
    float: right;
    .q {
      width: 60px;
      height: 60px;
      float: left;
      .el-icon {
        margin: 22px 10px 15px 10px;
        font-size: 1rem;
        color: #fff;
      }
    }

    .t {
      margin: 14px 10px 0 0;
      float: left;
    }
    .el-dropdown {
      line-height: 60px;
      color: #fff;
      .el-dropdown-link {
        float: left;
      }
    }
  }
}
</style>
