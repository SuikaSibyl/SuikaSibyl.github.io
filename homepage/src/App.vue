<template>
    <el-row  class="row-header" type="flex" justify="center" >
      <el-col :xs="16" :sm="12" :md="12" :lg="14" :xl="12">
        <h2 class='header-h2'>{{ title_name }}</h2>
      </el-col>
    </el-row>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <el-row style="background:#ffffff" type="flex" justify="center" >
      <el-col :xs="16" :sm="12" :md="12" :lg="14" :xl="12">
        <el-divider></el-divider>
        <p style="text-align:center">Copyright © Haolin Lu. 2022</p>
      </el-col>
    </el-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
        title_name: 'Haolin Lu \'s Homepage',
    };
  },
  methods: {
  },
}
</script>

<style>

@import "assets/font.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
}

</style>