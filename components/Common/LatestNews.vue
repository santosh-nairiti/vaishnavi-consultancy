<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span>Blog</span>
                <h2>Latest News From Blog</h2>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="image">
                            <router-link to="/blog-details">
                                <img src="../../assets/images/blog/blog-1.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="content">
                            <span>20 March, 2022</span>
                            <h3>
                                <router-link to="/blog-details">7 Great Tips For Earn More Money From Digital Industry</router-link>
                            </h3>
                            <router-link to="/blog-details" class="blog-btn">Read More <i class='bx bx-chevrons-right'></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="image">
                            <router-link to="/blog-details">
                                <img src="../../assets/images/blog/blog-2.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="content">
                            <span>25 March, 2022</span>
                            <h3>
                                <router-link to="/blog-details">How To Boost Your Digital Marketing Agency</router-link>
                            </h3>
                            <router-link to="/blog-details" class="blog-btn">Read More <i class='bx bx-chevrons-right'></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog">
                        <div class="image">
                            <router-link to="/blog-details">
                                <img src="../../assets/images/blog/blog-3.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="content">
                            <span>28 March, 2022</span>
                            <h3>
                                <router-link to="/blog-details">The Billionaire Guide On Design That will Get You Rich</router-link>
                            </h3>
                            <router-link to="/blog-details" class="blog-btn">Read More <i class='bx bx-chevrons-right'></i></router-link>
                        </div>
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
    name: 'LatestNews',
}
</script>