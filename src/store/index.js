import Vue from "vue";
import Vuex from "vuex";
import Http from "@/utils/request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    invoices: [],
    casamentos: [],
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setInvoices(state, data) {
      state.invoices = data;
    },
    setCasamentos(state, data) {
      state.casamentos = data;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const { data } = await Http.get("user");

        commit("setUsers", data);
      } catch (e) {
        throw e;
      }
    },
    async getInvoices({ commit }) {
      try {
        const { data } = await Http.get("invoice");

        commit("setInvoices", data);
      } catch (e) {
        throw e;
      }
    },
    async getCasamentos({ commit }) {
      try {
        const { data } = await Http.get("wedding");

        commit("setCasamentos", data);
      } catch (e) {
        throw e;
      }
    },
  },
  getters: {
    users: (state) => state.users,
    invoices: (state) => state.invoices,
    casamentos: (state) => state.casamentos,
  },
});
