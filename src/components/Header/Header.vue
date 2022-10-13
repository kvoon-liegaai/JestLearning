<template>
  <input data-test="input" v-model="inputValue" @keyup.enter="safeAddTodoListItem(inputValue)"/>
</template>

<script lang='ts'>
  import {ref,defineComponent} from "vue"
  import type {Ref} from "vue";
  import {clearInputValue} from "./HeaderFn"
  import * as R from "ramda";
  export default defineComponent({
    emits:["addEvent"],
    setup(prop, {emit}){
      const inputValue:Ref<string> = ref<string>("");
      // 添加 todolist项
      const safeAddTodoListItem = R.pipe(
        R.unless(R.isEmpty, addTodoListItem),
        clearInputValue.bind(this, inputValue)
      )
      // Emit custom event from parent components
      function addTodoListItem(value:string){
        emit("addEvent",value)
      }
      return {
        inputValue,
        safeAddTodoListItem
      }
    }
  })
</script>

<style lang='scss' scoped>

</style>
