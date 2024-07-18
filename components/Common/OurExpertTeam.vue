<template>
  <div class="team-area pb-100">
    <div class="container">
      <div class="section-title">
        <span>Team Member</span>
        <h2>Our Expert Team</h2>
        <div class="bar"></div>
      </div>

      <div class="team-slider">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-team">
              <div class="image">
                <img :src="slide.image" alt="image" />

                <ul class="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>

                <div class="content">
                  <h3>{{ slide.name }}</h3>
                  <span>{{ slide.position }}</span>
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "OurExpertTeam",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/images/team/team-1.jpg"),
        name: "Justin Roberto",
        position: "CEO & Founder",
      },
      {
        id: 2,
        image: require("../../assets/images/team/team-2.jpg"),
        name: "Jacinda Meri",
        position: "Web Developer",
      },
      {
        id: 3,
        image: require("../../assets/images/team/team-3.jpg"),
        name: "Miraj Alex",
        position: "Chief Executive Officer",
      },
      {
        id: 4,
        image: require("../../assets/images/team/team-4.jpg"),
        name: "Edward Bold",
        position: "UI/UX Designer",
      },
      {
        id: 5,
        image: require("../../assets/images/team/team-5.jpg"),
        name: "Alastair Cook",
        position: "Marketing Support",
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      576: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 4,
        snapAlign: "left",
      },
    },
  }),
});
</script>