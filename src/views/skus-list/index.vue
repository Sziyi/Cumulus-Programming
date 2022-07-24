<template>
  <div>
    <el-card shadow="never" style="border: none">
      <el-button type="primary" :size="size" @click="add">新增</el-button>
      <el-button :size="size" type="danger">批量删除</el-button>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="刷新数据"
        placement="top"
      >
        <el-icon class="icon" @click="sx"><Refresh /></el-icon>
      </el-tooltip>

      <el-table
        :data="data"
        style="width: 100%; margin-top: 30px"
        v-loading="loading"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="规格名称" property="name"> </el-table-column>
        <el-table-column property="default" label="规格值" width="130" />
        <el-table-column
          property="order"
          label="排序"
          width="130"
        ></el-table-column>
        <el-table-column label="状态" width="130">
          <el-switch v-model="value1">
            <template #default="scope">
              {{ scope.row.status === '0' ? true : false }}
            </template>
          </el-switch>
        </el-table-column>
        <el-table-column class="button" label="操作">
          <template #default>
            <el-button link type="primary" size="small">修改</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-left: 365px; margin-top: 45px"
        small
        background
        layout="prev, pager, next"
        v-model:currentPage="currentPage3"
        v-model:page-size="pageSize3"
        :total="total"
        class="mt-4"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />

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
            <el-form-item label="商品名称" :label-width="formLabelWidth">
              <el-input
                v-model="form1.name"
                autocomplete="off"
                placeholder="请输入商品名称,不能超过60个字符"
              />
            </el-form-item>
          </el-form>
          <div class="demo-drawer__footer">
            <el-button type="primary">提交</el-button>
            <el-button @click="cancelForm">取消</el-button>
          </div>
        </div>
      </el-drawer>
      <div class="d"></div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

const formLabelWidth = '80px'

const dialog = ref(false)
const loading = ref(false)

const form1 = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})
const drawerRef = ref()
const cancelForm = () => {
  dialog.value = false
}

// form表单
const size = ref('small')
const data = ref([])
const store = useStore()
const total = ref('')
const currentPage3 = ref(1)
const pageSize3 = ref(10)
const skus = async () => {
  const res = await store.dispatch('user/skus')
  // console.log(res)
  data.value = res.data.list
  total.value = res.data.totalCount
}
skus()

const sx = () => {
  // router.go(0)
  skus()
}
const handleSizeChange = (size) => {
  //   pageSize3 = size
}
const handleCurrentChange = (num) => {
  //   currentPage3 = num
}
const add = () => {
  //   alert('add')
  dialog.value = true
}
</script>
<style scoped lang="scss">
.btn {
  float: right;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.button {
  .el-button {
    border: none;
  }
}
.price {
  margin-left: 13px;
}
.icon {
  float: right;
  font-size: 20px;
}
.d {
  width: 100%;
  height: 4000px;
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #ccc;
}
.el-icon.avatar-uploader-icon:hover {
  background-color: rgb(195, 193, 193);
}

.demo-drawer__footer {
  margin-top: 400px;
}
</style>
