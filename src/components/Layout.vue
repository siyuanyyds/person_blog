<template>
    <v-app>
      <v-app-bar v-if="showNavbar" app>
        <v-toolbar-title>我的个人博客</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="goHome">起始页</v-btn>
        <v-btn text @click="goBlog">我的博客</v-btn>
        <v-btn text @click="goAbout">关于</v-btn>
        <v-btn text @click="goArchive">归档</v-btn>
        <v-btn text @click="goCloudDisk">云盘</v-btn>
      </v-app-bar>
  
      <!-- 路由视图 -->
      <router-view></router-view>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'Layout',
    props: {
      showNavbar: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
      goBlog() {
        this.$router.push('/blog');
      },
      goAbout() {
        this.$router.push('/about');
      },
      goArchive() {
        this.$router.push('/archive');
      },
      goCloudDisk() {
        this.$router.push('/cloud-disk');
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式 */
  </style>
  