import {shallowMount} from "@vue/test-utils";
import TodoList from "@/views/TodoList/TodoList.vue";
import Header from "@/components/Header/Header.vue"
describe("Todolist.vue", () => {
  it("组件正常渲染", () => {
    const wrapper = shallowMount(TodoList)
  })

  it("组件初始化时候 undoList 应该为空", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    expect(undoList).toEqual([]);
  })

  it("执行 add 方法的时候 应该增加一个 undoList item", () => {
    const wrapper = shallowMount(TodoList);
    const header = shallowMount(Header)
    header.vm.safeAddTodoListItem("cook");
    const undoList = wrapper.vm.undoList;
    // expect(undoList[undoList.length - 1]).toBe("cook");
    console.log(undoList)
  })
})