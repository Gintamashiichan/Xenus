import { createApp } from "vue";
import * as buffer from "buffer";

import "./style.css";
import router from "./router";
import App from "./App.vue";

// 解决Buffer is not defined问题

typeof window.Buffer === "undefined" && typeof window.global === "undefined"
  ? ((window.global = window), (window.Buffer = buffer.Buffer))
  : null;

createApp(App).use(router).mount("#app");
