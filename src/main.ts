import { createApp } from "vue";
import App from "./App.vue";
import route from "./router";
import "./css/main.css"
createApp(App).use(route).mount("#app");
