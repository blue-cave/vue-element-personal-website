<template>
    <div>
<!--      页面的轮播效果图-->
<!--      前端web简历，http://www.show08.com/ -->
      <el-row type="flex" style="margin-top: 20px;">
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <div class="block">
            <el-carousel height="400px">
              <el-carousel-item v-for="(imgItem, imgIndex) in imgList" :key="imgIndex">
                <img class="pc_imgBox" :src="imgItem.site" :alt="imgItem.alt" :title="imgItem.title"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <!-- 第二部分 绝对定位于窗口-->
      <el-row type="flex" class="myself-absolute-location">
        <img class="float-avatar-size" :src="head_portrait">
        <el-row type="flex">
          <div style="background: #2c3e50; margin: 15px 5px; color: #42b983; border-radius: 5px; font-size: 20px; line-height: 30px;">bluecave</div>
          <div style="margin: 18px 0px; line-height: 24px;">'s resume</div>
        </el-row>
      </el-row>
<!--      职业生涯-->
      <el-row type="flex" style="margin: 10px 0px; text-align: left;">
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <el-timeline>
<!--            <el-timeline-item placement="top"-->
<!--              v-for="(activity, index) in activities"-->
<!--              :key="index"-->
<!--              :icon="activity.icon"-->
<!--              :type="activity.type"-->
<!--              :color="activity.color"-->
<!--              :size="activity.size"-->
<!--              :timestamp="activity.timestamp">-->
<!--              {{activity.content}}-->
<!--            </el-timeline-item>-->
            <el-timeline-item v-for="(activity, index) in activities" :key="index"
                              :timestamp="activity.timestamp"
                              :icon="activity.icon"
                              :type="activity.type"
                              :color="activity.color"
                              :size="activity.size"
                              placement="top">
              <el-card>
                <h4>{{ activity.content }}</h4>
                <p>提交于 {{ activity.timestamp }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
        <el-col :span="8"></el-col>
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
        <div v-for="(item, index) in linkList" :key="index">
          <el-link :underline="false" :href="item.href" target="_blank">
            <!-- 通过设置effect属性来改变el-tooltip的主题，默认为dark -->
            <el-tooltip effect="light" :content="item.content" placement="top">
              <el-avatar> {{ item.name }} </el-avatar>
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
      head_portrait: require('../../assets/images/head_portrait.png'),
      imgList: [
        {
          // 在正常情况下，如果不加require，图片浏览器按照text识别
          // 还可以把图片放到static文件夹下面，这样可以直接引用
          // 参考网址 （https://blog.csdn.net/xuebimi/article/details/98175273?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task）
          site: require('../../assets/images/carousel_background_1.jpg'),
          title: '图片一',
          alt: '图片一'
        },
        {
          site: require('../../assets/images/carousel_background_2.jpg'),
          title: '图片二',
          alt: '图片二'
        },
        {
          site: require('../../assets/images/carousel_background_3.jpg'),
          title: '图片三',
          alt: '图片三'
        },
        {
          site: require('../../assets/images/carousel_background_4.jpg'),
          title: '图片四',
          alt: '图片四'
        }
      ],
      linkList: [
        {
          href: 'https://github.com/blue-cave',
          content: 'Git Hub',
          name: 'Git'
        },
        {
          href: 'https://www.jianshu.com/u/398d3f4b09a2',
          content: '简书',
          name: '简'
        },
        {
          href: 'https://blog.csdn.net/qq_45376958',
          content: 'CSDN',
          name: 'CSDN'
        }
      ],
      activities: [{
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46'
      }]
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
    height: 398px;
    width: 100%;
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
    z-index: 99;
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
