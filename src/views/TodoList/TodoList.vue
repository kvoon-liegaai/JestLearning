<template>
  <Header @add-event="add"/>
  <ul>
    <li v-for="(item, key) in undoList" :key="key">{{item}}</li>
  </ul>
</template>

<script lang='ts'>
  import Header from "@/components/Header/Header.vue"
  import {reactive, defineComponent} from "vue"
  import * as R from "ramda"
  export default defineComponent({
    components:{Header},
    setup(){
      const undoList:Array<string> = reactive([]);
      function add(item:string):number{
        // return the length of the list
        return undoList.push(item)
      }
      return {
        add,
        undoList
      }
    }
  })
</script>

<style lang='scss' scoped>
  *{
    margin:0;
    padding:0;
  }
</style>
