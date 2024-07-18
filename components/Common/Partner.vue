<template>
  <div class="partner-area pb-100">
    <div class="container">
      <div class="partner-slider">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="partner-item">
              <img :src="slide.image" alt="image" />
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Partner",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/images/partner/partner-1.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/partner/partner-2.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/partner/partner-3.png"),
      },
      {
        id: 4,
        image: require("../../assets/images/partner/partner-4.png"),
      },
      {
        id: 5,
        image: require("../../assets/images/partner/partner-5.png"),
      },
      {
        id: 6,
        image: require("../../assets/images/partner/partner-2.png"),
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      576: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      768: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 4,
        snapAlign: "left",
      },
      1200: {
        itemsToShow: 5,
        snapAlign: "center",
      },
    },
  }),
});
</script>