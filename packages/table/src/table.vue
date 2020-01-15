<template>
    <div>
        <Form ref="formInline" :model="form" inline>
            <FormItem prop="user"
                      v-for="(item,index) in formItems"
                      :rules="item.rules"
                      :key="index">
                <Input type="text"
                       v-if="item.type === 'input'"
                       v-model="form[item.model]"
                       :placeholder="item.placeholder"
                       :disabled="item.disabled"
                       :size="item.size">
                </Input>
                <Select v-if="item.type === 'select'"
                        v-model="form[item.model]"
                        :disabled="item.disabled"
                        :filterable="item.filterable"
                        :size="item.size"
                        :placeholder="item.placeholder">
                    <Option v-for="e in item.children" :key="e.label" :value="e.label">
                        {{ e.text }}
                    </Option>
                </Select>
            </FormItem>
        </Form>
        <Table border ref="selection" :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
  export default {
    name: "ProTable",
    props: {
      form: {
        type: Object,
        default() {
          return "";
        }
      },
      formItems: {
        type: Array,
        default() {
          return [];
        }
      },
      //是否删除
      isDelete: {
        type: Boolean,
        default() {
          return false;
        }
      },
      columns: {
        type: Array,
        default() {
          return [];
        }
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  };
</script>

<style scoped>

</style>
