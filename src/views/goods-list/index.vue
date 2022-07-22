<template>
  <div class="goodsList">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <!-- <el-card shadow="never" style="border: none">
          <el-form
            :inline="true"
            :model="form"
            :size="size"
            class="demo-form-inline"
          >
            <el-form-item label="关键字">
              <el-input
                v-model="form.name"
                placeholder="请输入名称"
                clearable
              />
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
          <el-button type="primary" :size="size">新增</el-button>
          <el-button :size="size" type="danger">批量删除</el-button>
          <el-button :size="size">上架</el-button>
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
                          scope.row.category
                            ? scope.row.category.name
                            : '未分类'
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
                <el-tag
                  class="ml-2"
                  type="success"
                  v-if="scope.row.status !== 0"
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
                <el-button link type="primary" size="small"
                  >设置轮播图</el-button
                >
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
            :total="24"
            class="mt-4"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
          <div class="d"></div>
        </el-card> -->
        <underReview></underReview>
      </el-tab-pane>
      <el-tab-pane label="审核中" name="second"
        ><underReview></underReview
      ></el-tab-pane>
      <el-tab-pane label="出售中" name="third">出售中</el-tab-pane>
      <el-tab-pane label="已下架" name="fourth">已下架</el-tab-pane>
      <el-tab-pane label="库存预警" name="warning">库存预警</el-tab-pane>
      <el-tab-pane label="回收站" name="bin">回收站</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useStore } from 'vuex'
import underReview from './under-review'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const size = ref('small')
// const form = reactive({
//   name: '',
//   region: ''
// })
const activeName = ref('first')
// const data = ref([])

// const store = useStore()
// 标签页
const handleClick = () => {
  console.log('123')
}
// const goods = async () => {
//   const res = await store.dispatch('user/goods')
//   console.log(res)
//   data.value = res.data.list
// }
// goods()

// const sx = () => {
//   // router.go(0)
//   goods()
// }
// const handleSizeChange = (size) => {
//   console.log(size)
// }
// const handleCurrentChange = (num) => {
//   console.log(num)
// }
</script>
<style scoped lang="scss">
.el-tabs {
  margin-top: 20px;
}
// .btn {
//   float: right;
// }
// .img {
//   width: 50px;
//   height: 50px;
//   border-radius: 5px;
// }
// .button {
//   .el-button {
//     border: none;
//   }
// }
// .price {
//   margin-left: 13px;
// }
// .icon {
//   float: right;
//   font-size: 20px;
// }
// .d {
//   width: 100%;
//   height: 4000px;
// }
</style>
