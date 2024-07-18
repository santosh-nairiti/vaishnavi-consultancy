<template>
    <div class="digital-experience-area ptb-50 d-none d-lg-block" id="digital-experience-area" style="background-color: #fff5ee;">
        <div class="container">
            <div class="section-title">
                <span>Digital Experience</span>
                <h2>Outstanding Digital Experience</h2>
                <div class="bar"></div>
            </div>

            <div class="digital-experience-tab">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            {{tab.title}}
                        </li>
                    </ul>
                </div>
                <div class="tabs__container">
                    <div 
                        class="tabs__list"
                        ref='tabsList'
                    >
                        <div 
                            class="tabs__list-tab"
                            v-for="tab in tabs"
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="digital-experience-content">
                                        <h3>{{tab.title}}</h3>
                                        <p>{{tab.description}}</p>

                                        <div 
                                            class="experience-inner-content"
                                            v-for="experience in tab.experienceInner"
                                            :key="experience.id"
                                        >
                                            <div class="icon">
                                                <i :class="experience.icon"></i>
                                            </div>
                                            <h5>{{experience.title}}</h5>
                                            <p>{{experience.desc}}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="digital-experience-image">
                                        <img :src="tab.image" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OutstandingDigitalExperience',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,

            tabs: [
                {
                    id: 1,
                    title: 'Digital Marketing',
                    description: 'Boost your online presence and connect with your audience through our comprehensive digital marketing services:',
                    experienceInner: [
                        {
                            id: 1,
                            icon: 'flaticon-check',
                            title: 'Social Media Marketing',
                            desc: 'Engage and grow your audience on all major platforms.',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-check',
                            title: 'Search Engine Optimization (SEO)',
                            desc: 'Improve your search rankings and drive organic traffic.',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-check',
                            title: 'Pay-Per-Click (PPC) Campaigns',
                            desc: 'Get immediate visibility and results with targeted ads.',
                        },
                        {
                            id: 4,
                            icon: 'flaticon-check',
                            title: 'Content Marketing',
                            desc: ' Create compelling content that resonates with your audience.',
                        },
                         {
                            id: 5,
                            icon: 'flaticon-check',
                            title: 'Email Marketing',
                            desc: 'Build and nurture customer relationships with effective email campaigns.',
                         },
                    ],
                    image: require('../../assets/images/quote/digi-img.png')
                },
                {
                    id: 2,
                    title: 'CRM Implementation',
                    description: 'Transform your customer relationships with our custom CRM solutions:',
                    experienceInner: [
                        {
                            id: 1,
                            icon: 'flaticon-check',
                            title: 'Custom CRM Solutions',
                            desc: 'Tailored systems to fit your business needs.',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-check',
                            title: 'CRM Integration',
                            desc: 'Seamlessly integrate CRM with your existing tools.',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-check',
                            title: 'CRM Training & Support',
                            desc: 'Empower your team with expert training and ongoing support.',
                        },
                        {
                            id: 4,
                            icon: 'flaticon-check',
                            title: 'Data Security & Compliance',
                            desc: 'Ensure data security and compliance with industry standards.',
                        },
                        {
                            id: 5,
                            icon: 'flaticon-check',
                            title: 'Custom Reporting & Analytics',
                            desc: 'Gain insights with custom reporting and analytics capabilities.',
                        },

                    ],
                    image: require('../../assets/images/digital-experience/digital-experience-2.png')
                },
                {
                    id: 3,
                    title: 'Automations',
                    description: 'Streamline your operations and save time with automation',
                    experienceInner: [
                        {
                            id: 1,
                            icon: 'flaticon-check',
                            title: 'Workflow Automation',
                            desc: ' Simplify and automate your business processes.',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-check',
                            title: 'Marketing Automation',
                            desc: 'Optimize your marketing efforts for better results.',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-check',
                            title: 'Sales Automation',
                            desc: 'Accelerate your sales cycle and close deals faster.',
                        },
                        {
                            id: 4,
                            icon: 'flaticon-check',
                            title: 'Customer Support Automation',
                            desc: 'Enhance customer service with automated support solutions.',
                        },
                        {
                            id: 5,
                            icon: 'flaticon-check',
                            title: 'Inventory Management Automation',
                            desc: 'Efficiently manage inventory levels and streamline operations.',
                        },

                    ],
                    image: require('../../assets/images/digital-experience/digital-experience-1.png')
                },
                {
                    id: 4,
                    title: 'Web & App Development',
                    description: 'Create a stunning online presence with our web and app development services',
                    experienceInner: [
                        {
                            id: 1,
                            icon: 'flaticon-check',
                            title: 'Custom Website Development',
                            desc: ' Design and build websites that captivate and convert.',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-check',
                            title: 'Mobile App Development',
                            desc: 'Develop apps that provide a seamless user experience.',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-check',
                            title: 'E-commerce Solutions',
                            desc: 'Launch your online store and grow your sales.',
                        },
                        {
                                id: 4,
                                icon: 'flaticon-check',
                                title: 'UI/UX Design',
                                desc: 'Create intuitive and user-friendly interfaces for websites and apps.',
                            },
                            {
                                id: 5,
                                icon: 'flaticon-check',
                                title: 'Cross-Platform Development',
                                desc: 'Build applications that work seamlessly across multiple platforms.',
                            },

                    ],
                    image: require('../../assets/images/digital-experience/digital-experience-4.png')
                },
                {
                    id: 5,
                    title: 'Landing Page Generation',
                    description: 'Capture leads and drive conversions with high-impact landing pages',
                    experienceInner: [
                        {
                            id: 1,
                            icon: 'flaticon-check',
                            title: 'High-Converting Landing Pages',
                            desc: 'Design landing pages that convert visitors into customers.',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-check',
                            title: 'A/B Testing & Optimization',
                            desc: ' Continuously improve performance with data-driven optimizations.',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-check',
                            title: 'Lead Capture Forms',
                            desc: ' Collect valuable leads with optimized forms.',
                        },
                        {
                            id: 4,
                            icon: 'flaticon-check',
                            title: 'Responsive Design',
                            desc: 'Ensure landing pages look great and function well on all devices and screen sizes.',
                        },
                        {
                            id: 5,
                            icon: 'flaticon-check',
                            title: 'Conversion Rate Optimization (CRO)',
                            desc: 'Optimize landing pages to increase the percentage of visitors who take desired actions.',
                        },

                    ],
                    image: require('../../assets/images/digital-experience/digital-experience-5.png')
                },
                {
                    id: 6,
                    title: 'Consultation & Customization',
                    description: 'Get expert advice and tailor-made solutions to meet your unique business needs',
                    experienceInner: [
                        {
                            id: 1,
                            icon: 'flaticon-check',
                            title: 'IT Consulting',
                            desc: 'Navigate the complexities of technology with expert guidance.',
                        },
                        {
                            id: 2,
                            icon: 'flaticon-check',
                            title: 'Digital Strategy Planning',
                            desc: 'Develop a comprehensive strategy to achieve your goals.',
                        },
                        {
                            id: 3,
                            icon: 'flaticon-check',
                            title: 'Custom Tech Solutions',
                            desc: 'Create bespoke solutions that address your specific challenges.',
                        },
                        {
                            id: 4,
                            icon: 'flaticon-check',
                            title: 'Implementation Support',
                            desc: 'Assist in implementing customized solutions and ensuring smooth adoption.',
                        },
                        {
                            id: 5,
                            icon: 'flaticon-check',
                            title: 'Performance Analysis',
                            desc: 'Analyze and optimize your systems to maximize efficiency and effectiveness.',
                        },

                    ],
                    image: require('../../assets/images/digital-experience/digital-experience-6.png')
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
}
</script>

<style scoped>
    @media only screen and (max-width: 360px) {
        .tabs__header-item {
            width: 50%;
        }
    }
    </style>