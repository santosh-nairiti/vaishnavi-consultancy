<template>
    <div>
        <div class="about-area ptb-50">
          <div class="container">
            <div class="row align-items-center">
    
              <div class="col-lg-6">
                <div class="about-content warp">
                  <span>Why Choose Vaishnavi Consultancy?</span>
                  <div class="bar"></div>
                  <p>At Vaishnavi Consultancy, We Combine Expertise With Innovation To Deliver Tailored Solutions That Drive Success. Here's Why Businesses Choose Us:</p>
    
                  <div class="about-inner-content">
                    <div class="icon">
                      <i class="flaticon-check"></i>
                    </div>
                    <h5>Expertise :</h5>
                    <p>
                        Our team of seasoned professionals brings a wealth of experience in IT and digital marketing.
                    </p>
                  </div>
    
                  <div class="about-inner-content">
                    <div class="icon">
                      <i class="flaticon-check"></i>
                    </div>
                    <h5>Customized Solutions :</h5>
                    <p>
                        We understand that every business is unique, and we tailor our solutions to meet your specific needs.
                    </p>
                  </div>
    
                  <div class="about-inner-content">
                    <div class="icon">
                      <i class="flaticon-check"></i>
                    </div>
                    <h5>Results-Driven :</h5>
                    <p>
                        We focus on delivering measurable results that drive your business growth.
                    </p>
                  </div>
                  <div class="about-inner-content">
                    <div class="icon">
                      <i class="flaticon-check"></i>
                    </div>
                    <h5>Comprehensive Support :</h5>
                    <p>
                        From consultation to implementation and beyond, we're with you every step of the way.
                    </p>
                  </div>
    
                  <!-- <div class="about-btn">
                    <NuxtLink to="#" class="default-btn">
                      Learn More
                    </NuxtLink>
                  </div> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <img src="/img/digital-experience-2.182cc1d2.png" alt="">
                  <!-- <div
                    class="video-btn popup-youtube"
                    @click="togglePopup"
                    style="cursor: pointer"
                  >
                    <i class="bx bx-play"></i>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="popup-video" v-if="isPopup">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="popup-overlay-close" @click="togglePopup">
                <div class="popup-overlay-close-line"></div>
                <div class="popup-overlay-close-line"></div>
              </div>
              <div class="play-video">
                <iframe
                  src="https://www.youtube.com/embed/g1WG4D0Aiek"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name: 'OurImpressivePortfolio',
}
</script>