<template>
    <div class="services-area bg-fafafa pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-code"></i>
                        </div>

                        <h3>
                            <router-link to="/services-details">Website Development</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                        <router-link to="/services-details" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-vector"></i>
                        </div>

                        <h3>
                            <router-link to="/services-details">Web Design</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                        <router-link to="/services-details" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-network"></i>
                        </div>

                        <h3>
                            <router-link to="/services-details">Social Media Marketing</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                        <router-link to="/services-details" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-search"></i>
                        </div>

                        <h3>
                            <router-link to="/services-details">Content Marketing</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                        <router-link to="/services-details" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-digital-marketing-1"></i>
                        </div>

                        <h3>
                            <router-link to="/services-details">Digital Media & PPC</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                        <router-link to="/services-details" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-cpu"></i>
                        </div>

                        <h3>
                            <router-link to="/services-details">Technology</router-link>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                        <router-link to="/services-details" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="default-shape">
            <div class="shape1">
                <img src="../../assets/images/default-shape/default-shape1.png" alt="image">
            </div>
            <div class="shape2">
                <img src="../../assets/images/default-shape/default-shape2.png" alt="image">
            </div>
            <div class="shape3">
                <img src="../../assets/images/default-shape/default-shape3.png" alt="image">
            </div>
            <div class="shape4">
                <img src="../../assets/images/default-shape/default-shape4.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ServicesCard',
}
</script>