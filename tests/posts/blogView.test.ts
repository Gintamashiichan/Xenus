import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import BlogView from "../../src/views/Blogs/BlogView.vue";
import Router from "../../src/router/index";
describe("BlogView", () => {
  test("Test BlogView", () => {
    const wrapper = mount(BlogView, {
      global: {
        plugins: [Router],
      },
    });
    Router.push("/posts/Hello World");
    expect(wrapper.vm.$data.postData).not.toBeNull();
  });
});
