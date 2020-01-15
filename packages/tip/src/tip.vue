<template>
    <div class="center-right">
        <Tooltip :content="content" placement="right-start">
            <div class="title"></div>
        </Tooltip>
    </div>
</template>

<script>
  export default {
    name: "ProTip",
    props: ["content"]
  };
</script>

<style scoped>
    .center-right {
        position: absolute;
        float: left;
        right: -10px;
        top: 0;
    }

    .title {
        background-color: red;
        width: 10px;
        height: 10px;
        border-radius: 10px;
    }

</style>
