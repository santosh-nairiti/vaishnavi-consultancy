import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageFour from "../components/Pages/HomePageFour";
import AboutPageOne from "../components/Pages/AboutPageOne";
import ContactPageOne from "../components/Pages/ContactPageOne";

const routes = [
  { path: "/home-four", component: HomePageFour },
  { path: "/about-one", component: AboutPageOne },
  { path: "/contact-one", component: ContactPageOne },
];


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;