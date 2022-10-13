import {shallowMount} from "@vue/test-utils";
import Header from "@/components/Header/Header.vue";

describe("input 框", () => {
  it("包含 input 框", () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]');
    expect(input.exists()).toBe(true);
  })

  it("Header 中 input 框初始内容为空", () => {
    const wrapper = shallowMount(Header);
    // 如果是组合式 api: wrapper.vm.inputValue
    // 如果是选项式 api: wrapper.vm.$data.inputValue
    const inputValue = wrapper.vm.inputValue;
    expect(inputValue).toBe("");
  })

  it("inputValue should be changed when input field are changed", () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='input']");
    input.setValue("kwongliegaai");
    const inputValue = wrapper.vm.inputValue;
    expect(inputValue).toBe("kwongliegaai");
  })

  it("Header 中 input 框输入 enter ，无内容，无反应", () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='input']");
    input.setValue("");
    input.trigger("keyup.enter")
    // 断言 时间未被触发
    expect(wrapper.emitted().addEvent).toBeFalsy()
  })

  it("Header 中 input 框输入 enter ，有内容，触发自定义事件, input 框内容被清空", () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='input']");
    input.setValue("kwongliegaai");
    input.trigger("keyup.enter")
    // 断言 时间未被触发
    expect(wrapper.emitted().addEvent).toBeTruthy();
    expect(wrapper.vm.inputValue).toBe("");
  })
})