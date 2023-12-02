import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import TagClassification from "../../src/views/Tags/TagClassification.vue";
import Router from "../../src/router/index";

describe("Tag Cassification", () => {
  test("Test Tags", () => {
    const wrapper = mount(TagClassification, {
      global: {
        plugins: [Router],
      },
    });
    Router.push("/");
    expect(wrapper.vm.$data.posts).not.toBeNull();
  });
});
