<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
      <div class="main-navbar">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand" to="./home-four">
              <img src="../../assets/images/Vaishnavi-consultancy-logo.png" alt="image" style="width: 130px; height: auto;" />
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
              <ul class="navbar-nav me-0">
                <li class="nav-item">
                  <a href="/home-four" class="nav-link">
                    Home
                  </a>
                </li>
                <!-- for home-five -->
                <!-- <li class="nav-item">
                  <a href="#" class="nav-link">
                    Home
                    <i class="bx bx-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
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
                </li> -->

                <!-- home-five ended -->


                <!-- /about-one  /contact-one-->
                <li class="nav-item">
                  <a href="/about-one" class="nav-link">
                    About
                  </a>
                </li>

                <li class="nav-item">
                  <a href="/contact-one" class="nav-link">
                    Contact
                  </a>
                </li>
  
              </ul>
  
              <!-- <div class="others-options d-flex align-items-center">
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
              </div> -->
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