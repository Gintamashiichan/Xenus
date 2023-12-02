import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import TagList from "../../src/views/Tags/TagList.vue";

describe("Tag List", () => {
  test("Test Tag list", () => {
    const wrapper = mount(TagList);
    expect(wrapper.vm.$data.tags).not.toBeNull();
  });
});
