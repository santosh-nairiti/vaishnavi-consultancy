<template>
    <div>
        <Navbar />
        <MainBanner />
        <WeHelpCompanies />
        <WeHelpMobileScreen />
        <!-- <Features /> -->
        <!-- <OurDigitalMarketing /> -->
        <!-- <HelpingBusinesses /> -->
        <!-- <LatestNews /> -->
        <!-- <GetOnlyNewUpdate /> -->
        <OutstandingDigitalExperience />
        <faqHome />
        <OurImpressivePortfolio />
        <!-- <ClientsReview /> -->
        <!-- <Partner class="pt-100" /> -->
        <GetFreeAdvity />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/nairiti-navbar'
import MainBanner from '../HomeFour/MainBanner'
import WeHelpCompanies from '../HomeFour/WeHelpCompanies'
import WeHelpMobileScreen from '../HomeFour/WeHelpMobileScreen'
// import Features from '../Common/Features'
// import OurDigitalMarketing from '../HomeFour/OurDigitalMarketing'
// import HelpingBusinesses from '../Common/HelpingBusinesses'
// import LatestNews from '../Common/LatestNews'
// import GetOnlyNewUpdate from '../Common/GetOnlyNewUpdate'
import OutstandingDigitalExperience from '../Common/OutstandingDigitalExperience'
import faqHome from '../HomeFour/faqHome'
import OurImpressivePortfolio from '../HomeFour/OurImpressivePortfolio'
// import ClientsReview from '../Common/ClientsReview'
// import Partner from '../Common/Partner'
import GetFreeAdvity from '../HomeFour/GetFreeAdvity'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageFour',
    components: {
        Navbar,
        MainBanner,
        WeHelpCompanies,
        WeHelpMobileScreen,
        // Features,
        // OurDigitalMarketing,
        // HelpingBusinesses,
        // LatestNews,
        // GetOnlyNewUpdate,
        OutstandingDigitalExperience,
        faqHome,
        OurImpressivePortfolio,
        // ClientsReview,
        // Partner,
        GetFreeAdvity,
        Footer,
    }
}
</script>
