<template>
    <div>
        <Navbar />
        <PageBanner />
        <WeHelpCompanies />
        <!-- <OurExpertTeam /> -->
        <!-- <TheBestSolutions /> -->
        <MarketingGoals />
        <!-- <OurClientsReview /> -->
        <!-- <FunFacts /> -->
        <!-- <GetOnlyNewUpdate /> -->
        <!-- <Partner class="pt-100" /> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/nairiti-navbar'
import PageBanner from '../AboutOne/PageBanner'
import WeHelpCompanies from '../AboutOne/WeHelpCompanies'
// import OurExpertTeam from '../Common/OurExpertTeam'
// import TheBestSolutions from '../Common/TheBestSolutions'
import MarketingGoals from '../AboutOne/MarketingGoals'
// import OurClientsReview from '../AboutOne/OurClientsReview'
// import FunFacts from '../AboutOne/FunFacts'
// import GetOnlyNewUpdate from '../Common/GetOnlyNewUpdate'
// import Partner from '../Common/Partner'
import Footer from '../Layout/Footer'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageBanner,
        WeHelpCompanies,
        // OurExpertTeam,
        // TheBestSolutions,
        MarketingGoals,
        // OurClientsReview,
        // FunFacts,
        // GetOnlyNewUpdate,
        // Partner,
        Footer,
    }
}
</script>
