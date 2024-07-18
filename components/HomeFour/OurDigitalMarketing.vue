<template>
    <div class="services-area bg-0f051e ptb-50">
        <div class="container">
            <div class="section-title">
                <!-- <span>Services we provided</span> -->
                 <span>SERVICES WE PROVIDED</span>
                <h2>Our Digital Marketing Services</h2>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-code"></i>
                        </div>
                        <h3>
                            <router-link to="#">Digital Marketing</router-link>
                        </h3>
                        <!-- <p>Boost your online presence and connect with your audience through our comprehensive digital marketing services</p> -->
                        <ul style="text-align: left; list-style: none;">
                            <li>Social Media Marketing</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Pay-Per-Click (PPC) Campaigns</li>
                        </ul>
                        <router-link to="#" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>

                       </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-vector"></i>
                        </div>

                        <h3>
                            <router-link to="#">CRM Implementation</router-link>
                        </h3>
                        <!-- <p>Transform your customer relationships with our custom CRM solutions</p> -->
                         <ul style="text-align: left; list-style: none;">
                            <li>Custom CRM Solutions</li>
                            <li>CRM Integration</li>
                            <li>CRM Training & Support</li>
                         </ul>
                        <router-link to="#" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-network"></i>
                        </div>

                        <h3>
                            <router-link to="#">Automations</router-link>
                        </h3>
                        <!-- <p>Streamline your operations and save time with automation</p> -->
                         <ul style="text-align: left; list-style: none;">
                            <li>Workflow Automation</li>
                            <li>Marketing Automation</li>
                            <li>Sales Automation</li>
                         </ul>
                        <router-link to="#" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-search"></i>
                        </div>

                        <h3>
                            <router-link to="#">Web & App Development</router-link>
                        </h3>
                        <ul style="text-align: left; list-style: none;">
                            <li>Custom Website Development</li>
                            <li>Mobile App Development</li>
                            <li>E-commerce Solutions</li>
                        </ul>
                        <router-link to="#" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-digital-marketing-1"></i>
                        </div>

                        <h3>
                            <router-link to="#">Landing Page Generation</router-link>
                        </h3>
                        <ul style="text-align: left; list-style: none;">
                            <li>High-Converting Landing Pages</li>
                            <li>A/B Testing & Optimization</li>
                            <li>Lead Capture Forms</li>
                        </ul>
                        <router-link to="#" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-cpu"></i>
                        </div>

                        <h3>
                            <router-link to="#">Consultation & Customization</router-link>
                        </h3>
                        <ul style="text-align: left; list-style: none;">
                            <li>IT Consulting</li>
                            <li>Digital Strategy Planning</li>
                            <li>Custom Tech Solutions</li>
                        </ul>
                        <router-link to="#" class="services-btn">Read More <i class="flaticon-right-arrow"></i></router-link>
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
    name: 'OurDigitalMarketing',
}
</script>