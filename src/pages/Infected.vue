<template>
  <div>
    <h2 class="h3 text-center">Nepalese Infected Around World</h2>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Source</th>
        <th scope="col">Death</th>
        <th scope="col">New Case</th>
        <th scope="col">Country</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="newsItem in news" :key="newsItem.id">
            <th scope="row">{{ newsItem.date }}</th>
            <td><a :href="news.source_url">{{ newsItem.source }}</a></td>
            <td>{{ newsItem.deaths }}</td>
            <td>{{ newsItem.totalCases }}</td>
            <td>{{ newsItem.country }}</td>
        </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbCard } from 'mdbvue'
export default {
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    newsComponent: () => import('@/components/news')
  },
  mounted () {
    this.$store.dispatch('getAllnepali')
  },
  computed: {
    news () {
      return this.$store.state.allnepali.data
    }
  }
}
</script>
