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
            {
                id: '09',
                name: 'Golden Finger Tetris',
                md: '# **Visit Github page**: [SuikaSibyl-GoldenFingerTetris](https://github.com/SuikaSibyl/GoldenFingerTetris)\
                    \nTetris written in C++, with some interesting golden finger items..',
                images: [ {href: "https://i.loli.net/2021/10/24/13DNOZQwVIjfyRL.png"},],
                videos:[ ],
            },
            {
                id: '10',
                name: 'Animation: elephant in the room',
                md: 'An interviewee entered the room and found an elephant in it. It was even\
                    stranger that nobody else could see it. When he finally pointed it out, he was\
                    criticized…\
                    \n\nThe work is completed by a group of 3. I mainly works on script writing, storyboard and 2D drawing',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=378787685&bvid=BV1Mf4y137hC&cid=430559651&page=1"} ],
            },
            {
                id: '10',
                name: 'Animation: the old man and the bird',
                md: 'An old man lived with his mynah. His son was so busy that he always hung up\
                    his father\'s phonecall and had seldom visited him. But this time, the old man \
                    may never be able to pick up the phone again. \
                    \n\nThe work is completed by a group of 3. I mainly works on storyboard, \
                    character design, dub, 2D animation & coloring and a small part of 3D.',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=421251094&bvid=BV1E3411y7Uo&cid=430559895&page=1"} ],
            },
            {
                id: '11',
                name: 'OpenGL FPS Game',
                md: '# **Visit Github page**: [SuikaSibyl-SimpleFPS](https://github.com/SuikaSibyl/SimpleFps)\
                    \n A simple FPS game, originally written in OpenGL, with basic rendering algorithms.\
                    Shadow, normal map and simple ui & sound & physics are implemented.\
                    \n\
                    \nImplemented items:\
                    \n\
                    \n1. Realtime point-light Shadowmap\
                    \n2. Basic UI\
                    \n3. Normal map & roughness map\
                    \n4. Sound\
                    \n5. Physics (gravity, collision)\
                    \n6. Fighting design\
                    \n\
                    \n',
                images: [ ],
                videos:[ {src:"//player.bilibili.com/player.html?aid=933847316&bvid=BV1RT4y1R7dT&cid=430191892&page=1"} ],
            },
            {
                id: '12',
                name: 'Digital Painting (Selected)',
                md: 'Digital painting, using iPad procreator & Photoshop.',
                images: [ {href: "https://i.loli.net/2021/10/24/FWNcn6xv4Pser9R.png"},
                          {href: "https://i.loli.net/2021/10/24/ALRbBroslZShG8p.png"},
                          {href: "https://i.loli.net/2021/10/24/5Kpiu1Lh8XvCway.png"},
                          {href: "https://i.loli.net/2021/10/24/6pGjMJfXt5anH1x.png"},
                          {href: "https://i.loli.net/2021/10/24/13W5qvXSfOThk2V.png"},
                          {href: "https://i.loli.net/2021/10/24/xrVLzXESaAPGcFs.png"}, ],
                videos:[ ],
            },
            {
                id: '13',
                name: 'Scene Modeling',
                md: 'Modeling of a simple scene, using Maya & Substance Painter.',
                images: [ {href: "https://i.loli.net/2021/10/24/lCxJoi1NT76eL3K.png"},
                          {href: "https://i.loli.net/2021/10/24/EeIzH6iLtg1jNqo.png"},
                          {href: "https://i.loli.net/2021/10/24/5Kpiu1Lh8XvCway.png"},
                          {href: "https://i.loli.net/2021/10/24/6pGjMJfXt5anH1x.png"},
                          {href: "https://i.loli.net/2021/10/24/13W5qvXSfOThk2V.png"},
                          {href: "https://i.loli.net/2021/10/24/xrVLzXESaAPGcFs.png"}, ],
                videos:[ ],
            },
            {
                id: '14',
                name: 'Procedural Texture & NPR',
                md: 'I originally designed dynamic procedural texture based on fractal algorithm, \
                    using Mandelbrot Fractal& tri planar mapping techniques. \
                    Then, I used ray marching to draw a screen-wide quad but used as a skybox, \
                    using the procedural texture as the cubemap. Based on that, \
                    I implemented non-photorealisitc rendering of the scene\
                    (Lunar surface, aerobat) based on Reflection & Refraction, \
                    resulting in a Science Fiction style.',
                images: [ ],
                videos:[{src: "//player.bilibili.com/player.html?aid=208738226&bvid=BV1Qh411b7fo&cid=429229423&page=1"},],
            },
            {
                id: '15',
                name: 'Visual Exploration and Explanation of Badminton Tactics in Immersive Visualizations',
                md: '# **Digital Object Identifier**: 10.1109/TVCG.2021.3114861\
                    \nI worked with Xiangtong CHU, Phd student in CAD&CD national key-lab visualization group, \
                    implemented a badminton visualization system in Unity. The system collected lots of data \
                    of international players and by data cleaning and analysis, building a immersive visualization \
                    scene for players to learn more about tactics and how tactics could help them win. \
                    The system added VR interactions based on traditional visualization and help players \
                    to have a realistic view of the playground and the tactics. I am the main programmer \
                    of the work, implemented most of the data cleaning, visualization, VR interaction. \
                    Also I manually make most of the art assets for the program, and the paper is already \
                    received by IEEE TVCG 2021, I am the 4th author.',
                images: [ {href:"https://i.loli.net/2021/10/24/u4FzPMU6YbJLIQC.png"} ],
                videos:[ ],
            },
            {
                id: '16',
                name: 'Game: For Hue',
                md: '\
                    \nNetease Games Mini-Game Competition 2020, preliminary submission work.\
                    \nI worked as the programmer, as well as make the poster.',
                images: [ {href:"https://i.loli.net/2021/10/24/eQD9MGUJvA2B8LO.jpg"} ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=291263746&bvid=BV1xf4y1t75c&cid=357964422&page=1"} ],
            },
            {
                id: '16',
                name: 'Game: Filmaker',
                md: '# **Download**: [GoogleDriver-Filmaker](https://drive.google.com/file/d/1vXmFbzuTg6zVeHxZ5Y88oAwplTRhsBzi/view?usp=sharing)\
                    \nI am a member of Light Studio (6 members), and our work “Filmaker” \
                    get the first place in the nationwide final competition, which is selected \
                    by the guider group of Netease Game considering comprehensive factors including \
                    designs, programming, art and most importantly the game itself. \
                    The game is made in 3-days game-jam. In the 6 member team, \
                    I am the strongest artist, so I designed the art style and drawing most sprites & ui. \
                    Also I am the only technical artist, so I also dealt with animation, \
                    human-computer interaction effects, post processing, video playing. \
                    Besides my art supporting, I also helped programmers with some workload.',
                images: [ {href:"https://i.loli.net/2021/10/24/YpIk7AEcymHGeuZ.png"} ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=503844096&bvid=BV1Qg411M77x&cid=357968087&page=1"} ],
            },
            {
                id: '17',
                name: 'Real-time Neural Super-Resolution',
                md: '# **Visit Github page**: [SuikaSibyl-ReproduceNSRR](https://github.com/SuikaSibyl/ReproduceNSRR)\
                    \nI reproduced *Neural Supersampling for Real-time Rendering* (siggraph 2020) by Pytorch. \
                    The paper proposed a neural network using Temporal methods (which is also used by DLSS2.0) \
                    and realized real-time supersampling. The author did not open source the code, \
                    so I implemented by myself and created my own dataset using Unity. \
                    My implementation could realize a good improvement in image quality, \
                    measured by PSNR. However, for some limitations, the time performance is 10 times larger \
                    compared with the original work.',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=378651096&bvid=BV14f4y1g7xD&cid=429231747&page=1"} ],
            },
            {
                id: '18',
                name: 'Unity Pontoon Bride VR Simulation',
                md: '# **Student Research Training Program | Mentor: Associated Professor Huagen Wan**\
                    \nUnder the instruction of Associated Professor Huagen WAN, I built a Pontoon Bridge VR \
                    simulation system by Unity + HTC vive on my own, and did some research on how some \
                    human-computer interaction adjustment would affect the experience. \
                    I did lots of research and designed three different level buoyancy algorithms \
                    and used in a level-of-detail system. I also originally proposed some algorithm \
                    to help users get stronger sense of floating without any force feedback devices, \
                    mainly by some special scene design and pose estimation enhancement, \
                    inspired by “VR Bridges: Simulating Smooth Uneven Surfaces in VR”. \
                    My work is affirmed by the committee of the Student Research Training Program, \
                    and get great final scores.',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=976190083&bvid=BV1K44y147B5&cid=429230656&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=336131520&bvid=BV1MR4y1J7YJ&cid=429229275&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=463742018&bvid=BV1tL411g75e&cid=429231642&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=251210793&bvid=BV1uv411u71m&cid=429231507&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=251212643&bvid=BV1Gv411u7Kq&cid=429231490&page=1"}, ],
            },
            {
                id: '19',
                name: 'Auto-Colorizer (team work)',
                md: '# **Visit Github page**: [SuikaSibyl-Colorizer](https://github.com/SuikaSibyl/Colorizer)\
                    \n 2 person team, works out a auto-Colorizer to automatically or interactive color and recolor gray images.\
                    Several methods are included, containing basically optimization & neural network. Simple GUI is implemented.',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=591229134&bvid=BV1Cq4y197mc&cid=429231968&page=1"}, ],
            },
            {
                id: '20',
                name: 'Game: Sisphury\'s Illusion',
                md: '# **Download**: [GoogleDriver-Sisphury\'s Illusion](https://drive.google.com/file/d/11l420ZTeBqP5pFXheBix4msmpqa8ogsP/view?usp=sharing)\
                    \n Team of 6, works out a relatively high-quality 3D game by Unity. \
                    I worked as the main artist as well as the only technical artist.\
                    \n\n My work mainly lies on the graphics and optimization, as well as some parts of the art assets \
                    (all the 2D assets and a small part of 3D assets, actually the other 3D assets comes from the network) and the poster.',
                images: [ {href: "https://i.loli.net/2021/10/25/ofG4Nv23RQEKjUu.png"},
                          {href: "https://i.loli.net/2021/10/25/UPNjzrYQ4CtODfX.png"}, ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=931980538&bvid=BV1uM4y1N75u&cid=379430454&page=1"}, ],
            },
            {
                id: '21',
                name: 'Suika Graphic',
                md: '# **Visit Github page**: [SuikaSibyl-XiguaGraphic](https://github.com/SuikaSibyl/XiguaGraphic)\
                    \n- Implemented multiple online & offline rendering algorithms based on DirectX12 & CUDA\
                    \n- Online algorithms: PCF Soft Shadow, the Split Sum Approximation IBL, PRT-based many polygon lighting, post processing effects (SSAO & SSD) \
                    \n- Offline algorithm: a CUDA Path Tracer with BVH acceleration implemented and embedded in the real-time renderer with progressive Monte-Carlo convergence\
                    \n\
                    \nImplemented multiple online & offline rendering algorithms based on DirectX12 & CUDA. \
                    The online algorithms includes: PCF Soft Shadow, The Split Sum Approximation IBL, \
                    PRT based many polygon lighting, and Post processing effects including SSAO & SSD. \
                    Also, a Cuda Path Tracer with BVH accleration is implemented and embedded in the real-time \
                    renderer with progressive Monte-Carlo convergence. The many polygon light part is a reproduce \
                    of the Siggraph Paper”Analytic Spherical Harmonic Gradients for Real-Time Rendering with \
                    Many Polygonal Area Lights”, building a efficient pipeline including: CUDA Vertex PRT backing, \
                    Computer Shader Lighting SH cofficients updating, CUDA Liquid solver. \
                    I also implemented some original algorithms based on the work including traslucent material \
                    based under multi polygon lights.',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=293746266&bvid=BV1pF411e7Na&cid=429235924&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=463630130&bvid=BV1pL411G79f&cid=429257477&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=718626814&bvid=BV18Q4y1D77L&cid=429257724&page=1"},
                         {src: "//player.bilibili.com/player.html?aid=421200444&bvid=BV153411y7CA&cid=429257661&page=1"}, ],
            },
            {
                id: '22',
                name: 'Animation: In Garden',
                md: '\
                    \n Personal work, a 2-day exercise to make an animation with a form as a combination of 2D & 3D.',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=293688496&bvid=BV1RF411Y7M6&cid=429249125&page=1"} ],
            },
            {
                id: '23',
                name: 'Technical Artist Internship – Tencent Lightspeed & Quantum Studios Group',
                md: '# **Visit Github page**: [SuikaSibyl-UnitySuikaVFX](https://github.com/SuikaSibyl/UnitySuikaVFX)\
                    \n **Visit Github page**: [SuikaSibyl-ShaderFramework](https://github.com/SuikaSibyl/ShaderFramework)\
                    \n\n I interned in TA Hub1 Team of Lightspeed & Quantum Studios Group in 2021 Summer. \
                    I have finished the works from the project team, as well as taken a series of courses \
                    and done some practice. Those practice mainly include: realize plasma explosion VFX \
                    in Unity、realize my own shader framework in Unity \
                    (standard Lit PBR, Translucent, Hair, fur, skin),\
                     hair modeling and baking produce in MAYA & UE4 with some python scripting. \
                     (Works in project team is omitted).',
                images: [ {href: "https://i.loli.net/2021/10/25/gm5S81rxkfEJPjN.png"},
                          {href: "https://i.loli.net/2021/10/25/UGh1cWmItzKDFOQ.png"}, 
                          {href: "https://i.loli.net/2021/10/25/JRb9Nn8IA7U65LM.png"},
                          {href: "https://i.loli.net/2021/10/25/klhCRe9tr61zBYx.png"},],
                videos:[ {src: "//player.bilibili.com/player.html?aid=548662655&bvid=BV1eq4y157qM&cid=429253657&page=1"} ],
            },
            {
                id: '24',
                name: 'SIByL Engine',
                md: '# **Visit Github page**: [SuikaSibyl-SibylEngine](https://github.com/SuikaSibyl/SibylEngine)\
                    \n ...',
                images: [ ],
                videos:[ {src: "//player.bilibili.com/player.html?aid=850677601&bvid=BV13L4y147jm&cid=486757806&page=1"} ],
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
