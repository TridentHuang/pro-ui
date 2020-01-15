<template>
    <div>
        <pro-table :columns="columns" :data="data" :form-items="formItems" :form="form"/>
        <div class="des">
            <span class="title">概述</span>
            <div>
                <span>此页面是后台统一页面，包含table和普通的搜索操作</span>
            </div>
        </div>
        <div class="des">
            <span class="title">API</span>
            <div>
                <span>Table props</span>
            </div>
            <!--描述-->
            <Table :columns="desColumns" :data="desData" border size="small"></Table>
        </div>
    </div>
</template>
<script>

  export default {
    name: "table",
    data() {
      return {
        form: {
          name: "",
          city: ""
        },
        formItems: [
          {
            type: "input",
            label: "名字",
            model: "name",
            placeholder: "输入姓名"
          }, {
            type: "select",
            label: "城市",
            model: "city",
            placeholder: "选择城市",
            children: [
              {
                label: "chengdu",
                text: "成都"
              }, {
                label: "yibin",
                text: "宜宾"
              }
            ]
          }
        ],
        columns: [
          {
            title: "名字",
            key: "name"
          }, {
            title: "Age",
            key: "age"
          }, {
            title: "Address",
            key: "address"
          }
        ],
        data: [
          {
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park",
            date: "2016-10-03"
          },
          {
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park",
            date: "2016-10-01"
          },
          {
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park",
            date: "2016-10-02"
          },
          {
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park",
            date: "2016-10-04"
          }
        ],
        desColumns: [
          {
            title: "属性",
            key: "attribute"
          }, {
            title: "说明",
            key: "des"
          }, {
            title: "类型",
            key: "type"
          }, {
            title: "默认值",
            key: "default"
          }
        ],
        desData: [
          {
            attribute: "columns",
            des: "表数据",
            type: "Array",
            default: "[]"
          }, {
            attribute: "columns",
            des: "表头",
            type: "Array",
            default: "[]"
          }, {
            attribute: "formItems",
            des: "操作表单，具体详见后文",
            type: "Array",
            default: "[]"
          }, {
            attribute: "form",
            des: "操作表单绑定属性值，同formItems中model项相同",
            type: "Array",
            default: "Object"
          }
        ]
      };
    }
  };
</script>

<style scoped>
    .des {
        margin-top: 20px;
    }

    .title {
        font-size: 20px;
    }
</style>
