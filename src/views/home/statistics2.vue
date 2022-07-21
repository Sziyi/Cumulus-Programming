<template>
  <div class="statistics">
    <div class="top">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>店铺及商品提示</span>
            <span class="bo"><span>店铺及商品提示</span></span>
          </div>
        </template>
        <div class="r">
          <div class="text">
            <el-card
              shadow="hover"
              style="padding-right: 10px; padding-left: 10px"
              v-for="(item, index) in data"
              :key="index"
            >
              <span class="value">{{ item.value }}</span
              ><br />
              <span class="label">{{ item.label }}</span>
            </el-card>
          </div>
        </div>
      </el-card>
    </div>
    <div class="bottom">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>交易提示</span>
            <span class="bo"><span>需要立即处理的交易订单</span></span>
          </div>
        </template>
        <div class="r">
          <div class="text">
            <el-card
              shadow="hover"
              style="padding-right: 10px; padding-left: 10px"
              v-for="(item, index) in data1"
              :key="index"
            >
              <span class="value">{{ item.value }}</span
              ><br />
              <span class="label">{{ item.label }}</span>
            </el-card>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()
const data = ref([])
const data1 = ref([])
const statistics2 = async () => {
  const res = await store.dispatch('user/statistics2')
  console.log(res)
  data.value = res.data.goods
  data1.value = res.data.order
  console.log(data1.value)
}
statistics2()
</script>
<style scoped lang="scss">
.statistics {
  .top {
    margin-bottom: 0.75rem;
    max-width: 100%;
    flex: 0 0 50%;
  }
  .card-header {
    .bo {
      display: inline-block;
      width: 150px;
      height: 20px;
      border: 1px solid red;
      font-size: 13px;
      color: red;
      float: right;
      text-align: center;
      border-radius: 5px;
      line-height: 20px;
    }
  }
  .r {
    display: flex;
    width: 100%;
    .text {
      width: 100%;
      .label {
        font-size: 12px;
        margin-top: 10px;
        margin-left: 15px;
      }
      .value {
        font-size: 32px;
        margin-left: 19px;
      }
      .el-card {
        float: left;
        max-width: 25%;
        border-width: 0px;
        margin-left: 5px;
        --tw-bg-opacity: 1;
        background-color: rgba(246, 246, 246, var(--tw-bg-opacity));
      }
    }
  }
}
</style>
