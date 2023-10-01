<template>
    <footer aria-label="Site Footer" class="bg-footer-bg dark:bg-footer-bg">
        <div class="max-w-screen-2xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 justify-between">
                <div>
                    <div class="details text-teal-300 dark:text-teal-300 flex items-center justify-start">
                        <img src="../assets/logo-transparent.png" class="h-auto w-14 mr-3 self-start" alt="Ga East Logo" />
                        <div class="flex flex-col justify-start text-left">
                            <span class="text-2xl text-white dark:text-gray-400">
                                Ga East Municipal Assembly
                            </span>
                            <span class="text-white">Ga East Municipal Assembly <br> Head of Client Service Unit or Public
                                Relations Officer<br> P. O. Box AQ5 Abokobi </span>
                            <ul class="flex justify-start gap-6 mt-4">
                                <li>
                                    <a href="https://www.facebook.com/gema.abokobi" rel="noreferrer" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        <span class="sr-only">Facebook</span>

                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                    <div>
                        <p class="font-base text-center text-button-bg dark:text-white">Navigate</p>

                        <nav aria-label="Footer Navigation - Company" class="mt-6">
                            <ul class="space-y-4 text-sm text-center">
                                <router-link to="/about" custom v-slot="{ navigate }">
                                    <button @click="navigate"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        About
                                    </button>
                                </router-link>
                                <li>
                                    <a href="http://outlook.office365.com/" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Staff Mail
                                    </a>
                                </li>
                                <li>
                                    <router-link to="/contact" custom v-slot="{ navigate }">
                                        <button @click="navigate"
                                            class="text-white transition hover:opacity-75 dark:text-gray-200">
                                            Contact
                                        </button>
                                    </router-link>

                                </li>

                                <li>
                                    <router-link to="/documents" custom v-slot="{ navigate }">
                                        <button @click="navigate"
                                            class="text-white transition hover:opacity-75 dark:text-gray-200">
                                            Documents
                                        </button>
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="/gallery" custom v-slot="{ navigate }">
                                        <button @click="navigate"
                                            class="text-white transition hover:opacity-75 dark:text-gray-200">
                                            Gallery
                                        </button>
                                    </router-link>
                                </li>
                                <li @click="scrollToTop()">
                                    <a href="#" class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Back to top
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p class="text-center font-base text-button-bg dark:text-white">Useful Links</p>

                        <nav aria-label="Footer Navigation - Services" class="mt-6">
                            <ul class="space-y-4 text-sm text-center">
                                <li>
                                    <a href="http://lgs.gov.gh/" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Local Government Service
                                    </a>
                                </li>

                                <li>
                                    <a href="http://www.ghanadistricts.com/home/" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Ghana Districts
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.ghana.gov.gh/" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        GoG Official Portal
                                    </a>
                                </li>

                                <li>
                                    <a href="http://gogpayslip.com/" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        GoG E-Pay Slip
                                    </a>
                                </li>

                                <li>
                                    <a href="http://www.mlgrd.gov.gh/" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Ministry of Local Gov't and Rural Dev't
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/gema.abokobi" target="_blank"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Facebook-Ga East Municipal 
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <p class="font-base text-center text-button-bg dark:text-white">How to reach us </p>

                        <nav aria-label="Footer Navigation - Legal" class="mt-6">
                            <ul class="space-y-4 text-sm text-center">
                                <li>
                                    <a class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Tel: <a href="tel:0302-962718" class="text-footer-text">0302-962718/</a><a
                                            href="https://wa.me/0559920954" target="_blank">0559920954(Whatsapp)</a>
                                    </a>
                                </li>

                                <li class="cursor-pointer">
                                    <a @click="sendEmailGaEast()"
                                        class="text-white transition hover:opacity-75 dark:text-gray-200">
                                        Email: <span class="text-footer-text">info@gema.gov.gh</span>
                                    </a>
                                </li>

                                <li>
                                    <a class="text-white cursor-pointer transition hover:opacity-75 dark:text-gray-200">
                                        Working Hours: <span class="text-footer-text">9am-5pm</span>
                                    </a>
                                </li>

                                <li>
                                    <a class="text-white cursor-pointer transition hover:opacity-75 dark:text-gray-200">
                                        Digital Address: <span class="text-footer-text">GE-011-2678</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer transition hover:opacity-75 dark:text-gray-200">
                                        Region: <span class="text-footer-text">Greater Accra</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer transition hover:opacity-75 dark:text-gray-200">
                                        Post code: <span class="text-footer-text">255</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <p class="text-base text-white dark:text-gray-400">
               Ga East Municipal Assembly. All rights reserved. <span
                    class="text-button-bg font-bold cursor-pointer" @click="sendEmail()">Developed by
                    <span>VeriPas</span></span>
            </p>
        </div>
    </footer>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import { scrollToTop } from '@/functions';

//Email Functionality
const email = ref('sadickashton@gmail.com, judeedemnyahe@gmail.com');
const subject = ref('VeriPas');
const body = ref('Want to work with us. Proceed to send us an email');
const sendEmail = () => {
    window.location.href = `mailto:${email.value}?subject=${subject.value}&body=${body.value}`;
};

const emailGaEast = ref('info@gema.gov.gh');
const subjectGaEast = ref('Ga East Municipal Assembly, Head Office');
const bodyGaEast = ref('Send us an email and we will get back to you');
const sendEmailGaEast = () => {
    window.location.href = `mailto:${emailGaEast.value}?subject=${subjectGaEast.value}&body=${bodyGaEast.value}`;
};
</script>
<style scoped>
/* * {
    outline: 1px solid black;
} */

@media (max-width: 600px) {
    .details {
        display: none;
    }
}
</style>