import { api_link } from '@/assets/env'
import { createStore } from 'vuex'
import { payloadTypeInSearchById, payloadTypeInSearchByTitle, searchByIDType, searchByTitleType } from "@/types/types"
import Action from './Actions/Action'

export default createStore({
  state: {
    resultByTitle: {
      loading: false,
      error: false,
      result: [] as searchByTitleType[]
    },
    resultByID: {
      loading: false,
      error: false,
      result: {} as searchByIDType
    }
  },
  mutations: {
    setResultByTitle( state, payload: payloadTypeInSearchByTitle ) {
      state.resultByTitle = payload
    },
    setResultByID( state, payload: payloadTypeInSearchById ) {
      state.resultByID = payload;
    }
  },
  actions: {
    fetchResultByTitle( { commit }, payload: string ) {

      const fetchByTitle = new Action();
      fetchByTitle.setParams(
        'setResultByTitle',
        `${api_link}&s=${payload}`,
        'array'
      );
      fetchByTitle.fetching(commit)

    },

    fetchResultByID ( { commit } , payload: string ) {

      const fetchByID = new Action();
      fetchByID.setParams(
        'setResultByID',
        `${api_link}&plot=full&i=${payload}`,
        'object'
      )
      fetchByID.fetching(commit);

    }
  }
})