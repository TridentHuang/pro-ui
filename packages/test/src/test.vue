<template>
    <div>
        <h3>{{name}}</h3>
        <div class="num">{{ count }}</div>
        <el-button @click="increment">自减</el-button>
    </div>
</template>
<script>
  export default {
    name: "test",
    props: {
      name: String
    },
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };
</script>
