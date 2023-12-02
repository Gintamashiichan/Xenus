import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import PostList from "../../src/views/Blogs/PostList.vue";

describe("PostList", () => {
  test("Test PostList", () => {
    const wrapper = mount(PostList);
    expect(wrapper.vm.$data.posts).not.toBeNull();
  });
});
