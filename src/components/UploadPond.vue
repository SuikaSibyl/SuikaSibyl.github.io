<template>
  <file-pond
        name="test"
        ref="pond"
        v-bind:allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        v-bind:server="myServer"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"/>
</template>

<script>
import axios from 'axios'
// Import Vue FilePond
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export default {
    name: 'UploadPond',
    data: function() {
        return { 
            myServer: {
            process: (fieldName, file, metadata, load) => {
                let fd = new FormData()
                fd.append('usage', this.usage)
                if(this.usage==1)
                {
                    fd.append('waterFile', file)

                    try{
                        axios.post('/upload/water', fd, {
                            headers: {
                            'Content-Type': 'multipart/form-data'
                            }
                        }).then(response => {
                            this.$refs.pond.removeFile(file)
                        })
                    }catch(err){
                        console.log(err)
                    }
                }
                else if(this.usage==2 || this.usage==3)
                {
                    fd.append('imgFile', file)

                    try{
                        axios.post('/upload/img', fd, {
                            headers: {
                            'Content-Type': 'multipart/form-data'
                            }
                        }).then(response => {
                            console.log("response!");
                            console.log(response.data);

                            const url = response.data
                            // 生成一个 a 标签
                            const a = document.createElement("a")
                            // 创建一个点击事件
                            const event = new MouseEvent("click")
                            // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
                            a.download = name || file.filename
                            // 将生成的 URL 设置为 a.href 属性
                            a.href = url
                            // 触发 a 的点击事件
                            a.dispatchEvent(event)

                            this.$refs.pond.removeFile(file)
                        })
                    }catch(err){
                        console.log(err)
                    }
                }
                else if(this.usage==4 || this.usage==5)
                {
                    fd.append('targFile', file)

                    try{
                        axios.post('/upload/target', fd, {
                            headers: {
                            'Content-Type': 'multipart/form-data'
                            }
                        }).then(response => {
                            console.log("response!");
                            console.log(response.data);

                            const url = response.data
                            // 生成一个 a 标签
                            const a = document.createElement("a")
                            // 创建一个点击事件
                            const event = new MouseEvent("click")
                            // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
                            a.download = name || file.filename
                            // 将生成的 URL 设置为 a.href 属性
                            a.href = url
                            // 触发 a 的点击事件
                            a.dispatchEvent(event)

                            this.$refs.pond.removeFile(file)
                        })
                    }catch(err){
                        console.log(err)
                    }
                }
                console.log(fieldName)
            },
            load: (source, load) => {
              // simulates loading a file from the server
              fetch(source).then(res => res.blob()).then(load);
            }

          },
          myFiles: [] };
    },
    props: {
        usage: Number
    },
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');

            // FilePond instance methods are available on `this.$refs.pond`
        }
    },
    components: {
        FilePond
    }
};
</script>

<style>

/* .filepond--panel-root {
    background-color: rgba(1,1,1,0.2);
} */

</style>