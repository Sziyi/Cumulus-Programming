<template>
  <div>
    <el-card shadow="never" style="border: none">
      <el-form
        :inline="true"
        :model="form"
        :size="size"
        class="demo-form-inline"
      >
        <el-form-item label="关键字">
          <el-input v-model="form.name" placeholder="请输入名称" clearable />
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select
            v-model="form.region"
            placeholder="请选择商品分类"
            clearable
          >
            <el-option label="手机数码" value="手机数码" />
            <el-option label="运动旅行" value="运动旅行" />
            <el-option label="居家生活" value="居家生活" />
            <el-option label="智能家电" value="智能家电" />
            <el-option label="7222" value="7222" />
          </el-select>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" :size="size" @click="add">新增</el-button>
      <el-button :size="size" type="danger">批量删除</el-button>
      <el-button :size="size">下架</el-button>
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
        <el-table-column label="商品">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <img class="img" :src="scope.row.cover" />
              <div class="price">
                <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                <p>
                  <span style="color: red">￥{{ scope.row.min_price }}</span
                  ><span style="color: gainsboro">|</span
                  ><span>￥{{ scope.row.min_oprice }}</span>
                </p>
                <p style="color: gainsboro">
                  分类:<span
                    v-html="
                      scope.row.category ? scope.row.category.name : '未分类'
                    "
                  ></span>
                </p>
                <p style="color: gainsboro">
                  创建时间:{{ scope.row.create_time }}
                </p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="discount" label="实际销量" width="130" />
        <el-table-column property="sale_count" label="商品状态" width="130">
          <template #default="scope">
            <el-tag class="ml-2" type="success" v-if="scope.row.status !== 0"
              >上架</el-tag
            >
            <el-tag class="ml-2" type="danger" v-if="scope.row.status === 0"
              >仓库</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="审核状态" width="130">
          <template #default="scope">
            {{ scope.row.status === '0' ? '拒绝' : '通过' }}
          </template>
        </el-table-column>
        <el-table-column property="stock" label="总库存" width="130" />
        <el-table-column class="button" label="操作">
          <template #default>
            <el-button link type="primary" size="small">修改</el-button>
            <el-button link type="primary" size="small">商品规格</el-button>
            <el-button link type="primary" size="small">设置轮播图</el-button>
            <el-button link type="primary" size="small">商品详情</el-button>
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
            <el-form-item label="封面" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item label="商品分类" :label-width="formLabelWidth">
              <el-select v-model="form1.region" placeholder="选择所属商品分类">
                <el-option label="手机数码" value="shanghai" />
                <el-option label="运动旅行" value="beijing" />
                <el-option label="居家生活" value="beijing" />
                <el-option label="智能家电" value="beijing" />
                <el-option label="我是煞笔" value="beijing" />
                <el-option label="内衣装饰" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="商品描述" :label-width="formLabelWidth">
              <textarea></textarea>
            </el-form-item>
            <el-form-item label="单位" :label-width="formLabelWidth">
              <el-input
                v-model="form1.name"
                autocomplete="off"
                placeholder="件"
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

const imageUrl = ref('')
// form表单
const size = ref('small')
const form = reactive({
  name: '',
  region: ''
})
const data = ref([])
const store = useStore()
const total = ref('')
const currentPage3 = ref(1)
const pageSize3 = ref(10)
const onSale = async () => {
  const res = await store.dispatch('user/onSale')
  //   console.log(res)
  data.value = res.data.list
  total.value = res.data.totalCount
}
onSale()

const sx = () => {
  // router.go(0)
  onSale()
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
