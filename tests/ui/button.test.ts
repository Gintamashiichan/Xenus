import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import Buttons from "../../src/ui/Buttons.vue";

describe("Buttons", () => {
  test("Test button", () => {
    const type = "primary";
    const wrapper = mount(Buttons, {
      props: { type },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["btn", `btn-${type}`]),
    );
  });
});
