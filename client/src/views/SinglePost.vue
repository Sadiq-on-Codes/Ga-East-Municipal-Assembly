<template>
    <div class="dark:bg-gray-800">
        <section class="single max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
    <div class="flex mb-20 w-full gap-10 justify-around">
      <div class="flex mt-20 text-left flex-col gap-28 items-left">
        <span
          class="bg-transparent h-6 text-lg font-medium inline-flex items-center py-0.5 dark:text-green-400"
        >
          <span class="text-button-bg-hover text-lg mr-1.5">Posted on </span>

          <span class="text-lg ml-1.5">Feb 14 2023</span>
        </span>
        <h1
          class="text-6xl uppercase text-left font-semibold text-[#322121] w-10/12 dark:text-white"
        >
          GEMA HOLDS PUBLIC HEARING ON MTDP
        </h1>
      </div>
      <img class="single-post-image mt-20" src="../assets/news-1.jpeg" alt="" />
    </div>

    <div class="mb-20 text-left">
      <span class="text-left font-base text-black dark:text-white">
        Lorem ipsum dolor sit amet. Ex harum praesentium in quia galisum ea sunt
        voluptatem est rerum voluptate. Ea voluptas porro aut minima dolorum nam
        eveniet quia. Aut recusandae iste quo inventore totam aut similique enim
        et necessitatibus veritatis. <br /><br />
        Qui fugiat nisi vel velit inventore qui neque odit aut eius praesentium
        est esse quas. Quo vitae blanditiis non consequatur modi sit autem
        tenetur aut quia aspernatur est dolorum officia. Ut distinctio officiis
        quo sequi inventore et repellendus Quis ut eaque omnis est totam
        laborum. <br /><br />
        Est optio commodi eum dignissimos quisquam et expedita dolore est quia
        tempore aut molestiae libero quo nesciunt adipisci. Aut recusandae
        doloribus hic illum dolores hic totam officiis ut consectetur dolores ab
        voluptate nihil. <br /><br />

        Lorem ipsum dolor sit amet. Rem nisi debitis nam maiores quia ad
        aspernatur iure sed cupiditate omnis est possimus illum sit iusto dolor
        et ipsam dignissimos. Et similique molestiae aut harum expedita 33
        voluptatem maiores ut modi voluptates aut ullam voluptatibus ab harum
        earum ut voluptatibus enim! In voluptas iure ut velit beatae et aliquam
        vero aut omnis dolorem sit odit dolore et iusto dolor! Non nihil dolores
        vel tenetur explicabo aut expedita enim quo alias saepe qui quam enim.
        At aliquam sint hic beatae Quis eos pariatur illum in obcaecati
        nesciunt! Sed ducimus pariatur cum voluptatum quia id aperiam debitis
        non dolorem praesentium ea voluptatibus similique? Sed quidem alias eos
        rerum deleniti ut ipsam internos 33 consequatur officia aut quisquam
        nemo in deleniti asperiores! <br /><br />
        Qui aspernatur quaerat sed nisi mollitia ea adipisci sequi et molestias
        doloremque et consequuntur impedit. Eum vero amet nam voluptatem ipsa
        sit suscipit molestiae est odit nihil qui inventore quibusdam 33
        obcaecati quibusdam qui saepe recusandae! Eos quis sapiente sit debitis
        deserunt ut quod voluptate in Quis illum. Sit distinctio praesentium nam
        rerum saepe et consectetur dolores? Non molestiae consequuntur ut velit
        voluptatem non magnam consectetur ut accusantium fuga hic consequatur
        eaque ea ratione repudiandae et voluptatem atque.
      </span>
    </div>

    <div class="mb-20 text-left">
      <span class="block w-full text-left pb-4 border-b-2 dark:text-white">Comments</span>
      <div class="mx-5 mt-10 flex gap-3">
        <img src="../assets/profile.svg" alt="" />
        <div class="flex content-center my-auto flex-col gap-1.5">
          <span class="text-[#847474] font-semibold uppercase"
            >Abubakar Sadick Yahaya</span
          >
          <span class="dark:text-white">Ga East is the best municipality in Ghana</span>
        </div>
      </div>

      <div class="mt-20 max-w-2xl mx-auto">
        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <input
              type="search"
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-transparent focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="Add a comment...."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-0 text-sm px-4 py-2"
            >
              <span><img class="w-10 h-auto" src="../assets/search.svg" alt=""></span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="">
      <span class="mb-5 block w-full font-semibold text-left dark:text-white"
        >You may also like</span
      >
      <article class="">
        <section
          class="dark:text-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20"
        >
          <div
            class="cursor-pointer mb-20"
            v-for="newsItem in news"
            :key="newsItem.id"
          >
            <router-link
              :to="'/single-post/' + newsItem.id"
              custom
              v-slot="{ navigate }"
            >
              <article
                @click="navigate"
                class="relative w-full h-64 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
                :style="{ backgroundImage: `url(${newsItem.imageUrl})` }"
              >
                <div
                  class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
                ></div>
              </article>
              <div @click="navigate" class="flex flex-col gap-3 mt-3 text-left">
                <span
                  class="bg-transparent h-6 text-xs font-medium inline-flex items-center py-0.5 dark:text-green-400"
                >
                  <span class="text-[#25C200] text-base mr-1.5"
                    >Posted on
                  </span>
                  <span
                    class="py-1 px-1.5 rounded-md bg-[#EBEEF2] text-base ml-1.5"
                    >{{ newsItem.postedAt }}</span
                  >
                </span>
                <span
                  class="hover:underline text-news-section-text dark:text-white text-lg"
                  >{{ newsItem.title }}</span
                >
                <p
                  class="hover:underline description font-light text-gray-500 dark:text-gray-400"
                >
                  {{ newsItem.description.slice(0, 80) }}
                </p>
              </div>
            </router-link>
          </div>
        </section>
      </article>
    </div>
  </section>
    </div>
  
  <Footer />
</template>
<script setup lang="ts">
import { ref } from "vue";
import Footer from "@/components/Footer.vue";

const news = ref([
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
]);
</script>
<style>
/* * {
  outline: 1px solid;
} */

.single-post-image {
  width: 38em;
  height: auto;
}
</style>
