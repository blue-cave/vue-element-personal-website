<template>
    <div>
<!--      页面的轮播效果图-->
      <el-row type="flex" style="margin-top: 20px;">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <div class="block">
            <el-carousel height="400px">
              <el-carousel-item>
                <img class="pc_imgBox" src="../../assets/images/carousel_background_1.jpg" alt="1"/>
              </el-carousel-item>
              <el-carousel-item>
                <img class="pc_imgBox" src="../../assets/images/carousel_background_2.jpg" alt="2"/>
              </el-carousel-item>
              <el-carousel-item>
                <img class="pc_imgBox" src="../../assets/images/carousel_background_3.jpg" alt="3"/>
              </el-carousel-item>
              <el-carousel-item>
                <img class="pc_imgBox" src="../../assets/images/carousel_background_4.jpg" alt="4"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <!-- 第二部分 绝对定位于窗口-->
      <el-row type="flex" class="myself-absolute-location">
        <img class="float-avatar-size" src="../../assets/images/head_portrait.png">
        <el-row type="flex">
          <div style="background: #2c3e50; margin: 18px 10px; color: #42b983; border-radius: 5px; line-height: 24px;">bluecave</div> 's resume
        </el-row>
      </el-row>
      <!-- 显示弹出的一些个人信息 -->
      <!--   这里测试feature/exploit_project   -->
      <el-row type="flex" justify="center" class="el-avatar-background">
        <div>
          <el-link :underline="false">
            <el-tooltip effect="light" placement="top">
              <div slot="content"><img class="pop-up-show-img-width" src="../../assets/images/qq.jpg"></div>
              <el-avatar> QQ </el-avatar>
            </el-tooltip>
          </el-link>
        </div>
        <div>
          <el-link :underline="false">
            <el-tooltip effect="light" placement="top">
              <div slot="content"><img class="pop-up-show-img-width" src="../../assets/images/wechat.jpg"></div>
              <el-avatar> 微信 </el-avatar>
            </el-tooltip>
          </el-link>
        </div>
        <div>
          <el-link :underline="false" href="https://github.com/blue-cave" target="_blank">
            <!-- 通过设置effect属性来改变el-tooltip的主题，默认为dark -->
            <el-tooltip effect="light" content="Git Hub" placement="top">
              <el-avatar> Git </el-avatar>
            </el-tooltip>
          </el-link>
        </div>
        <div>
          <el-link :underline="false" href="https://www.jianshu.com/u/398d3f4b09a2" target="_blank">
            <el-tooltip effect="light" content="简书" placement="top">
              <el-avatar> 简 </el-avatar>
            </el-tooltip>
          </el-link>
        </div>
        <div>
          <el-link :underline="false" href="https://blog.csdn.net/qq_45376958" target="_blank">
            <el-tooltip effect="light" content="CSDN" placement="top">
              <el-avatar> CSDN </el-avatar>
            </el-tooltip>
          </el-link>
        </div>
      </el-row>
      <!-- 最后一行备注 -->
      <el-row class="statement-bottom-site">
        本网站有部分内容来自互联网，如无意中侵犯了哪个媒体、公司、企业或个人等的知识产权，请邮箱联系：
        <el-link style="cursor: pointer;" type="primary" href="mailto: spookz@qq.com" :underline="false">spookz@qq.com</el-link>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      message: '页面设置',
      imgList: [
        {
          name: '图片一',
          site: '../../assets/images/carousel_background_1.jpg'
        },
        {
          name: '图片二',
          site: '/assets/images/carousel_background_2.jpg'
        },
        {
          name: '图片三',
          site: '/assets/images/carousel_background_3.jpg'
        },
        {
          name: '图片四',
          site: '/assets/images/carousel_background_4.jpg'
        }
      ]
    }
  },
  methods: {
    // 图片加载失败
    errorHandler () {
      return true
    }
  }
}
</script>

<style scoped>

  .pc_imgBox {
    border-radius: 10px;
    height: 400px;
    width: 1200px;
  }
  /* 浮动的头像的大小 */
  .float-avatar-size {
    height: 62px;
    width: 62px;
    border-radius: 50%;
    margin: 0px 10px;
  }
  .myself-absolute-location {
    cursor: pointer;
    width: 250px;
    height: 64px;
    position: fixed;
    right: 20px;
    top:30px;
    background:rgba(255,255,255,0.5);
    border-radius: 5px;
    border: 1px #ccc solid;
  }
  /* 这是鼠标移入的弹出qq，微信的图片的大小 */
  .pop-up-show-img-width {
    width: 130px;
    height: 150px;
  }
  .pop-up-div-img-width{
    height: 38px;
    width: 38px;
    background-color: #FFFFFF;
    border-radius: 50%;
    position: relative;
  }
  /* 在鼠标移入之前页面显示的图片 */
  .pop-up-img-width {
    height: 28px;
    width: 28px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 个人网站的底部声明 */
  .statement-bottom-site {
    padding: 15px 0px;
    background-color: #2c3e50;
    color: #FFFFFF;
    font-size: 14px;
  }
  /* 上层div的边距 10px */
  .el-avatar-background div {
    padding: 10px;
  }
</style>

<style>
/* el-avatar 的背景色*/
.el-avatar-background .el-avatar {
  background: #404040;
}
</style>
