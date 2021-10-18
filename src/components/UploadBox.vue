<template>
  <div class="UploadBox">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :http-request="modeUpload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button @click="upload">点击上传文件</el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UploadBox',
  methods:{
    modeUpload: function(item) {
      // console.log(item.file);
      this.mode = item.file
    },
    
    upload: function() {
      let fd = new FormData()
      fd.append('templateFile', this.mode)
      
      try{
          axios.post('/upload', fd, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(response => {
            console.log(response.data);
        })
      }catch(err){
        console.log(err)
      }
    },
  }
}
</script>