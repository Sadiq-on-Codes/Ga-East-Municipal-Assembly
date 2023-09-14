<template>
    <div class="flex flex-col justify-between h-screen">
        <section class="max-w-7xl w-full my-16 mx-auto px-4 sm:px- mb-20 lg:px-4">
            <Loader class="" v-if='!departments || departments.name === "undefined" || departments.about === "undefined" || departments === "undefined"' />
            <div class="department flex gap-2 v-else">
                <div class="w-4/5 flex justify-start items-start mb-8 flex-col gap-4">
                    <span class="text-4xl font-bold text-left">{{ departments.name }}</span>
                    <span v-html="decodeEntities(departments.about)" class="text-left dark:text-gray-400"></span>
                </div>
                <div class="w-1/5 flex flex-col justify-start">
                    <span class="text-xl font-bold text-left">Related Units</span>
                    <ul>
                        <li @click="setUnit(unit)" class="text-left hover:text-button-bg cursor-pointer my-2 border-b" v-for="unit in departments.unit" :key="unit.id">{{ unit.title }}
                        </li>
                    </ul>
                </div>
            </div>

            
        </section>
        <div>
            <Footer />
        </div>

    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { url } from "@/functions/endpoint";
import { useRoute } from "vue-router";
import Footer from '@/components/Footer.vue';
import Loader from "@/components/Loader.vue";
import { decodeEntities } from "@/functions";
import { decryptString } from '@/functions/encryption';
import { computed, ref, watch } from "vue";

const route = useRoute();
const documentId = computed(() => decryptString(route.params.id.toString()));

const departments: any = ref([]);
const fetchData = async () => {
    try {
        const response = await axios.get(`${url}/departments/${parseInt(documentId.value)}`);
        departments.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const setUnit = (unit: {title: string, about: string}) => {
    departments.value.name = unit.title;
    departments.value.about = unit.about;
}

fetchData();
watch(documentId, () => {
    fetchData();
});
</script>
<style>
@media (max-width: 600px) {
 .department {
    flex-direction: column;
 }

 .department div {
    width: 100%;
 }
}
</style>