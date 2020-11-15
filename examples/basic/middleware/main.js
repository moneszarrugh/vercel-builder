export default function ({ app, store }) {
  //Get all of the main categories before the first load only
  if (store.state.main === undefined || store.state.main.length == 0) {
    return app.$axios.$get('/main').then((response) => {
      store.commit('setMain', response)
    })
  }
}
