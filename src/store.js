import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    data: null,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    setData({ commit }, payload) {
      commit('setData', payload);
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
});

export default store;