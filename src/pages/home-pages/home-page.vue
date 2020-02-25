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
<!--      第二部分-->
      <el-row>
        <img style="height: 200px; width: 200px; border-radius: 50%;" src="../../assets/images/head_portrait.png">
      </el-row>
<!--      最后一部分-->
      <el-row>
        <div>
          <a href="https://github.com/blue-cave" target="_blank">
            <el-tooltip effect="dark" content="Git Hub" placement="top">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-tooltip>
          </a>
        </div>
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
  }
}
</script>

<style scoped>

  .pc_imgBox {
    border-radius: 10px;
    height: 400px;
    width: 1200px;
  }
</style>
