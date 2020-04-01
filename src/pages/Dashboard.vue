<template>
  <section id="dashboard">
    <section>
      <mdb-row>
        <mdb-col lg="8" class="mb-12">
          <mdb-card>
            <mdb-card-header>Hospitals</mdb-card-header>
            <mdb-card-body>
                <leaflet> </leaflet>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col md="4" class="mb-4">
            <mdb-card class="mb-4">
                <mdb-card-header class="text-center"> Out of {{ getNepal.tested_total }} tested patients </mdb-card-header>
                <mdb-card-body>
                    <div style="display: block">
                      <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :height="200"/>
                    </div>
                </mdb-card-body>
            </mdb-card>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Source</h5>
                <p class="card-text">
                  Our api source is <a href="https://nepalcorona.info/">NepalCorona.info</a> Open Data API by AskBhunte.
                </p>
                <a class="card-link" :href="getNepal.source">{{ getNepal.latest_sit_report.no }}</a>
                <a class="card-link" :href="getNepal.latest_sit_report.url">{{ getNepal.latest_sit_report.date }}</a>
              </div>
            </div>

        </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbPieChart } from 'mdbvue'
import leaflet from '@/components/leaflet-map'
export default {
  name: 'Dashboard',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbPieChart,
    leaflet
  },
  data () {
    return {
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.$store.dispatch('getNepal')
  },
  computed: {
    getNepal () {
      return this.$store.state.nepal
    },
    pieChartData () {
      const data = this.getNepal
      return {
        labels: [`Positive ${data.tested_positive}`, `Negative ${data.tested_negative}`, `Isolation ${data.in_isolation}`, `Death ${data.deaths}`],
        datasets: [
          {
            data: [ data.tested_positive, data.tested_negative, data.in_isolation, data.deaths ],
            backgroundColor: ['#F7464A', '#46BFBD', 'grey', '#F7464A'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#eee', '#ff0000']
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
