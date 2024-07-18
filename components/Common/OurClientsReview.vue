<template>
    <div class="testimonial-area overly-bg ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-6">
                    <div class="testimonial-content">
                        <span>Testimonials</span>
                        <h2>Our Client’s Review</h2>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>

            <div class="testimonial-slider">
                <carousel 
                    :autoplay="5000"
                    :settings="settings"
                    :wrap-around="true"
                    :breakpoints="breakpoints"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="testimonial-item">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div :class="slide.class"></div>
                                </div>
            
                                <div class="col-lg-6">
                                    <div class="testimonial-inner-content">
                                        <div class="icon">
                                            <i :class="slide.icon"></i>
                                        </div>
                                        <p>{{slide.desc}}</p>

                                        <div class="info-text">
                                            <h4>{{slide.name}}</h4>
                                            <span>{{slide.position}}</span>
                                        </div>
                                    </div>
                                </div>
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
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'OurClientsReview',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                class: 'testimonial-image',
                icon: 'flaticon-left-quotes-sign',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus  maecenas accumsan noniice Lorem Ipsum.',
                name: 'Morris Jacket',
                position: 'Web Developer',
            },
            {
                id: 2,
                class: 'testimonial-image image-two',
                icon: 'flaticon-left-quotes-sign',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus  maecenas accumsan noniice Lorem Ipsum.',
                name: 'Mahindra Jhon',
                position: 'App Developer',
            },
            {
                id: 3,
                class: 'testimonial-image image-three',
                icon: 'flaticon-left-quotes-sign',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus  maecenas accumsan noniice Lorem Ipsum.',
                name: 'Lee Munroe',
                position: 'Web Developer',
            },
        ],
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
    }),
})
</script>