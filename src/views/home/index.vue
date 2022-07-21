<template>
  <div class="home">
    <div class="row">
      <div class="col" v-for="(item, index) in data" :key="index">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span class="zf">{{ item.title }}</span>
              <span class="l"
                ><span class="t">{{ item.unit }}</span></span
              >
            </div>
          </template>
          <div class="text">
            <span class="te">{{ item.value }}</span>
            <div
              class="el-divider--horizontal"
              style="--el-border-style: solid"
            ></div>
          </div>
          <div class="card-header b">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </div>
    </div>
    <div class="z">
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#409EFC" class="no-inherit"> <User /> </el-icon></i
          ><br />
          <span class="title">用户</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#8A2BE2" class="no-inherit">
              <ShoppingCart /> </el-icon></i
          ><br />
          <span class="title">商品</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#BA55D3" class="no-inherit">
              <Tickets /> </el-icon></i
          ><br />
          <span class="title">订单</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#00CED1" class="no-inherit">
              <ChatDotSquare /> </el-icon></i
          ><br />
          <span class="title">评价</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#DC143C" class="no-inherit">
              <Picture /> </el-icon></i
          ><br />
          <span class="title">图库</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#5F9EA0" class="no-inherit"> <Bell /> </el-icon></i
          ><br />
          <span class="title">公告</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon class="no-inherit"> <SetUp /> </el-icon></i
          ><br />
          <span class="title">配置</span>
        </el-card>
      </div>
      <div class="z1">
        <el-card shadow="hover">
          <i class="el-icon"
            ><el-icon color="#DAA520" class="no-inherit">
              <Files /> </el-icon></i
          ><br />
          <span class="title">优惠券</span>
        </el-card>
      </div>
    </div>
    <div class="bottom">
      <div class="tj">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>订单统计</span>
              <div>
                <span class="tag">近一个月</span>
                <span class="tag">1</span>
                <span class="tag">1</span>
              </div>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </div>
        </el-card>
      </div>
      <div class="right">
        <statistics></statistics>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import statistics from './statistics2'
import { ref } from 'vue'
const store = useStore()
const data = ref([])

const statistics1 = async () => {
  const res = await store.dispatch('user/statistics1')
  // console.log(res)
  data.value = res.data.panels
}

statistics1()
</script>
<style scoped lang="scss">
.home {
  margin: 15px;
  .row {
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    .col {
      max-width: 25%;
      flex: 0 0 25%;
      padding-right: 10px;
      padding-left: 10px;
      .card-header {
        display: flex;
        justify-content: space-between;
        .l {
          display: inline-block;
          width: 25px;
          height: 20px;
          border: 1px solid #b3e19d;
          text-align: center;
          .t {
            color: #67c23a;
            line-height: 20px;
            font-size: 12px;
          }
        }
      }
      .text {
        .te {
          font-size: 1.875rem;
          line-height: 2.25rem;
          justify-content: space-between;
        }
        .el-divider--horizontal {
          display: block;
          height: 1px;
          width: 100%;
          margin: 24px 0;
          border-top: 1px var(--el-border-color) var(--el-border-style);
        }
      }
      .b {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
  .z {
    display: flex;
    margin-top: 1.25rem;
    .z1 {
      max-width: 12.5%;
      flex: 0 0 12.5%;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  .bottom {
    margin-top: 1.25rem;
    display: flex;
    .tj {
      max-width: 50%;
      flex: 0 0 50%;
      justify-content: space-between;
      padding-right: 10px;
      padding-left: 10px;
      .tag {
        margin-right: 8px;
        background-color: var(--el-color-info-light-9);
        border-radius: var(--el-border-radius-base);
        color: var(--el-color-info);
        cursor: pointer;
        display: inline-block;
        font-size: var(--el-font-size-base);
        line-height: var(--el-font-size-base);
        padding: 7px 15px;
        transition: var(--el-transition-all);
        font-weight: 700;
      }
    }
    .right {
      max-width: 50%;
      flex: 0 0 50%;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
}
</style>
