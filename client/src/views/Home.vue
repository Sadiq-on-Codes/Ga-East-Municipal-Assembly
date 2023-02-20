<template>
  <div class="dark:bg-gray-900">
    <Carousel />
    <News />
    <Staff />
    <Events />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
import News from "@/components/News.vue";
import Staff from "@/components/Staff.vue";
import Events from "@/components/Events.vue";
</script>

<style>
.carousel {
  height: 58rem;
}

.carousel-description {
  margin: 0 auto;
}

.news-section {
  width: 75%;
  margin: 0 auto;
}

.description {
  line-height: 150%;
}

.news-image {
  width: 35em;
  height: 20em;
}

.event-image-large {
  width: auto;
  height: 20em;
}

.event-image-small {
  width: 12em;
  height: 7em;
}

.news-heading {
  margin-bottom: 2em;
}

.staff-section {
  margin: 0 auto;
}

.bg-mce,
.bg-mcd,
.bg-engineer {
  height: 30rem;
  margin: 0 auto;
}

.news {
  text-align: right;
}

.news:nth-child(odd) {
  flex-direction: row-reverse;
  text-align: left;
}

.overlay {
  display: block;
}

@media (max-width: 600px) {
  .news:nth-child(odd),
  .news:nth-child(even) {
    flex-direction: column;
    gap: 2em;
  }

  .news-heading {
    margin-top: 60px;
    margin-bottom: 2em;
  }

  .staff {
    width: 100%;
  }

  .staff-mobile {
    margin-top: 4rem;
  }

  .news-description {
    text-align: left;
  }

  .staff {
    width: 90%;
  }

  .staff-pic {
    padding: 0;
  }

  .carousel-description,
  .overlay {
    display: none;
  }

  .carousel {
    max-height: 36em;
    margin-bottom: 0;
  }

  .default-carousel {
    height: 23em;
  }

  .event-title {
    font-size: small;
    font-weight: 500;
  }
}

@media (max-width: 1200px) {
  .news:nth-child(odd),
  .news:nth-child(even) {
    flex-direction: column;
    gap: 2em;
  }

  .news-image,
  .news-description,
  .news-section {
    width: 100%;
  }

  .bg-mce,
  .bg-mcd,
  .bg-engineer {
    height: 25rem;
  }
}

@media (max-width: 1200px) {
  .carousel {
    height: 60rem;
  }
}
</style>
