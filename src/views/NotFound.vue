<template>
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12">
          <h1>404 - 页面未找到</h1>
          <p>抱歉，您访问的页面不存在。</p>
          <v-btn @click="$router.push('/blog')">返回首页</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  