<template>
  <div class="client-area ptb-100">
    <div class="container">
      <div class="section-title">
        <span>Testimonials</span>
        <h2>Client’s Review</h2>
        <div class="bar"></div>
      </div>

      <div class="client-slider">
        <carousel
          :autoplay="7000"
          :settings="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="client-item">
              <p>{{ slide.desc }}</p>

              <div class="client-info">
                <img :src="slide.image" alt="image" />
                <h3>{{ slide.name }}</h3>
                <span>{{ slide.position }}</span>
              </div>
            </div>
          </slide>

          <template #addons>
            <Navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ClientsReview",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    carouselItems: [
      {
        id: 1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley",
        image: require("../../assets/images/client/client-1.jpg"),
        name: "Jacinda Meri",
        position: "CEO & Founder",
      },
      {
        id: 2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley",
        image: require("../../assets/images/client/client-2.jpg"),
        name: "Miraj Alex",
        position: "Chief Executive Officer",
      },
      {
        id: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley",
        image: require("../../assets/images/client/client-3.jpg"),
        name: "Edward Bold",
        position: "Web Developer",
      },
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
  }),
});
</script>