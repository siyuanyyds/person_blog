<template>
  <div id="app">
    <v-app>
      <!-- 条件显示导航栏 -->
      <v-app-bar v-if="showNavbar" app>
        <v-toolbar-title>我的个人博客</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="goToPage('/')">起始页</v-btn>
        <v-btn text @click="goToPage('/blog')">我的博客</v-btn>
        <v-btn text @click="goToPage('/about')">关于</v-btn>
        <v-btn text @click="goToPage('/archive')">归档</v-btn>
        <v-btn text @click="goToPage('/cloud-disk')">云盘</v-btn>
      </v-app-bar>

      <!-- 主内容区域 -->
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute(); // 获取当前路由
    const router = useRouter(); // 路由跳转

    // 判断是否显示导航栏
    const showNavbar = computed(() => {
      const noNavbarPaths = ['/', '/404']; // 不显示导航栏的路径
      return !noNavbarPaths.includes(route.path); // 如果当前路径在noNavbarPaths中，隐藏导航栏
    });

    // 页面跳转方法
    const goToPage = (path) => {
      router.push(path);
    };

    return {
      showNavbar,
      goToPage,
    };
  },
};
</script>

<style>
/* 全局样式 */
body {
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
}

/* 确保导航栏和内容不重叠 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
