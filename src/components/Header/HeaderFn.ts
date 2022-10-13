import type {Ref} from "vue"

/**
 * @marks - 清除输入框绑定的 ref value值
*/
export function clearInputValue(input:Ref<string>){ // ref的引用
  input.value = "";
}