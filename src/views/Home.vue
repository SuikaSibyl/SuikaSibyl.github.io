<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="grid-content">
          <el-col :span="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Stenography水印添加</span>
        </div>
        <div class="text item">
          <UploadPond></UploadPond>
        </div>
      </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UploadBox from '@/components/UploadBox.vue'
import UploadPond from '@/components/UploadPond.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    UploadBox,
    UploadPond,
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  /* .box-card {
    width: 480px;
  } */
</style>