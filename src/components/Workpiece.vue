<!-- 经历 -->

<template>


    <div class="content" id="workpiece">
        <div v-for="item in workdatas.works" v-if="item.id==id">
            <div class="content about" id="about">
                <ModuleHeader :title="'My Work'" :sub-title="item.name"/>
                <a-row type="flex" justify="center" align="top">
                    <!-- 内容 -->
                    <a-col class="color-content col" :xs="24" :sm="24" :md="24" :lg="14" :xl="16">
                        <!-- title -->
                        <span data-aos="fade-in" class="title color-title">{{item.name}}</span>
                        <!-- 正文 -->
                        <vue-markdown data-aos="fade-in">{{item.md}}</vue-markdown>
                        <img v-for="image in item.images"
                            width=100%
                            alt="example"
                            :src="image.href"
                        />
                        <div class="aspect-ratio" v-for="video in item.videos">
                            <iframe id="myiframe" :src="video.src" width="100%" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="500px"> </iframe>
                        </div>
                    </a-col>
                </a-row>
            </div>

        </div>
    </div>
</template>

<script type="text/javascript" language="javascript">
	$(window.parent.document).find("#myiframe").load(function(){
		var main = $(window.parent.document).find("#myiframe");
		var thisheight = $(document).height()+30;
		main.height(thisheight);
	});
</script>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import {Module} from '@/api/user_interface';
    // tslint:disable-next-line:no-var-requires
    import VueMarkdown from 'vue-markdown';
    import api from '@/api';
    import {Rss} from '@/api/rss_interface';

    @Component({
        components: {
            ModuleHeader,
            VueMarkdown,
        },
        computed: {

        },
        created() {
            (this as any).initBlog();
        },

    })
export default class YourComponent extends Vue {
    @Prop(Number) public readonly id: number | undefined;

    private loading = true;
    private workdatas = {};
    private workdata = {};
    
    private initBlog() {
        this.workdatas = {
            works: [
            {
                id: '01',
                name: 'Cardinal Spline Editor',
                md: '# **Visit Github page**: [SuikaSibyl-CardinalSpline](https://github.com/SuikaSibyl/CardinalSpline)\
                    \nCardinal spline in Qt + OpenGL, with simple car animation.',
                images: [{href: "https://i.loli.net/2021/10/22/2XrY7cV18nmo9tF.png"}, ],
                video:[]
            },
            {
                id: '01',
                name: 'Free Form Deformation',
                md: '# **Visit Github page**: [SuikaSibyl-FreeFormDeformation](https://github.com/SuikaSibyl/FreeFormDeformation)\
                    \nFFD in Qt + OpenGL with simple animation & dynamic mesh.',
                images: [{href: "https://i.loli.net/2021/10/22/cCxDKugFLUGianE.png"}, ],
                videos:[]
            },
            {
                id: '01',
                name: 'Implicit Function RayMarcher',
                md: '# **Visit Github page**: [SuikaSibyl-ImplicitFunctionRayMarcher](https://github.com/SuikaSibyl/ImplicitFunctionRayMarcher)\
                    \nOpenGL renderer of implicit function, with interpolation morphing animation.\
                    \n- The algorithm is based on paper *Real-Time Ray Tracing of Implicit Surfaces on the GPU*\
                    \n- Ray marching is implemented in Fragment Shader, with simple lighting & shadowing.\
                    \n- FPS > 60fps on RTX 2070s.\
                    \n- 3D morphing by interpolation between two implicit functions.\
                    \n- Blob version of some basic mesh',
                images: [ ],
                videos:[{src: "//player.bilibili.com/player.html?aid=933726032&bvid=BV1MT4y1Z7UR&cid=429257109&page=1"},],
            },
            {
                id: '02',
                name: 'Android Application: Camerartist',
                md: '# **Visit Github page**: [SuikaSibyl-Camerartist](https://github.com/SuikaSibyl/android_camerartist)\
                    \n This is an Android Application, on which you can stylize your photo taken to various style. For example, you can change the background to \'*the Great Wave*\' or simply grayscale.\
                    \n To finish this application, I use three great repository:\
                    \n\
                    \n 1. [Mask RCNN](https://github.com/matterport/Mask_RCNN)\
                    \n 2. [fast-style-transfer](https://github.com/lengstrom/fast-style-transfer)\
                    \n 3. [Camera2Basic](https://github.com/googlearchive/android-Camera2Basic)\
                    \n\
                    \n Also, if you want to run server on your computer, Mask RCNN & fast-style-transfer are needed.\
                    ',
                images: [ ],
                videos:[{src: "//player.bilibili.com/player.html?aid=591232377&bvid=BV1kq4y197f9&cid=429420909&page=1"},],
            },
            {
                id: '03',
                name: 'Plane Formation',
                md: '# On paper plane formation artworks, all original designed.\
                    ',
                images: [ {href: "https://i.loli.net/2021/10/23/QXpbJdTa9qc2WPl.png"},
                          {href: "https://i.loli.net/2021/10/23/vsXxmVglMoAdYn2.png"},
                          {href: "https://i.loli.net/2021/10/23/jn74uLzUdWkaV9X.png"},
                          {href: "https://i.loli.net/2021/10/23/DfMRiIVBO23Nbnz.png"},
                          {href: "https://i.loli.net/2021/10/23/MUwqdLYJORotBfZ.png"},
                          {href: "https://i.loli.net/2021/10/23/LMF4N6ZvlkHrjy2.jpg"},
                          {href: "https://i.loli.net/2021/10/23/ujrlSd3pQLmBxM7.png"}, ],
                videos:[ ],
            },
            {
                id: '04',
                name: 'Charcater Modeling',
                md: "\
                    \n Character Modeling, using Maya, ZBrush, Marvelous Designer, Substance Designer.\
                    The character design is Roberta from manga \'Black Laggon\'. The modeling is done from zero.",
                images: [ {href: "https://i.loli.net/2021/10/23/7O9JG3LTdzfwuin.png"},
                          {href: "https://i.loli.net/2021/10/23/mUYPrNWqX5nQ1Tu.png"},
                          {href: "https://i.loli.net/2021/10/23/JVPRwDgu6qUYGmr.png"},
                          {href: "https://i.loli.net/2021/10/23/lGgk564MKYBXev9.png"},
                          {href: "https://i.loli.net/2021/10/23/wbn369uU2DGxHje.png"},
                          {href: "https://i.loli.net/2021/10/23/BCMcXiIph73eYF8.png"},
                          {href: "https://i.loli.net/2021/10/23/opcURETMPuwzGrh.png"}, ],
                videos:[ ],
            },
            {
                id: '05',
                name: 'Photography Works (Selected)',
                md: "\ Using Canon EOS M6 Camera, all shoted in Hangzhou, China.",
                images: [ {href: "https://i.loli.net/2021/10/23/FjWvlpqgbncDo8i.jpg"},
                          {href: "https://i.loli.net/2021/10/23/Lcd1EfhyXlx5zOH.jpg"},
                          {href: "https://i.loli.net/2021/10/23/nARaJzQ3H4gGp6b.jpg"},
                          {href: "https://i.loli.net/2021/10/23/oZfdNiRuTJqlOBs.jpg"},
                          {href: "https://i.loli.net/2021/10/23/VpkBD5NWS1UwEAz.jpg"},
                          {href: "https://i.loli.net/2021/10/23/G7NMVn6tZmOwDQi.jpg"},
                          {href: "https://i.loli.net/2021/10/23/cTYf7JM3LOVUSyN.jpg"},
                          {href: "https://i.loli.net/2021/10/23/1GkmDKPVbgoascB.jpg"}, ],
                videos:[ ],
            },
            {
                id: '06',
                name: 'Video Invisible Digital Watermark',
                md: '# **Visit Github page**: [SuikaSibyl-VideoDigitalWatermarker](https://github.com/SuikaSibyl/VideoDigitalWatermarker)\
                    \nMatlab invisible digital watermark for mp4 video.\
                    \nUse DCT decompose to embed black-white color image to paras, and recover by IDCT.\
                    \nThe robustness is tested by inserting all kinds of noise attack, the watermark is basically reserved.',
                images: [ {href: "https://i.loli.net/2021/10/23/Kls8gEpSnwTHvXY.jpg"}, ],
                videos:[ ],
            },
            {
                id: '07',
                name: 'Image Processing Library',
                md: '# **Visit Github page**: [SuikaSibyl-ImageProcessing](https://github.com/SuikaSibyl/ImageProcessing)\
                    \n\
                    \nC++ library for digital image processing.\
                    \n\
                    \nInclude:\
                    \n\
                    \n- Binarization\
                    \n\t- Otsu\
                    \n\t- Niblack\
                    \n- Morphology\
                    \n\t- Erosion\
                    \n\t- Dilation\
                    \n\t- Opening\
                    \n\t- Closing\
                    \n\
                    \n- Histogram Manipulation\
                    \n\t- Histogram Equalization\
                    \n\t- Histogram Specification\
                    \n- Transform\
                    \n\t- Translation\
                    \n\t- Rotation\
                    \n\t- Scale\
                    \n\t- Shear\
                    \n\t- Mirror\
                    \n- Filtering\
                    \n\t- Image mean filtering\
                    \n\t- Laplacian image enhancement\
                    \n\t- BilateralFiltering\
                    \n\
                    ',
                images: [ {href: "https://i.loli.net/2021/10/23/fkIcpvDaMWCqGn2.png"}, ],
                videos:[ ],
            },
            {
                id: '08',
                name: 'Watercolor Works (Selected)',
                md: '\
                    \nWatercolor works drawn in late 2018.',
                images: [ {href: "https://i.loli.net/2021/10/23/HbYW3q46um8ZK5g.jpg"},
                          {href: "https://i.loli.net/2021/10/23/nYljhQCg1rDMKAN.jpg"},
                          {href: "https://i.loli.net/2021/10/23/ehQfG2CYLSbX1pA.jpg"}, 
                          {href: "https://i.loli.net/2021/10/23/lmP1boXuaTSk6Dj.jpg"}, 
                          {href: "https://i.loli.net/2021/10/23/NjXUyoAaVbgLkie.jpg"},],
                videos:[ ],
            },
            ]
        }
    }
}
</script>


<style type="text/css">
    .aspect-ratio {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 75%;
    }

.aspect-ratio iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
</style>

<style scoped lang="scss">
    @import '../styles/variable';

    .experience-card {
        .title {
            width: 100%;
            font-size: 1rem;
            overflow: scroll;
            margin: 0;
        }

        .sub-title {
            width: 100%;
            font-size: .5rem;
            display: block;
            margin-top: .5rem;
        }
    }
</style>
