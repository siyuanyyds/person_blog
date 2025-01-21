<template>
  <div class="home">
    <!-- 背景部分 -->
    <v-container
      class="home-container"
      fill-height
      fluid
    >
      <v-row
        align="center" 
        justify="center"  
        no-gutters
        class="fill-height"
        style="height: 100%;" 
      >
        <v-col
          cols="12"
          sm="6"
          class="d-flex flex-column justify-center" 
        >
          <!-- 欢迎标题 -->
          <h1 class="display-3 font-weight-bold text-white">文思源</h1>
          <!-- 简短描述 -->
          <p class="text-h6 text-white mb-8">
            记录生活点滴，分享知识与成长经验。
          </p>
        </v-col>

        <v-col
          cols="12"
          sm="4"
          class="d-flex flex-column justify-center align-center"
        >
          <!-- 改进的导航按钮 -->
          <v-btn
            large
            color="primary"
            class="mb-4 custom-btn"
            @click="goToBlog"
          >
            浏览博客
          </v-btn>
          <v-btn
            large
            outlined
            color="white"
            class="custom-btn"
            @click="goToAbout"
          >
            关于我
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToBlog() {
      this.$router.push('/blog');
    },
    goToAbout() {
      this.$router.push('/about');
    },
  },
};
</script>

<style scoped>
/* 背景样式 */
.home-container {
  background-image: url('../assets/Home.jpeg'); /* 替换为你自己的背景图片路径 */
  background-size: cover; /* 背景图片大小填充整个容器 */
  background-position: center center; /* 背景图片垂直水平居中 */
  min-height: 100vh; /* 保证容器至少是视口高度 */
  color: white;
  position: relative;
}

/* 创建蒙版效果 */
.home-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 半透明的黑色蒙版 */
  z-index: 1;
}

.v-row {
  position: relative;
  z-index: 2; /* 确保内容在蒙版之上 */
}

/* 调整标题大小 */
.display-3 {
  font-size: 4rem; /* 放大标题 */
}

/* 自定义按钮样式 */
.custom-btn {
  transition: all 0.3s ease; /* 平滑过渡效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
}

.custom-btn:hover {
  transform: translateY(-5px); /* 鼠标悬停时提升按钮 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* 悬停时增加阴影 */
}

.custom-btn:active {
  transform: translateY(2px); /* 按钮按下时稍微下沉 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 按钮按下时恢复阴影 */
}
</style>
