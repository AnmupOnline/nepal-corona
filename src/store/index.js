import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
  state: {
    hospitals: [],
    news: [],
    allnepali: [],
    nepal: []
  },
  mutations: {
    updateHospitals (state, payload) {
      state.hospitals = payload
    },
    updateNews (state, payload) {
      state.news = payload
    },
    updateAllnepali (state, payload) {
      state.allnepali = payload
    },
    updateNepal (state, payload) {
      state.nepal = payload
    }
  },
  actions: {
    async getHospitals (context) {
      const hospitalsData = await fetch('https://nepalcorona.info/api/v1/hospitals')
      const responseJson = await hospitalsData.json()
      context.commit('updateHospitals', responseJson)
      return responseJson
    },
    async getNews (context) {
      const hospitalsData = await fetch('https://nepalcorona.info/api/v1/news')
      const responseJson = await hospitalsData.json()
      context.commit('updateNews', responseJson)
      return responseJson
    },
    async getAllnepali (context) {
      const hospitalsData = await fetch('https://nepalcorona.info/api/v1/data/allnepali')
      const responseJson = await hospitalsData.json()
      context.commit('updateAllnepali', responseJson)
      return responseJson
    },
    async getNepal (context) {
      const hospitalsData = await fetch('https://nepalcorona.info/api/v1/data/nepal')
      const responseJson = await hospitalsData.json()
      context.commit('updateNepal', responseJson)
      return responseJson
    }
  }
})
