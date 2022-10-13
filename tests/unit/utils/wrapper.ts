import type {VueWrapper} from "@vue/test-utils"
export function findTestWrapper(wrapper:VueWrapper<any>, tag:string){
  return wrapper.find(`[data-test='${tag}']`)
}