<template>
    <div>
        <Navbar />
        <PageBanner />
        <FaqContent />
        <FaqContact />
        <GetOnlyNewUpdate />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageBanner from '../Faq/PageBanner'
import FaqContent from '../Faq/FaqContent'
import FaqContact from '../Faq/FaqContact'
import GetOnlyNewUpdate from '../Common/GetOnlyNewUpdate'
import Footer from '../Layout/Footer'

export default {
    name: 'FaqPage',
    components: {
        Navbar,
        PageBanner,
        FaqContent,
        FaqContact,
        GetOnlyNewUpdate,
        Footer,
    }
}
</script>
