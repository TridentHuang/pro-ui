<template>
    <!--左测导航-->
    <div class="bg-block left-nav-container">
        <div class="left-nav-wrapper">
            <div class="left-nav-title">开发指南</div>
            <div class="left-nav-item"
                 v-for="item in desItems"
                 :key="item.id" @click="itemActive(item.id)"
                 :class="{active:item.id==ins}">
                {{item.name}}
            </div>
            <div class="left-nav-title">组件</div>
            <div v-for="sub in subItems" :key="sub.id">
                <div class="sub-title">
                    {{sub.title}}
                </div>
                <router-link :to="item.route" v-for="item in sub.subDesList" :key="item.id">
                    <div class="left-nav-item"
                         @click="itemActive(item.id)"
                         :class="{active:item.id==ins}">
                        {{item.name}}
                    </div>
                </router-link>

            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: "leftNav",
    data() {
      return {
        ins: 1,
        desItems: [  //描述
          { id: "1", name: "介绍" },
          { id: "2", name: "快速上手" }
        ],
        subItems: [ //组件
          {
            id: "basic",
            title: "基础组件",
            subDesList: [
              { id: "button", name: "Button 按钮" },
              { id: "cell", name: "Cell 单元框" }
            ]
          }, {
            id: "others",
            title: "Others 其他",
            subDesList: [
              { id: "card", name: "Card 卡片", route: "/card" },
              { id: "table", name: "基础表单页面", route: "/table" },
            ]
          }
        ]
      };
    },
    methods: {
      itemActive(num) {
        console.log(num);
        this.ins = num;
      }
    }
  };
</script>

<style scoped>
    .left-nav-container {
        width: 220px;
        height: 100vh;
        overflow:scroll;
    }

    .left-nav-wrapper {
        margin-left: 33px;
        margin-top: 20px;

    }

    .left-nav-title {
        color: #003366;
        font-size: 16px;
        margin-top: 22px;
    }

    .left-nav-item {
        color: #4c646d;
        margin-top: 22px;
        font-size: 14px;
        transition: 0.2s;
    }

    .left-nav-item:hover {
        color: blue;
    }

    .sub-title {
        font-size: 12px;
        color: rgba(69, 90, 100, 0.6);
        margin-top: 22px;
    }

    .active {
        font-size: 16px;
        color: blue;
        transition: 0.2s;
        font-weight: bold;
    }
</style>
