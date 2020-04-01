<template>
    <section>
      <mdb-row class="mt-5">
          <mdb-col md="4" class="mb-4" v-for="newsItem in news" :key="newsItem.id">
            <mdb-card class="mb-2">
              <news-component :news="newsItem"/>
            </mdb-card>
          </mdb-col>
      </mdb-row>
    </section>
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
    this.$store.dispatch('getNews')
  },
  computed: {
    news () {
      return this.$store.state.news.data
    }
  }
}
</script>
