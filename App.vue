<template>
  <div>
    <Preloader v-if="isLoadin" />
    <router-view v-slot="{ Component }">
      <transition name="route" appear>
        <component :is="Component" />
      </transition>
    </router-view>

    <GoTop />
  </div>
</template>

<script>
import Preloader from "./components/Layout/Preloader";
import GoTop from "./components/Layout/GoTop";

export default {
  name: "App",
  components: {
    Preloader,
    GoTop,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style>
.route-enter-from {
  opacity: 0;
}
.route-enter-active,
.route-leave-active {
  transition: all 0.4s;
  filter: blur(3rem);
}
</style>
