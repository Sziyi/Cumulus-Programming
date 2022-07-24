<template>
  <div>
    <el-card>
      <el-button
        type="primary"
        style="margin-left: 16px"
        size="small"
        @click="add"
      >
        新增
      </el-button>
      <div class="fl" v-for="(item, index) in getsort" :key="index">
        <div class="zuo">
          <span>{{ item.name }}</span>
        </div>
        <br />
        <br />
        <div class="you">
          <el-button size="small" type="text">推荐商品</el-button>
          <el-switch v-model="value"></el-switch>

          <el-button size="small" type="text">修改</el-button>
          <el-button size="small" type="text">删除</el-button>
        </div>
      </div>

      <el-drawer
        ref="drawerRef"
        v-model="dialog"
        :before-close="handleClose"
        direction="rtl"
        custom-class="demo-drawer"
      >
        <div class="demo-drawer__content">
          <el-form :model="form1">
            <h4>新增</h4>
            <el-form-item label="分类名称" :label-width="formLabelWidth">
              <el-input
                v-model="form1.name"
                autocomplete="off"
                placeholder="分类名称"
              />
            </el-form-item>
          </el-form>
          <div class="demo-drawer__footer">
            <el-button type="primary">提交</el-button>
            <el-button @click="cancelForm">取消</el-button>
          </div>
        </div>
      </el-drawer>
    </el-card>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive, ref } from 'vue'
const getsort = ref([])
const store = useStore()
const form1 = reactive({
  name: ''
})
const value = ref(true)
const dialog = ref(false)
const fl = async () => {
  const res = await store.dispatch('user/getsort')
  // console.log(res)55
  getsort.value = res.data
  console.log(res.data)
}
fl()
const add = () => {
  dialog.value = true
}
</script>
<style scoped lang="scss">
.fl {
  width: 100%;
  height: 40px;
  .zuo {
    float: left;
    margin-left: 20px;
    margin-top: 5px;
    span {
      font-size: 15px;
    }
  }
  .you {
    float: right;
  }
}
.demo-drawer__footer {
  margin-top: 400px;
}
</style>
