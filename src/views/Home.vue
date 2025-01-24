<template>
  <div class="home">
    <!-- 视频背景部分 -->
    <div class="video-container">
      <video autoplay muted loop playsinline class="background-video">
        <source src="../assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-overlay"></div>
    </div>

    <!-- 页面内容部分 -->
    <div class="content-wrapper">
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
            class="d-flex flex-column justify-center align-center"
          >
            <!-- 文字内容在一行 -->
            <div class="text-content d-flex flex-column align-center">
              <h1 class="display-3 font-weight-bold text-white">文思源</h1>
              <p class="text-h6 text-white mb-8">
                记录生活点滴，分享知识与成长经验。
              </p>
            </div>
            
            <!-- 按钮在单独的一行 -->
            <div class="button-group d-flex flex-column align-center">
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
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- 底部备案信息 -->
    <footer class="footer">
      <p class="text-white text-center mb-0">
        © 2025 文思源. All Rights Reserved. <a href="http://beian.miit.gov.cn/" target="_blank" class="footer-link">备案号: 皖ICP备2025074008号-1</a>
      </p>
    </footer>
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
/* 视频背景容器样式 */
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0; /* 视频背景在最底层 */
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保视频填满整个容器 */
}

/* 蒙版样式 */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色蒙版 */
  z-index: 1;
}

/* 保持内容在视频之上 */
.home-container {
  position: relative;
  z-index: 2; /* 确保内容在蒙版之上 */
  color: white;
}

/* 调整标题大小 */
.display-3 {
  font-size: 4rem;
}

/* 自定义按钮样式 */
.custom-btn {
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: transparent !important; /* 背景透明 */
  color: white !important; /* 文字颜色设置为白色 */
  border-radius: 50px; /* 最大圆角矩形 */
  border: none; /* 去除边框 */
}

.custom-btn:hover {
  background-color: white !important; /* 鼠标悬浮时背景变为白色 */
  color: black !important; /* 鼠标悬浮时文字颜色变为黑色 */
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.custom-btn:active {
  transform: translateY(2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 底部样式 */
.footer {
  position: relative;
  z-index: 2; /* 确保内容在蒙版之上 */
  background-color: rgba(0, 0, 0, 0.7); /* 半透明背景 */
  padding: 10px 0;
}

.footer-link {
  color: #42a5f5; /* 链接颜色 */
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保视口高度 */
}

.content-wrapper {
  flex: 1; /* 内容区域自动扩展 */
  display: flex;
  justify-content: center;
  align-items: center; /* 内容垂直居中 */
}

/* 保证内容垂直方向上按块排列 */
.text-content {
  text-align: center; /* 确保标题和描述居中 */
}

.button-group {
  text-align: center; /* 确保按钮在按钮组中居中 */
}

/* 底部样式 */
.footer {
  position: relative;
  z-index: 2; /* 确保内容在蒙版之上 */
  background-color: transparent; /* 背景完全透明 */
  padding: 10px 0;
  text-align: center;
}

/* 文字颜色保持可见 */
.footer p {
  color: white; /* 确保字体颜色为白色 */
  margin: 0;
}

/* 链接样式 */
.footer-link {
  color: #42a5f5; /* 链接颜色 */
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
