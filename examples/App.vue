<template>
    <div id="app">
        <pro-header/>
        <div class="container">
            <left-nav/>
            <router-view/>
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
        flex-wrap: nowrap;

    }

    .bg-block {
        background-color: white;
    }

    .detail {
        display: flex;
        flex-wrap: nowrap;
    }

    .example-container {
        width: 360px;
        height: 640px;
        margin: 20px;
    }

    .content-container {
        min-width: 800px;
        max-width: 980px;
        min-height: 200px;
    }

    .wrapper {
        margin: 20px auto;
    }

</style>
