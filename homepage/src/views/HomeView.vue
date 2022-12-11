<template>
  <div class="home">
    <!-- HEADER -->
    <el-row class="row" style="padding-top: 40px;padding-bottom: 5px;background:#ffffff" type="flex" justify="center" >
      <el-col :xs="16" :sm="12" :md="12" :lg="14" :xl="12" style="background:#ffffff">
        <h1 style="font-size:50px;  word-wrap:break-word; word-break:break-all; font-family:AliMedium;" >{{ welcome }}</h1>
        <br/>
        <el-container>
          <el-row class="row-bg" justify="space-between" align="top">
            <el-col :xs="16" :sm="16" :md="8" :lg="6" :xl="5">
              <el-image class="el-card" style="width: 100%; width: 100%" src="https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/avater.jpg" :fit="fit" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="14" :lg="16" :xl="18">
              <p class="content-font" style="font-size: 100%;">
                I am a first year master student of Computer Science and Engineering at UC San Diego.
                My research interests are in Computer Graphics.
              </p>
              <p class="content-font" style="font-size: 100%;">
                I received my bachelor degree in Digital Media Technology from Zhejiang University in 2022, advised
                by Prof. <a href="http://www.cad.zju.edu.cn/home/rwang/" target="_blank">Rui Wang</a>. 
                I also worked with Prof. <a href="http://www.ycwu.org/" target="_blank">Yingcai Wu</a> on visualization in virtual reality environment.
                During my undergraduate years, I worked at <a href="https://www.lightspeed-studios.com/" target="_blank">Tencent Lightspeed and Quantum Studios</a>, 
                <a href="https://www.raysengine.com/" target="_blank">RaysEngine</a>, <a href="https://www.neteasegames.com/" target="_blank">Netease
                Interactive Entertainment</a> as an Technical Artist or Engine Programmer intern.
              </p>
              <p class="content-font" style="font-size: 100%;">
                Besides academic interests, I am also an amateur artist.
              </p>
              <el-row class="row-bg" justify="space-between" align="top">
                <el-col class="keys-col" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <a href="https://github.com/SuikaSibyl" target="_blank">➤ Github</a>
                  &nbsp;
                  &nbsp;
                  <a href="https://github.com/SuikaSibyl" target="_blank">➤ CV</a>

                    <!-- <span class="key">{{name}}:</span>
                    <a class="value" v-if="isUrl(value)" :href="value" target="_blank">{{value | simplifyUrl}}</a>
                    <span v-else>{{value}}</span> -->
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-container>
        <br>
      </el-col>
    </el-row>
    <!-- Publications -->
    <el-row class="row" style="padding-top: 0px;padding-bottom: 10px;background:#ffffff" type="flex" justify="center" >
      <el-col :xs="16" :sm="12" :md="12" :lg="14" :xl="12">
        <el-divider></el-divider>
        <h2 style="font-size:30px;  word-wrap:break-word; word-break:break-all; font-family:AliBold;" >Publications</h2>
        <el-row class="row-bg" justify="space-between" align="top">
          <el-card shadow="never" key = "TIVEE: Visual Exploration and Explanation of Badminton Tactics in Immersive Visualizations">
            <el-row class="row-bg" justify="space-between" align="top">
              <el-col :xs="24" :sm="24" :md="8" :lg="2" :xl="2">
                <el-image style="margin-bottom: 0.5em;" src="https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_vis.png" fit="fill" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="21" :xl="21">
                <h2 style="font-size:1em; margin-top: 0px; margin-bottom: 0px;">TIVEE: Visual Exploration and Explanation of Badminton Tactics in Immersive Visualizations</h2>
                <p style="font-size:0.9em; margin-top: 0.2em; margin-bottom: 0px;">Xiangtong Chu, Xiao Xie, Shuainan Ye, Haolin Lu, Hongguang Xiao, Zeqing Yuan, Zhutian Chen, Hui Zhang, Yingcai Wu</p>
                <p style="font-size:0.9em; margin-top: 0.4em; margin-bottom: 1em;"><i>IEEE VIS 2021</i></p>
                <el-button size="small"><a href="https://ieeexplore.ieee.org/document/9557225" target="_blank" style="text-decoration: none;">Paper</a></el-button>
                <el-button size="small"><a href="https://virtual.ieeevis.org/year/2021/paper_v-full-1038.html" target="_blank" style="text-decoration: none;">Video</a></el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
    <!-- Projects -->
    <el-row class="row" style="padding-top: 0px;padding-bottom: 10px;background:#ffffff" type="flex" justify="center" >
      <el-col :xs="16" :sm="12" :md="12" :lg="14" :xl="12">
        <el-divider></el-divider>
        <h2 style="font-size:30px;  word-wrap:break-word; word-break:break-all; font-family:AliBold;" >Projects</h2>
        <el-row class="row-bg" justify="space-between" align="top">
          <el-col v-for="(project, i) in project_list" :key=i :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-row class="row-bg" justify="space-between" align="top">
              <el-card shadow="never" key = "TIVEE: Visual Exploration and Explanation of Badminton Tactics in Immersive Visualizations">
                <el-row class="row-bg" justify="space-between" align="top">
                  <el-col :xs="24" :sm="24" :md="8" :lg="2" :xl="2">
                    <el-image style="width=100%; margin-bottom: 0.5em;" :src=project.cover_url :fit="fill" />
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="14" :lg="21" :xl="21">
                    <h2 style="font-size:1em; margin-top: 0px; margin-bottom: 0px;">{{project.name}}</h2>
                    <p style="font-size:0.9em; margin-top: 0.5em; margin-bottom: 1em;">{{project.description}}</p>
                    <el-button size="small" v-if="project.proj_page"><a :href=project.proj_page target="_blank" style="text-decoration: none;">Project Page</a></el-button>
                    <el-button size="small" v-if="project.video"><a :href=project.video target="_blank" style="text-decoration: none;">Video</a></el-button>
                    <el-button size="small" v-if="project.paper_chinese"><a :href=project.paper_chinese target="_blank" style="text-decoration: none;">Paper (Chinese)</a></el-button>
                    <el-button size="small" v-if="project.code"><a :href=project.code target="_blank" style="text-decoration: none;">Code</a></el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-row>

              <!-- <el-card shadow="never">
                <h2>{{project.name}}{{project.id}}</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <el-button size="small">View details >></el-button>
              </el-card> -->
            </el-col>
        </el-row>
      </el-col>
    </el-row>
     <!-- Artworks -->
     <el-row class="row" style="padding-top: 0px;padding-bottom: 10px;background:#ffffff" type="flex" justify="center" >
      <el-col :xs="16" :sm="12" :md="12" :lg="14" :xl="12">
        <el-divider></el-divider>
        <h2 style="font-size:30px;  word-wrap:break-word; word-break:break-all; font-family:AliBold;" >Portfolio</h2>
          <!-- Video Game -->
          <h2 style="font-size:20px;  word-wrap:break-word; word-break:break-all; font-family:AliBlack;" >▶ Video Games</h2>
          <el-row class="row-bg" justify="space-between" align="top">
          <el-col v-for="(game, i) in game_list" :key=i :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-row class="row-bg" justify="space-between" align="top">
              <el-card shadow="never" key = "TIVEE: Visual Exploration and Explanation of Badminton Tactics in Immersive Visualizations">
                <el-row class="row-bg" justify="space-between" align="top">
                  <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="2">
                    <el-image style="width=100%; margin-bottom: 0.5em;" :src=game.cover :fit="fill" />
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="14" :lg="19" :xl="21">
                    <h2 style="font-size:1.05em; margin-top: 0px; margin-bottom: 0px;">{{game.name}}</h2>
                    <p style="font-size:0.9em; margin-top: 0.5em; margin-bottom: 1em;">{{game.description}}</p>
                    <el-button size="small" v-if="game.video"><a :href=game.video target="_blank" style="text-decoration: none;">Video</a></el-button>
                    <el-button size="small" v-if="game.download_link"><a :href=game.download_link target="_blank" style="text-decoration: none;">Download</a></el-button>
                  </el-col>
                </el-row>
              </el-card>
            </el-row>
          </el-col>
          <el-col xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h2 style="font-size:20px;  word-wrap:break-word; word-break:break-all; font-family:AliBlack;" >▶ Selected Artworks</h2>
            <water-fall width="250px" class="container" :data=artworks :key='waterfall_id'>
              <template #default="item">
                <div class="card">
                  <el-image style="margin: 0.em;" :src="item.src" fit="scale-down" @click="preview(item.src, $event)" @load="onImgLoad($event)" loading="lazy" />
                </div>
              </template>
            </water-fall>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import WaterFall from 'kuan-vue-waterfall';
import photoSwipe from 'kuan-vue-photoswipe';

export default {
  name: 'HomeView',
  components: {
    WaterFall,
  },
  data () {
    return {
      waterfall_id: 1,
      payload: {
        page: 1,
        size: 18,
      },
      total: 0,
        headings:['1Heading','2Heading','3Heading', '4Heading','5Heading','6Heading'],
        welcome: 'Haolin Lu │ 鲁昊霖',
        title_name: 'Project Name',
        hdgd: '270px',
        project_list: [
            { 
              id: 10, 
              name: 'A Priori Frequency Analysis Based Real-Time Denoiser',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_aaf.png',
              proj_page: 'https://suikasibyl.github.io/CSE274-RealtimeDenoiser-WebPage',
              code: 'https://github.com/SuikaSibyl/SIByLEngine2022/commit/5e22fb2d1d25090dfa3c49761c78e0dc9522d4fb',
              description: 'Re-implemented some papers of Axis-Aligned Filter and Multiple Axis-Aligned filter. Construct\
              a real-time ray tracing application with real-time denoiser. Implemented in Vulkan with the ray tracing extension.'
            },
            {
              id: 9,
              name: 'SIByL Engine',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_hair.png',
              code: 'https://github.com/SuikaSibyl/SIByLEngine2022',
              description: 'A personal toy engine, supporting many of my projects. Multiple version iterations since 2021.\
              In the hair demo, implemented many features like TAA and dithered soft edges, anisotropic materials, etc.'
            },
            {
              id: 8,
              name: 'PBD Based Real-Time Rope System',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover-rope.png',
              video: 'https://youtu.be/mlxybQqx7JI',
              description: 'A real-time interactive rope simulation system in Unreal Engine 4 using C++.\
              Self-contained and engine-independent system from collision detection, acceleration structure to rope system,\
              which uses a hybrid approach with two simulation subsystems: PBD based dynamic rope & geometry based taut rope).'
            },
            { 
              id: 7,
              name: 'GPU-Driven Real-time Particle System Culling Rendering Pipeline',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_particlesystem.png',
              video: 'https://youtu.be/5IFsyKgNGTc',
              description: 'Selected as outstanding undergraduate thesis. Proposed a new method for real-time particle system rendering.\
              The algorithm taking advantages of the Mesh shader feature in Nvidia GPU. It first fast clusters all the dynamic particles\
              and then do heuristic cluster-wise culling &automatic LoD switching. Implemented the algorithm in Vulkan from scratch.\
              Showing a significant improvement of performance adopting the method.',
              paper_chinese: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/3180101046-%E9%B2%81%E6%98%8A%E9%9C%96-GPU%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%AE%9E%E6%97%B6%E7%B2%92%E5%AD%90%E7%B3%BB%E7%BB%9F%E5%89%94%E9%99%A4%E7%BB%98%E5%88%B6%E7%AE%A1%E7%BA%BF%E7%A0%94%E7%A9%B6%E4%B8%8E%E5%AE%9E%E7%8E%B0%20%282%29.pdf',
            },
            {
              id: 6,
              name: 'Implementation of Real-Time Rendering with Many Polygonal Area Lights',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_manylight.png',
              code: 'https://github.com/SuikaSibyl/XiguaGraphic',
              video: 'https://youtu.be/huB4weoudY4',
              description: 'Re-implemented the SIGGRAPH paper Analytic Spherical Harmonic Gradients for Real-Time Rendering with Many Polygonal Area Lights.\
              Use SSDO to add GI. Support traslucent material under multi polygon lights, which is not mentioned in the paper.'
            },
            {
              id: 5,
              name: 'Implementation of Real-time Neural Super-Resolution',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_nssr.png',
              code: 'https://github.com/SuikaSibyl/ReproduceNSRR',
              video: 'https://www.bilibili.com/video/BV14f4y1g7xD/?share_source=copy_web&vd_source=dd17b32e7f12a9a9090ecba3ea7c6c5c',
              description: 'Re-implement the paper Neural Supersampling for Real-time Rendering (SIGGRAPH 2020) by Pytorch.\
              The paper proposed a neural network using Temporal methods (which is also used by DLSS2.0) and realized real-time supersampling.\
              The author did not open source the code and database, so I implemented from scratch and created my own dataset using Unity.'
            },
            {
              id: 4,
              name: 'CUDA Path Tracer',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_raytracer.png',
              code: 'https://github.com/SuikaSibyl/XiguaGraphic',
              video: 'https://www.bilibili.com/video/BV1pF411e7Na',
              description: ' A CUDA based Path Tracer with BVH accleration. Embedded in the real-time renderer with progressive Monte-Carlo convergence.\
              The real-time rasterizer part includes PCF Soft Shadow, the Split Sum Approximation IBL, and Post processing effects like SSAO & SSDO. '
            },
            {
              id: 3,
              name: 'Pontoon Bride Simulation in Virtual Reality',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_vrbridge.png',
              video: 'https://www.bilibili.com/video/BV1K44y147B5',
              description: 'A pontoon bridge simulation system on Unity + HTC Vive. Designed three levels\
              of bounyancy computation and an algorithm to enhance the sense of floating via camera pose manipulation.'
            },
            {
              id: 2,
              name: 'Implicit Function Ray Marcher & Morphing',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_implicit.png',
              code: 'https://github.com/SuikaSibyl/ImplicitFunctionRayMarcher',
              video: 'https://www.bilibili.com/video/BV1MT4y1Z7UR',
              description: 'Re-implement the paper Real-Time Ray Tracing of Implicit Surfaces on the GPU to do implicit function ray marching.\
                Implemented in OpenGL fragment shader, with simple lighting & shadowing and 60+ fps on RTX 2070s.\
                Approximate meshes with metaballs and perform 3D morphing by interpolation between two implicit functions.'
            },
            {
              id: 1,
              name: 'Free Form Deformation Editor',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_freeformdeformation.png',
              code: 'https://github.com/SuikaSibyl/FreeFormDeformation',
              description: 'Iteractive Free Form Deformation Edtor implemented with OpenGL & Qt.'
            },
            {
              id: 0,
              name: 'OpenGL FPS Demo',
              cover_url: 'https://imagehost-suikasibyl-us.oss-us-west-1.aliyuncs.com/cover_fps.png',
              code: 'https://github.com/SuikaSibyl/SimpleFps',
              video: 'https://www.bilibili.com/video/BV1RT4y1R7dT',
              description: 'A simple FPS game based on OpenGL from scratch. Implement shadow mapping,\
              normal mapping, ui, sound effects, collision physics, and simple animation.',
            },
        ],
        game_list: [
            {
              id: 2,
              name: "Sisphury's Illusion | Triangle",
              description: 'What happens when visual illusion becomes reality? Sisphury\'s illusion is a visual illusion \
              puzzle game in which players can fully control the perspective. All visual dislocations in the game will \
              become physical reality. You need to find the right angle of view in the game, so that some isolated objects can \
              connect and influence each other.',
              cover: "https://i.loli.net/2021/10/25/ofG4Nv23RQEKjUu.png",
              video: "https://www.bilibili.com/video/BV1uM4y1N75u",
              download_link: 'https://drive.google.com/file/d/11l420ZTeBqP5pFXheBix4msmpqa8ogsP/view?usp=sharing',
            }, 
            {
              id: 1,
              name: "Fimaker | Light Studio",
              description: 'Have you ever thought about what will happen when the films are stacked and projected?\
              FILMAKER is a platform puzzle game. You can record your operation in advance,\
              superimpose and project the recorded film on the screen, and then, with the help of the shadow,\
              operate the noumenon villain to go through the barriers. You need to adjust the recorded film and use some characteristics of the film\
              to reach the end.',
              cover: "https://i.loli.net/2021/10/24/YpIk7AEcymHGeuZ.png",
              video: "https://www.bilibili.com/video/BV1Qg411M77x",
              download_link: 'https://drive.google.com/file/d/1vXmFbzuTg6zVeHxZ5Y88oAwplTRhsBzi/view?usp=sharing',
            }, 
            {
              id: 0,
              name: "For Hue | Light Studio",
              description: 'For Hue is a journey full of sense of achievement! Collect the lost color crystals,\
              change the color of yourself and the objects around you, light up the color tree lights on the journey,\
              and save the world where the color has disappeared! Use color to go through dangerous environments and complex mechanisms!',
              cover: "https://i.loli.net/2021/10/24/eQD9MGUJvA2B8LO.jpg",
              video: "https://www.bilibili.com/video/BV1xf4y1t75c"
            }
        ],
        artworks: [
          { src: 'https://i.loli.net/2021/10/23/BCMcXiIph73eYF8.png', labels: ["Modeling"]},
          { src: 'https://i.loli.net/2021/10/23/wbn369uU2DGxHje.png', labels: ["Modeling"]},
          { src: 'https://i.loli.net/2021/10/23/JVPRwDgu6qUYGmr.png', labels: ["Modeling"]},
          { src: 'https://i.loli.net/2021/10/23/mUYPrNWqX5nQ1Tu.png', labels: ["Modeling"]},
          { src: 'https://i.loli.net/2021/10/23/mUYPrNWqX5nQ1Tu.png', labels: ["Modeling"]},
          { src: 'https://i.loli.net/2021/10/23/7O9JG3LTdzfwuin.png', labels: ["Modeling"]},
          { src: 'https://i.loli.net/2021/10/23/1GkmDKPVbgoascB.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/cTYf7JM3LOVUSyN.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/VpkBD5NWS1UwEAz.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/oZfdNiRuTJqlOBs.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/nARaJzQ3H4gGp6b.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/Lcd1EfhyXlx5zOH.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/FjWvlpqgbncDo8i.jpg', labels: ["Photo"]},
          { src: 'https://i.loli.net/2021/10/23/QXpbJdTa9qc2WPl.png' },
          { src: 'https://i.loli.net/2021/10/23/vsXxmVglMoAdYn2.png' },
          { src: 'https://i.loli.net/2021/10/23/jn74uLzUdWkaV9X.png' },
          { src: 'https://i.loli.net/2021/10/23/DfMRiIVBO23Nbnz.png' },
          { src: 'https://i.loli.net/2021/10/23/MUwqdLYJORotBfZ.png' },
          { src: 'https://i.loli.net/2021/10/23/LMF4N6ZvlkHrjy2.jpg' },
          { src: 'https://i.loli.net/2021/10/24/FWNcn6xv4Pser9R.png' },
          { src: 'https://i.loli.net/2021/10/24/ALRbBroslZShG8p.png' },
          { src: 'https://i.loli.net/2021/10/24/5Kpiu1Lh8XvCway.png' },
          { src: 'https://i.loli.net/2021/10/24/13W5qvXSfOThk2V.png' },
          { src: 'https://i.loli.net/2021/10/24/xrVLzXESaAPGcFs.png' },
          { src: 'https://i.loli.net/2021/10/23/HbYW3q46um8ZK5g.jpg' },
          { src: 'https://i.loli.net/2021/10/23/nYljhQCg1rDMKAN.jpg' },
          { src: 'https://i.loli.net/2021/10/23/ehQfG2CYLSbX1pA.jpg' },
          { src: 'https://i.loli.net/2021/10/23/lmP1boXuaTSk6Dj.jpg' },
          
        ],
        loaded_works: 0,
    };
  },
  methods: {
    refresh(){
			this.waterfall_id++;
		},
    preview(url) {
      photoSwipe.preview(url);
    },
    onImgLoad() {
      console.log("Hello");
      this.loaded_works++;
      if(this.loaded_works==28)
        this.refresh();
      // let that = this;
      // that.waterfall_id = that.waterfall_id + 1;
    }
  },
  mounted() {
    let that = this;
    window.onresize = function windowResize() {
      var w = window.innerWidth
      var h = 270
      if (w > 1180) {
        h = 270
      } else {
        h = 0.22 * w
      }
      that.hdgd = h + 'px'
      console.log(that.hdgd)
    }
  }
}
</script>

<style>
  .el-card{
    background:#fdfdfd;
    display: inline-block;
    margin: 0.3em;
    border-radius:20px;
    width: 100%;
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
    font-family:AliHeavy;
  }
.row-header{
  background:#409eff;
}
  .content-font{
    font-family:AliRegular;
  }
  .container {
  min-height: 90vh;
}
.card {
  padding: 10px;
  background-color: white;
  border-radius: 3px;
  color: #666;
  line-height: 1.5;
  word-break: break-all;
  .img {
    width: 100%;
    margin-bottom: 5px;
    cursor: pointer;
  }
}
.halo-btn {
  margin: 100px auto;
  display: block;
}

</style>