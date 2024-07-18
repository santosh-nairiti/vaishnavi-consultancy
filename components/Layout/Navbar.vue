<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="main-navbar">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/images/logo.png" alt="image" />
          </router-link>

          <div
            class="navbar-toggler"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }"
            v-on:click="button_active_state = !button_active_state"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </div>

          <div class="collapse navbar-collapse" :class="{ show: active }">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Home
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">
                      Home One
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/home-two" class="nav-link">
                      Home Two
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/home-three" class="nav-link">
                      Home Three
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/home-four" class="nav-link">
                      Home Four
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/home-five" class="nav-link">
                      Home Five
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pages
                  <i class="bx bx-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      About
                      <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/about-one" class="nav-link">
                          About One
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/about-two" class="nav-link">
                          About Two
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Team
                      <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/team-one" class="nav-link">
                          Team One
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/team-two" class="nav-link">
                          Team Two
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Pricing
                      <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/pricing-one" class="nav-link">
                          Pricing One
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/pricing-two" class="nav-link">
                          Pricing Two
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Shop
                      <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/shop-one" class="nav-link">
                          Shop List One
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/shop-two" class="nav-link">
                          Shop List Two
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/cart" class="nav-link">
                          Cart
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/checkout" class="nav-link">
                          Checkout
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/shop-details" class="nav-link">
                          Shop Details
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Features
                      <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/features-one" class="nav-link">
                          Features One
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/features-two" class="nav-link">
                          Features Two
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <router-link to="/testimonials" class="nav-link">
                      Testimonials
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link"> FAQ </router-link>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Account
                      <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/login" class="nav-link">
                          Login
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/register" class="nav-link">
                          Register
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link to="/forgot-password" class="nav-link">
                          Forgot Password
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <router-link to="/error-404" class="nav-link">
                      Error Page
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/terms-of-service" class="nav-link">
                      Terms of Service
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/privacy-policy" class="nav-link">
                      Privacy Policy
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Services
                  <i class="bx bx-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/services-one" class="nav-link">
                      Services One
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/services-two" class="nav-link">
                      Services Two
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/services-three" class="nav-link">
                      Services Three
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/services-details" class="nav-link">
                      Services Details
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Portfolio
                  <i class="bx bx-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/portfolio-one" class="nav-link">
                      Portfolio Two Column
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/portfolio-two" class="nav-link">
                      Portfolio Three Column
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/portfolio-three" class="nav-link">
                      Portfolio Four Column
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/portfolio-details" class="nav-link">
                      Portfolio Details
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Blog
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/blog-one" class="nav-link">
                      Blog Two Column
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/blog-two" class="nav-link">
                      Blog Three Column
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/blog-three" class="nav-link">
                      Blog Four Column
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/blog-details" class="nav-link">
                      Blog Details
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Contact
                  <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/contact-one" class="nav-link">
                      Contact Style One
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/contact-two" class="nav-link">
                      Contact Style Two
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="others-options d-flex align-items-center">
              <div class="option-item">
                <div class="cart-btn">
                  <router-link to="/cart">
                    <i class="flaticon-shopping-cart"></i>
                    <span>0</span>
                  </router-link>
                </div>
              </div>

              <div class="option-item">
                <div class="search-box" v-on:click="isSearchMethod(isSearch)">
                  <i class="flaticon-loupe"></i>
                </div>
              </div>

              <div class="search-overlay" v-if="isSearch">
                <div class="d-table">
                  <div class="d-table-cell">
                    <div class="search-overlay-layer"></div>
                    <div class="search-overlay-layer"></div>
                    <div class="search-overlay-layer"></div>

                    <div
                      class="search-overlay-close"
                      v-on:click="isSearchMethod(isSearch)"
                    >
                      <span class="search-overlay-close-line"></span>
                      <span class="search-overlay-close-line"></span>
                    </div>

                    <div class="search-overlay-form">
                      <form>
                        <input
                          type="text"
                          class="input-search"
                          placeholder="Search here..."
                        />
                        <button type="submit">
                          <i class="flaticon-loupe"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="option-item">
                <router-link to="/pricing-one" class="default-btn">
                  Get Quote
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      isSticky: false,
      isSearch: false,
      isDot: false,
      active: false,
      button_active_state: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },

  methods: {
    isSearchMethod(isSearch) {
      console.log(this.isSearch);
      return (this.isSearch = !isSearch);
    },
  },
};
</script>