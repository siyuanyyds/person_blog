<!-- src/components/PostCard.vue -->
<template>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
      <v-card-text>{{ content }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="readMore">阅读全文</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'PostCard',
    props: {
      title: String,
      subtitle: String,
      content: String
    },
    methods: {
      readMore() {
        console.log('Reading more...');
      }
    }
  }
  </script>
  
  <style scoped>
  /* 你可以在这里添加自定义的样式 */
  </style>
  