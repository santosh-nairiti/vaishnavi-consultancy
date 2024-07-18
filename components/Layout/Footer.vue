<template>
  <div>
    <div class="footer-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <div class="logo">
                <router-link to="./home-four">
                  <img src="../../assets/images/Vaishnavi-consultancy-logo.png" alt="image" style="width: 150px; height: auto;" />
                   <!-- <h3>Vaishnavi Consultancy</h3> -->
                </router-link>
              </div>
              
              <ul class="social">
                <li>
                  <a
                    href="#"
                    class="facebook"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="twitter"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="linkedin"
                  >
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-1"></div>

          <div class="col-lg-4 col-sm-6">
            <div class="single-footer-widget pl-5">
              <h3 style="color: #f24a25;">Important Links</h3>

              <ul class="quick-links">
                <li>
                  <router-link to="/about-one">About Us</router-link>
                </li>
                <li>
                  <router-link to="/contact-one">Contact</router-link>
                </li>
                <!-- <li>
                  <router-link to="/privacy-policy">Privacy Policy</router-link>
                </li> -->
              </ul>
            </div>
          </div>

          <!-- <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget pl-5">
              <h3>Featured Services</h3>

              <ul class="quick-links">
                <li>
                  <router-link to="#">
                    IT Management
                  </router-link>
                </li>
                <li>
                  <router-link to="#">Development</router-link>
                </li>
                <li>
                  <router-link to="#">UI/UX Design</router-link>
                </li>
                <li>
                  <router-link to="#">
                    Support Engineer
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    Website Development
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    App Development
                  </router-link>
                </li>
              </ul>
            </div>
          </div> -->

          <div class="col-lg-4 col-sm-6">
            <div class="single-footer-widget pl-5">
              <h3 style="color: #f24a25;">Information</h3>

              <ul class="footer-contact-info">
                <li>
                  <i class="flaticon-call" style="color: #f24a25;"></i>
                  <span>Phone</span>
                  <a href="tel:(123) 456-7890">(123) 456-7890</a>
                </li>
                <li>
                  <i class="flaticon-email-1" style="color: #f24a25;"></i>
                  <span>Email</span>
                  <a href="mailto:info@nairiti.com">info@nairiti.com</a>
                </li>
                <li>
                  <i class="flaticon-pin" style="color: #f24a25;"></i>
                  <span>Address</span>
                  <a
                    href="#"
                  >
                  123 Business Road, City, Country
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-area">
      <div class="container">
        <div class="copyright-area-content">
          <div class="row align-items-center text-center ">
            <div class="col-lg-12 col-md-6">
              <p>
                &copy; {{ currentYear }} All Rights Reserved by
                <a href="#" style="color: #f24a25;"> Vaishnavi Consultancy </a>
              </p>
            </div>

            <!-- <div class="col-lg-6 col-md-6">
              <ul>
                <li>
                  <router-link to="/terms-of-service">
                    Terms of Service
                  </router-link>
                </li>
                <li>
                  <router-link to="/privacy-policy">Privacy Policy</router-link>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>