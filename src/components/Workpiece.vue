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
                        <iframe id="myiframe" v-for="video in item.videos" :src="video.src" width="100%" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="500px"> </iframe>
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
                name: 'Free Form Deformation',
                md: '# **Visit Github page**: [SuikaSibyl-FreeFormDeformation](https://github.com/SuikaSibyl/FreeFormDeformation)\
                    \nFFD in Qt + OpenGL with simple animation & dynamic mesh.',
                images: [{href: "https://i.loli.net/2021/10/22/cCxDKugFLUGianE.png"}, ],
                videos:[{src: "//player.bilibili.com/player.html?aid=933726032&bvid=BV1MT4y1Z7UR&cid=429257109&page=1"},],
            },
            {
                id: '02',
                name: 'Dick'
            },
            ]
        }
    }
}
</script>

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
