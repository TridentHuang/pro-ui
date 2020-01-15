<template>
    <div class="ex-title-container">
        <div class="ex-title-wrapper">
            <img src="../assets/icon/left.png" class="title-img">
            <div>
                {{title}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "exTitle",
    props: ["title"]
  };
</script>

<style scoped>
    .ex-title-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .title-img {
        width: 25px;
        height: 25px;
    }
</style>
