<template>

  <div style="height: 500px; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="latLng(hospital.location.coordinates)" v-for="hospital in hospitals" v-bind:key="hospital.id">
        <l-icon
          :icon-anchor="[16, 37]"
          class-name="someExtraClass"
        >
          <img src="https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png">
        </l-icon>
        <l-popup>
          <div @click="innerClick">
            {{ hospital.name }}
            <p>
              {{ hospital.notes }}
              <!-- {{ hospital.phone }} -->
            </p>
          </div>
        </l-popup>
      </l-marker>

    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIcon } from 'vue2-leaflet'

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon
  },
  data () {
    return {
      zoom: 7,
      center: latLng(28.3949, 84.1240),
      //   url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      attribution:
        'contributors <a href="https://nepalcorona.info/">nepalcoronaInfo</a> | &copy Anmup Online',
      withPopup: latLng(28.41322, 84.219482),
      currentZoom: 11.5,
      currentCenter: latLng(28.3949, 84.1240),
      showParagraph: true,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
      // hospitals: this.$store.state.hospitals.data
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    showLongText () {
      this.showParagraph = !this.showParagraph
    },
    innerClick () {
      alert('Click!')
    },
    latLng (val) {
      return latLng(val)
    }
  },
  mounted () {
    console.log(this.$store.dispatch('getHospitals'))
  },
  computed: {
    hospitals () {
      return this.$store.state.hospitals.data
    }
  }
}
</script>
