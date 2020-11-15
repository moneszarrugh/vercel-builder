export const state = () => ({
  lang: 'ar-ly',
  language: 'ar',
  direction: 'rtl',
  isrtl: true,
  textalign: 'right',
  opalign: 'left',
  currency: 'lyd',
  main: [],
  itemresult: {},
  variables: {
    opentime: '9:00',
    closetime: '6:00',
    mainimg_small: 'https://cloud.zarrugh.ly/upload/medium/',
    mainimg_big: 'https://cloud.zarrugh.ly/Dropbox/Images/',
    sideimg_small: 'https://cloud.zarrugh.ly/upload/newfiles/files/',
    sideimg_big: 'https://cloud.zarrugh.ly/upload/newfiles/files/',
  },
  url: 'www.zarrugh.com',
})

export const mutations = {
  setLanguage(state, lang) {
    //console.log("setting lang", lang);
    state.lang = lang

    if (lang == 'ar-ly') {
      state.direction = 'rtl'
      state.isrtl = true
      state.textalign = 'right'
      state.opalign = 'left'
      state.language = 'ar'
    } else {
      state.direction = 'ltr'
      state.isrtl = false
      state.textalign = 'left'
      state.opalign = 'right'
      state.language = 'en'
    }

    //   //this.$session.set("lang", lang);
  },

  setMain(state, data) {
    state.main = data
  },
  setItem(state, data) {
    state.itemresult = data
  },
}

export const actions = {
  // async getMain({ commit }) {
  //   const main = await this.$axios.$get('/main')
  //   commit('setMain', main)
  // },
}
