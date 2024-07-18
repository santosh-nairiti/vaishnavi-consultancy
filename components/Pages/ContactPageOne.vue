<template>
    <div>
        <Navbar />
        <PageBanner />
        <ContactContent />
        <!-- <GetOnlyNewUpdate /> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/nairiti-navbar'
import PageBanner from '../ContactOne/PageBanner'
import ContactContent from '../ContactOne/ContactContent'
// import GetOnlyNewUpdate from '../Common/GetOnlyNewUpdate'
import Footer from '../Layout/Footer'

export default {
    name: 'ContactPageOne',
    components: {
        Navbar,
        PageBanner,
        ContactContent,
        // GetOnlyNewUpdate,
        Footer,
    }
}
</script>
