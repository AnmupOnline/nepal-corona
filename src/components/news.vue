<template>
    <!-- Card Regular -->
  <div class="card card-cascade">

    <!-- Card image -->
    <div class="view view-cascade overlay">
      <img class="card-img-top" :src="news.image_url" alt="Card image cap">
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <!-- Card content -->
    <div class="card-body card-body-cascade text-center">

      <!-- Title -->
      <h4 class="card-title"><strong>{{ news.title }}</strong></h4>
      <!-- Subtitle -->
      <h6 class="font-weight-bold indigo-text py-2">{{ news.source }}</h6>
      <!-- Text -->
      <p class="card-text">{{ news.summary }}
      </p>

    </div>

    <!-- Card footer -->
    <div class="card-footer text-muted text-center">
      {{ formatDistance(news.created_at) }}
    </div>

  </div>
  <!-- Card Regular -->
</template>

<script>
import { formatDistance } from 'date-fns'
export default {
  props: ['news'],
  methods: {
    formatDistance (val) {
      return formatDistance(new Date(val), new Date())
    }
  }
}
</script>
