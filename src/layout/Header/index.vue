<template>
  <div class="header">
    <div class="title">
      <el-icon class="el-input__icon"><ElemeFilled /></el-icon>
      积云编程
    </div>
    <div class="s">
      <el-icon><Fold /></el-icon>
      <el-icon><Expand /></el-icon>
      <el-tooltip
        cl.ass="box-item"
        effect="dark"
        content="刷新"
        placement="bottom"
      >
        <el-icon @click="refresh"> <Refresh /></el-icon>
      </el-tooltip>
    </div>
    <div class="r">
      <div class="q" @click="sen">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="全屏"
          placement="bottom"
        >
          <el-icon><FullScreen /></el-icon>
        </el-tooltip>
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
import screenfull from 'screenfull'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
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
const sen = () => {
  screenfull.toggle()
}
const refresh = () => {
  router.go(0)
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
    .el-icon {
      width: 45px;
      height: 60px;
    }
    .el-icon:hover {
      background-color: rgb(0, 123, 255);
    }
  }
  .r {
    width: 200px;
    height: 60px;
    float: right;
    .q {
      width: 35px;
      height: 60px;
      margin-left: 25px;
      float: left;
      .el-icon {
        margin: 22px 10px 15px 10px;
        font-size: 1rem;
        color: #fff;
      }
    }

    .t {
      margin: 14px 10px 0 25px;
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
.q:hover {
  width: 45px;
  background-color: rgb(0, 123, 255);
}
</style>
