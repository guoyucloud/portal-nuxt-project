<template>
  <div class="uuid">
    <div class="uuid-content">
      <div class="uuid-content-id" :data-clipboard-text="uuidData">
        {{uuidData}}
      </div>
      <el-row>
        <el-button
            class="uuid-content__button"
            @click="createUuid"
            v-clipboard:copy="uuidData"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
        >
          生成并复制uuid
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import {v4}  from 'uuid'
export default {
  name: "uuid",
  components: {},
  data() {
    return {
      uuidData: ''
    };
  },
  methods: {
    createUuid(){
      this.uuidData = v4();
    },
    onCopy: function (e) {
      this.$message({
        message: '复制成功【'+ e.text +'】，请务必确认是否复制正确！！！',
        type: 'success'
      });
    },
    onError: function (e) {
      this.$message({
        message: '复制失败',
        type: 'error'
      });
    }
  }
};
</script>
<style lang="scss">
.uuid{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .uuid-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .uuid-content-id{
      font-size: 18px;
      min-width: 40vw;
      min-height: 40px;
      background-color: wheat;
      margin-bottom: 20px;
      text-align: center;
      line-height: 40px;
      color: red;
    }
    .uuid-content__button{
      /*background-color: rgb(197,48,39);*/
      color: #FFF;
      background-color: rgba(197,0,0,0.6);
      border-color:rgba(197,48,39,0.6);
    }
    .uuid-content__button:hover{
      /*background-color: rgb(197,48,39);*/
      color: #FFF;
      background-color: rgba(197,48,39,1);
      border-color:rgba(197,48,39,1);
    }
  }
}
</style>
