<template>
    <div id="app">
        <pro-header/>
        <div class="container">
            <left-nav/>
            <router-view class="content-detail"/>
        </div>
    </div>
</template>

<script>
  import proHeader from "./components/proHeader";
  import leftNav from "./components/leftNav";

  export default {
    name: "app",
    components: { leftNav, proHeader }
  };
</script>

<style>
    body {
        background-color: #f0f3f6;
        margin: 0;
        font-family: PingFang SC, 'Helvetica Neue', Arial, sans-serif;
    }

    #app {
        min-width: 1412px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .container {
        display: flex;
    }

    .content-detail {
        width: 98%;
        margin: 10px;
    }

</style>
