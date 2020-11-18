import Vue from 'vue'
import Vuex from 'vuex'
import Http from '@/utils/request'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: [],
		invoices: [],
		casamentos: [],
		agendamentos: [],
	},
	mutations: {
		setUsers(state, data) {
			state.users = data
		},
		setInvoices(state, data) {
			state.invoices = data
		},
		setCasamentos(state, data) {
			state.casamentos = data
		},
		setAgendamentos(state, data) {
			state.agendamentos = data
		},
	},
	actions: {
		async getUsers({ commit }) {
			try {
				const { data } = await Http.get('user')
				console.log(data)

				commit('setUsers', data)
			} catch (e) {
				console.log(e)
				throw e
			}
		},
		async getInvoices({ commit }) {
			try {
				const { data } = await Http.get('invoice')

				commit('setInvoices', data)
			} catch (e) {
				throw e
			}
		},
		async getCasamentos({ commit }) {
			try {
				const { data } = await Http.get('wedding')

				commit('setCasamentos', data)
			} catch (e) {
				throw e
			}
		},
		async getAgendamentos({ commit }) {
			try {
				// const { data } = await Http.get("wedding");
				const { data } = await axios.get(
					'https://5fb51e66e473ab0016a1777c.mockapi.io/agendamentos'
				)

				commit('setAgendamentos', data)
			} catch (e) {
				throw e
			}
		},
	},
	getters: {
		users: state => state.users,
		invoices: state => state.invoices,
		casamentos: state => state.casamentos,
		agendamentos: state => state.agendamentos,
	},
})
