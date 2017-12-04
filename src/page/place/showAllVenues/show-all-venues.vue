<template>
    <div class="place-container">
        <div class="filter">
            <div class="search-wrapper">
                    <div class="place">
          <Input  icon="ios-search" placeholder="请输入场地名称" style="width: 200px"
          :value="name"
                  ></Input>                    
                </div>
                <div class="phone">
                  <Input  icon="ios-search" placeholder="请输入场馆咨询电话" style="width: 200px"
          :value="phone"
                  ></Input>
                </div>
                <Button class="search-btn" type="ghost">筛选</Button>
            </div>
            <div class="btn-wrapper">
                <Button type="primary" v-on:click="this.clickHandler">新增场馆</Button>
            </div>
        </div>
    <Table :columns="columns"></Table>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { Input, Button, Table } from 'iview'
  import router from '../../../router'

  Vue.component('Input', Input)
  Vue.component('Button', Button)
  Vue.component('Table', Table)

  export default {
    name: 'show-all-venues',
    data () {
      return {
        columns: [
          {
            title: '序号',
            name: 'order',
            textAlign: 'left'
          },
          {
            title: '场馆ID',
            name: 'id'
          },
          {
            title: '场馆名称',
            name: 'name'
          },
          {
            title: '场馆地址',
            name: 'address'
          },
          {
            title: '照片'
          },
          {
            title: '咨询电话',
            name: 'phone'
          },
          {
            title: '备注',
            name: 'remark'
          },
          {
            title: '操作'
          }
        ],
        totalItem: 0, // 总条目个数（发请求得来）
        pageSize: 10,  // 每页个数(自己规定)
        current: 1, // 当前页码(每次点击需更新)
        datasets: [],
        name: '', // 筛选时的场地名称
        phone: '', // 筛选时的电话号码
        reqName: '', // 要post出去的场地名称
        reqPhone: '' // 要post出去的电话
      }
    },
    methods: {
      clickHandler: function (e) {
        router.push('/place/create')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.place-container
  .filter 
    box-sizing: border-box;
    height: 60px;
    padding: 15px 30px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #e5e5e5;

    div
      display: inline-block;
         
  .place
    width: 200px;
    margin-right: 30px

  .phone 
    width: 200px;
      
  .search-btn 
    margin-left: 20px;
    background-color: #fff;

  .search-wrapper 
    float: left;

  .btn-wrapper 
    float: right;
</style>