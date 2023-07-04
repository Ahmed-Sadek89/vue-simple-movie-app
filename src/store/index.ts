import { api_link } from '@/assets/env'
import { createStore } from 'vuex'

export default createStore({
  state: {
      resultByTitle: {
        Error: '',
        Search: []
      },
      resultByID: null
  },
  mutations: {
    setResultByTitle(state, payload) {
      state.resultByTitle.Error = payload.Error
      state.resultByTitle.Search = payload.Search 
    },
    setResultByID( state, payload ) {
      state.resultByID = payload
    }
  },
  actions: {
    async fetchResultByTitle( { commit }, payload ) {
      const res = await fetch(`${api_link}&s=${payload}`);
      const data = await res.json()
      const Error = data.Error;
      const Search = data.Search;
      commit('setResultByTitle', { Search, Error })
    },
    async fetchResultByID ( { commit } , payload ) {
      const res = await fetch(`${api_link}&plot=full&i=${payload}`)
      const data = await res.json()
      commit('setResultByID', data)
    }
  }
})