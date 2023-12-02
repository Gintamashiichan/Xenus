import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "../../src/components/Card.vue";
import Router from "../../src/router/index";

describe("Card", () => {
  test("Test card", () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [Router],
      },
    });
    Router.push("/");
    expect(wrapper.text()).not.toBeNull();
  });
});
