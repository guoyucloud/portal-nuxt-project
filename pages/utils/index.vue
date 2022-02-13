<template>
  <div class="utils">
    <el-row :gutter="12" class="utils-list">
      <el-col
          :span="8"
          v-for="(item, index) in utilsListData"
          :key="index"
      >
        <el-card class="utils-list-one" shadow="hover" @click.native="routerPush({'path':item.path})">
          {{item.title}}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "utils",
  components: {},
  data() {
    return {
      utilsListData:[
        {
          'title': 'MD文档编辑器',
          'path': '/utils/editor'
        },
        {
          'title': 'uuid生成器',
          'path': '/utils/uuid'
        },
      ]
    };
  },
  methods: {
    routerPush(params){
      this.$router.push(params.path);
    }
  }
};
</script>
<style lang="scss">
.utils{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .utils-list{
    width: 80vw;
    height: 80vh;
    .utils-list-one{
      cursor: pointer;
      color: #FFF;
      background-color: rgba(197,0,0,0.6);
      border-color:rgba(197,48,39,0.6);
    }
    .utils-list-one:hover{
      /*background-color: rgb(197,48,39);*/
      color: #FFF;
      background-color: rgba(197,48,39,1);
      border-color:rgba(197,48,39,1);
    }
  }
}
</style>
