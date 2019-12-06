<template>
    <div>
        <div class="pro-header">
            <div class="logo">
                <img src="../assets/logo.png" class="logo-img">
                <span class="logo-title">Pro</span>
                <!--<div class="header-search">搜索</div>-->
                <input placeholder="搜索文档..." class="header-search ds-input" autocomplete="off" spellcheck="false"
                       role="combobox" aria-autocomplete="list" aria-expanded="false" aria-label="search input"
                       aria-owns="algolia-autocomplete-listbox-0" dir="auto"
                       style="position: relative; vertical-align: top;">
            </div>

            <div class="header-options">
                <img src="../assets/icon/github.png" class="options-img">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "proHeader"
  };
</script>

<style scoped>
    .pro-header {
        background-color: #001936;
        color: white;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        margin-left: 33px;
        display: flex;
        align-items: center;
    }

    .logo-img {
        width: 25px;
        height: 25px;
    }

    .logo-title {
        margin-left: 12px;
        margin-top: 5px;
        font-size: 22px;
        font-weight: lighter;
    }

    .header-search {
        margin-left: 140px;
        width: 200px;
        height: 60px;
        color: white;
        font-size: 14px;
        background-color: transparent;
        border: none;
    }

    .header-options {
        margin-right: 33px;
    }

    .options-img {
        width: 30px;
        height: 30px;
    }
</style>
