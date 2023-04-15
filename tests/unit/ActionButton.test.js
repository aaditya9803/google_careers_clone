import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "this is clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("this is clickable");
  });
  it("applies one of the styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "this is clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
