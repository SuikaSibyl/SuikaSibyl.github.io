<template>
  <div id="app">
    <el-row  class="row-header" type="flex" justify="center" >
      <el-col :span="15" >
        <h2 class='header-h2'>{{ pj_name }}</h2>
      </el-col>
    </el-row>
    
    <el-row style="background:#eeeeee" type="flex" justify="center" >
      <el-col :span="15">
        <br>
        <h1 style="font-size:50px" >Hello, come and have your image watermarked...</h1>
        <p>This is my homework for DAM course, using two different kind of strategies to embed watermarks.</p>
        <br>
      </el-col>
    </el-row>
    
    <el-row style="height:450;background:#eeeeee" type="flex" justify="center" >
        <el-col :span="15">
            <el-card style="width:100%" class="box-card">
                <div slot="header" class="clearfix">
                    <span><h2>Watermark Embedding</h2></span>
                </div>
                <el-steps :active="active" finish-status="success">
                    <el-step title="Step 1" description="Choose your watermark image"></el-step>
                    <el-step title="Step 2" description="Choose a method & your image to be watermarked"></el-step>
                    <el-step title="Step 3" description="Success!"></el-step>
                </el-steps>
                
                <el-row><el-col :span="16"><div class="grid-content"></div></el-col></el-row>

                <el-row style="margin-top=10px" type="flex" justify="center">
                    <el-card shadow="always" v-show="step==0">
                        <h2>Please choose an image as watermark.</h2>
                        <UploadPond :usage=1></UploadPond>
                    </el-card>
                    <el-card shadow="always" v-show="step==1">
                        <h2>Stenography Watermark-Embedding</h2>
                        <UploadPond :usage=2></UploadPond>
                    </el-card>
                    <el-card shadow="always" v-show="step==1">
                        <h2>Haar Watermark-Embedding</h2>
                        <UploadPond :usage=3></UploadPond>
                    </el-card>
                    <el-card shadow="always" v-show="step==2">
                        <h2>Congratulation!</h2>
                        <span>Your image is now on proccess! Please wait for response...</span>
                    </el-card>
                    <el-card shadow="always" v-show="step==3">
                        <h2>One more image to be processed?</h2>
                        <span>Press next button to start again!</span>
                    </el-card>
                </el-row>

                <el-row><el-col :span="16"><div class="grid-content"></div></el-col></el-row>
                
                <el-row type="flex" class="row-bg" justify="end">  
                     <el-button style="margin-top: 12px;" @click="next">Next Step</el-button> 
                </el-row>
        
          </el-card>
      </el-col>
    </el-row>

    <el-row style="height:450;background:#eeeeee"><el-col :span="16"><div class="grid-content"></div></el-col></el-row>
                
            <el-row style="background:#eeeeee" type="flex" justify="center">
                <el-col :span="15">
                <el-card style="width:100%" class="box-card">
                    <div slot="header" class="clearfix">
                        <span><h2>Watermark Extraction</h2></span>
                    </div>
                    <el-row style="margin-top=10px" type="flex" justify="center">
                        <el-card shadow="never">
                            <h2>Extract your watermark here!</h2>
                            <span> for Stenography <p></p></span>
                            <UploadPond :usage=4></UploadPond>
                        </el-card>
                        <el-card shadow="never">
                            <h2>Extract your watermark here!</h2>
                            <span> for Haar <p></p></span>
                            <UploadPond :usage=5></UploadPond>
                        </el-card>
                    </el-row>
                </el-card>
      </el-col>
    </el-row>
         
    <el-row style="background:#eeeeee" type="flex" justify="center" >
      <el-col :span="15" >
        <el-divider></el-divider>
        <p>© 2020 Haolin Lu, DAM HW4.</p>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import UploadPond from '@/components/UploadPond.vue'

import Vue from 'vue';
    export default {
        data() 
        {
            return {
                headings:['Stenography Watermark-Embedding'],
                pj_name: 'Watermark Embedding & Extraction',
                active: 0,
                step: false,
            };
        },
        methods: {
            submitForm(formName) 
            {
                this.$refs[formName].validate((valid) => 
                    {
                        if (valid) 
                        {
                            alert('Name:'+this.nameValidateForm.name+';Password:'+this.nameValidateForm.password);
                        } else 
                        {
                            console.log('error submit!!');
                            return false;
                        }
                    }
                );
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            next() {
                if (this.active++ > 2) this.active = 0
                this.step = this.step + 1
                if(this.step==4) this.step=0
            },
        },
        components: {
            UploadPond,
        }
    }
</script>

<style>
  .el-card{
    background:#fbfbfb;
    width: 300px;
    display: inline-block;
    margin: 0.3em;
    border-radius:20px;
  }
  .grid-content {
    /* background: rgb(14, 214, 131); */
    border-radius: 4px;
    min-height: 80px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .header-h2{
 color:#fff ;
  }
.row-header{
  background:#409eff;
}
</style>