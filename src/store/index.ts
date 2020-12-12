import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        id: 1,
        name: 'unity',
      },
      {
        id: 2,
        name: 'unityTest',
      },
      {
        id: 3,
        name: 'por',
      },
      {
        id: 4,
        name: 'porData',
      },
    ],
    list: '',
  },
  mutations: {
    test(state: any, value: string) {
      state.list = value;
    }
  },
  actions: {
  },
  modules: {
  },
});
