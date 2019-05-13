<template>
      <el-row class="page-product">
    <el-col :span="19">
      <crumbs :keyword="keyword"/>
      <categroy
        :types="types"
        :areas="areas"/>
      <list :list="list"/>
    </el-col>
    <el-col :span="5">
      <!-- <amap
        v-if="point.length"
        :width="230"
        :height="290"
        :point="point"/> -->
    </el-col>
  </el-row>
</template>
<script>
import Crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'
export default {
    components:{
      Crumbs,
      Categroy,
      List
  },
  data(){
    return {
      list:[],
      types:[],
      areas:[],
      keyword:'',
      point:[]
    }
  },
}
</script>
<style lang="scss" scoped>
  @import "@/assets/css/products/index.scss";
</style>
