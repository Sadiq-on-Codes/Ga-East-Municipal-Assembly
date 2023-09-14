<template>
    <div class="relative about-container bg-about-bg dark:bg-gray-800">
        <div class="flex flex-col gap-20">
            <h1
                class="pt-36 pb-20 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl uppercase dark:text-white">
                About Us
            </h1>

            <div class="about-section w-3/4 mx-auto flex gap-20">
                <div class="section flex flex-col gap-5 w-5/12 text-left text-black">
                    <span
                        class="text-lg font-bold leading-none tracking-tight text-black-900 md:text-xl capitalize dark:text-white">Introduction</span>
                    <span class="text-justify dark:text-gray-400">The Ga East Municipality with a projected population of 186,230 is
                        one of the 29 districts in the Greater Accra Region. Ga East is unique
                        for its hosting of the elite population in the nation’s capital and is
                        also noted for its well-planned physical layout, which has attracted
                        many Real Estate Companies such as Oak Villa, Regimanuel Gray, Edlorm
                        Estate etc to the municipality.</span>
                </div>
                <div class="section flex flex-col gap-5 w-5/12 text-left text-black">
                    <span
                        class="text-lg font-bold leading-none tracking-tight text-black-900 md:text-xl capitalize dark:text-white">Political
                        Administration</span>
                    <span class="text-justify last dark:text-gray-400">The Ga East Municipal Assembly has a General Assembly membership of
                        18 comprising 12 elected members, 6 government appointees, 1 Member of
                        Parliament with the Municipal Chief Executive as the representative of
                        the Head of State at the Municipal level. The General Assembly has 2
                        committees which are the Executive Committee and Public Relations
                        Complaints Committee (PRCC). It also has 5 statutory Sub-Committees
                        and 6 other non- statutory sub-committees. The five are Finance and
                        Administration (F&A), Works Sub-Committee, Development Planning,
                        Social Services and Justice and Security Sub-Committees. The
                        non-statutory committees are Education, Agriculture, Environmental and
                        Sanitation, Women and Children, Micro and Small Enterprises Promotion
                        and Revenue Mobilization sub-committees</span>
                </div>
            </div>

            <div class="about-section w-3/4 mx-auto mb-20 flex gap-20">
                <div class="section flex flex-col gap-5 w-5/12 text-left text-black">
                    <img class="values-logo" src="../assets/our-vision.svg" alt="" />
                    <span
                        class="text-lg font-bold leading-none tracking-tight text-black-900 md:text-xl capitalize dark:text-white">Our
                        Vision</span>
                    <span class="text-justify dark:text-gray-400">To become a highly professional, dynamic and client-sensitive
                        Assembly, focusing on sustainable development.</span>
                </div>
                <div class="section flex flex-col gap-5 w-5/12 text-left text-black">
                    <img class="values-logo" src="../assets/our-mission.svg" alt="" />
                    <span
                        class="text-lg font-bold leading-none tracking-tight text-black-900 md:text-xl capitalize dark:text-white">Our
                        Mission</span>
                    <span class="text-justify dark:text-gray-400">To facilitate improvement in quality of life of the people through
                        provision and promotion os basi socio-economin services within the
                        context of good governance.</span>
                </div>
                <div class="section flex flex-col gap-5 w-5/12 text-left text-black">
                    <img class="values-logo dark:fill-white" src="../assets/our-vision.svg" alt="" />
                    <span
                        class="text-lg font-bold leading-none tracking-tight text-black-900 md:text-xl capitalize dark:text-white">Geo
                        Location</span>
                    <span class="text-justify dark:text-gray-400">Ga East Municipal District is bordered on the north by the Akuapim
                        South District in the Eastern Region of Ghana. It is bordered on its
                        other three sides by other districts in the Greater Accra Region of
                        Ghana. To the west is the Ga West District, to the south Accra
                        Metropolis District and in the east the Tema Metropolis
                        District.</span>
                </div>
            </div>
        </div>
    </div>
<Footer />
</template>
<script setup lang="ts">
import Footer from "@/components/Footer.vue"
</script>
<style>
/* .about-container {
    background-color: #f4fff6;
} */

.values-logo {
    width: 6em;
    height: 6em;
    margin-bottom: 1em;
}

/* .about-section {
    width: 75%;
    margin: 0 auto;
} */

@media (max-width: 1200px) {
    .about-section {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }

    .text {
        text-align: left;
    }

    .last {
        margin-bottom: 5em;
    }
    .values-logo {
        align-self: center;
    }

    .section {
        width: 100%;
    }
}
</style>
