<template>
	<main class="dashboard">
		<h1 class="dashboard__title">Dashboard Lejour</h1>

		<Estatisticas />
		<div class="list">
			<div
				class="dashboard__card"
				style="box-shadow: 0px 3px 45px rgba(104, 191, 183, 0.2);"
			>
				<div class="dashboard__card__chart">
					<div class="dashboard__card__info">
						<h2
							class="dashboard__card__info__title dashboard__card__info__title--user"
						>
							Usuarios cadastrados
						</h2>

						<div class="dashboard__card__info__filter">
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--user"
								:class="{
									'dashboard__card__info__filter__buttons--user--active':
										usuarios === 'semana',
								}"
							>
								Semana
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--user"
								:class="{
									'dashboard__card__info__filter__buttons--user--active':
										usuarios === 'mes',
								}"
								@click="usuarios = 'mes'"
							>
								Mês
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--user"
								:class="{
									'dashboard__card__info__filter__buttons--user--active':
										usuarios === 'ano',
								}"
								@click="usuarios = 'ano'"
							>
								Ano
							</button>
						</div>
					</div>

					<div class="chart">
						<Users v-if="countUsers" :state="usuarios" />
						<img src="@/assets/gif.gif" v-else />
					</div>
				</div>
			</div>

			<div
				class="dashboard__card"
				style="box-shadow: 0px 3px 45px rgba(226, 100, 90, 0.2);"
			>
				<div class="dashboard__card__chart">
					<div class="dashboard__card__info">
						<h2
							class="dashboard__card__info__title dashboard__card__info__title--invoices"
						>
							Invoices Gerados x Efetivados
						</h2>

						<div class="dashboard__card__info__filter">
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--invoices"
								:class="{
									'dashboard__card__info__filter__buttons--invoices--active':
										invoices === 'semana',
								}"
							>
								Semana
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--invoices"
								:class="{
									'dashboard__card__info__filter__buttons--invoices--active':
										invoices === 'mes',
								}"
								@click="invoices = 'mes'"
							>
								Mês
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--invoices"
								:class="{
									'dashboard__card__info__filter__buttons--invoices--active':
										invoices === 'ano',
								}"
								@click="invoices = 'ano'"
							>
								Ano
							</button>
						</div>
					</div>
					<div class="chart">
						<Invoices v-if="countInvoices" :state="invoices" />
						<img src="@/assets/gif.gif" v-else />
					</div>
				</div>
			</div>

			<div
				class="dashboard__card"
				style="box-shadow: 0px 3px 45px rgba(132, 184, 226, 0.2);"
			>
				<div class="dashboard__card__chart">
					<div class="dashboard__card__info">
						<h2
							class="dashboard__card__info__title dashboard__card__info__title--casamentos"
						>
							Casamentos
						</h2>

						<div class="dashboard__card__info__filter">
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
								:class="{
									'dashboard__card__info__filter__buttons--casamentos--active':
										casamentos.type === 'estilo',
								}"
								@click="casamentos.type = 'estilo'"
							>
								Estilo
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
								:class="{
									'dashboard__card__info__filter__buttons--casamentos--active':
										casamentos.type === 'orcamento',
								}"
								@click="casamentos.type = 'orcamento'"
							>
								Orçamento
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
								:class="{
									'dashboard__card__info__filter__buttons--casamentos--active':
										casamentos.type === 'convidados',
								}"
								@click="casamentos.type = 'convidados'"
							>
								Convidados
							</button>

							<div
								style="width: 1px; height: 25px; background: #EBEBEB; margin-left: 20px; margin-right: 20px;"
							/>

							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
								:class="{
									'dashboard__card__info__filter__buttons--casamentos--active':
										casamentos.state === 'semana',
								}"
							>
								Semana
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
								:class="{
									'dashboard__card__info__filter__buttons--casamentos--active':
										casamentos.state === 'mes',
								}"
								@click="casamentos.state = 'mes'"
							>
								Mês
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
								:class="{
									'dashboard__card__info__filter__buttons--casamentos--active':
										casamentos.state === 'ano',
								}"
								@click="casamentos.state = 'ano'"
							>
								Ano
							</button>
						</div>
					</div>
					<div class="chart">
						<Casamentos
							v-if="countCasamentos"
							:state="casamentos.state"
							:type="casamentos.type"
						/>
						<img src="@/assets/gif.gif" v-else />
					</div>
				</div>
			</div>

			<div
				class="dashboard__card"
				style="box-shadow: 0px 3px 45px rgba(255, 184, 84, 0.2)"
			>
				<div class="dashboard__card__chart">
					<div class="dashboard__card__info">
						<h2
							class="dashboard__card__info__title dashboard__card__info__title--agendamentos"
						>
							Agendamentos
						</h2>

						<div class="dashboard__card__info__filter">
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--agendamentos"
								:class="{
									'dashboard__card__info__filter__buttons--agendamentos--active':
										agendamentos.state === 'semana',
								}"
							>
								Semana
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--agendamentos"
								:class="{
									'dashboard__card__info__filter__buttons--agendamentos--active':
										agendamentos.state === 'mes',
								}"
								@click="agendamentos.state = 'mes'"
							>
								Mês
							</button>
							<button
								class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--agendamentos"
								:class="{
									'dashboard__card__info__filter__buttons--agendamentos--active':
										agendamentos.state === 'ano',
								}"
								@click="agendamentos.state = 'ano'"
							>
								Ano
							</button>
						</div>
					</div>
					<div class="chart">
						<Agendamento
							v-if="countCasamentos"
							:state="agendamentos.state"
							:monthAgendamento="agendamentos.month"
						/>
						<img src="@/assets/gif.gif" v-else />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import Users from '@/components/Users'
import Invoices from '@/components/Invoices'
import Casamentos from '@/components/Casamentos'
import Agendamento from '@/components/Agendamento'
import Estatisticas from '@/components/Estatisticas'
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		usuarios: 'mes',
		invoices: 'mes',
		casamentos: {
			state: 'mes',
			type: 'estilo',
		},
		agendamentos: {
			state: 'mes',
			menu: false,
			month: new Date().toISOString().substr(0, 7),
		},
	}),
	components: { Users, Invoices, Casamentos, Agendamento, Estatisticas },
	computed: {
		...mapGetters({
			users: 'users',
			allInvoices: 'invoices',
			allCasamentos: 'casamentos',
		}),
		countUsers() {
			return this.users.length > 0
		},
		countInvoices() {
			return this.allInvoices.length > 0
		},
		countCasamentos() {
			return this.allCasamentos.length > 0
		},
	},
	async mounted() {
		await this.$store.dispatch('getUsers')
		await this.$store.dispatch('getInvoices')
		await this.$store.dispatch('getCasamentos')
		// await this.$store.dispatch('getAgendamentos')
	},
}
</script>

<style lang="scss" scoped>
.dashboard {
	padding: 32px 60px;
	margin-top: 55px;
	width: calc(100% - 280px);
	margin-left: 280px;

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	&__title {
		color: #e2645a;
		font-size: 42px;
	}
	&__card {
		width: 48%;
		height: 450px;
		display: flex;
		background: #ffffff;
		box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 4px 17px rgba(0, 0, 0, 0.09);
		border-radius: 19px;
		margin-top: 50px;
		&__info {
			padding: 15px 30px 20px 30px;
			margin-bottom: 20px;
			&__title {
				margin: 0;
				font-size: 28px;
				font-weight: bold;
				&--user {
					color: #68bfb7;
				}
				&--invoices {
					color: #e2645a;
				}
				&--casamentos {
					color: #84b8e2;
				}
				&--agendamentos {
					color: #ffb854;
				}
			}
			&__filter {
				margin-top: 10px;
				display: flex;
				align-items: center;

				&__buttons {
					border-radius: 34px;
					outline: none;
					cursor: pointer;
					border: 1px solid #ccc;
					height: 25px;
					padding-left: 10px;
					padding-right: 10px;
					margin-right: 5px;
					&--user {
						border: 1px solid #68bfb7;
						background: transparent;
						color: #68bfb7;
						&--active {
							border: 1px solid #68bfb7;
							background: #68bfb7;
							color: #fff;
						}
					}
					&--invoices {
						border: 1px solid #e2645a;
						background: transparent;
						color: #e2645a;
						&--active {
							border: 1px solid #e2645a;
							background: #e2645a;
							color: #fff;
						}
					}

					&--casamentos {
						border: 1px solid #84b8e2;
						background: transparent;
						color: #84b8e2;
						&--active {
							border: 1px solid #84b8e2;
							background: #84b8e2;
							color: #fff;
						}
					}

					&--agendamentos {
						border: 1px solid #ffb854;
						background: transparent;
						color: #ffb854;
						&--active {
							border: 1px solid #ffb854;
							background: #ffb854;
							color: #fff;
						}
					}
				}
			}
			p {
				color: #9b9a9a;
				font-size: 18px;
				margin-top: 0;
			}
			border-bottom: 1px solid #e0e0e0;
			width: 100%;
			padding-bottom: 10px;
		}
		&__chart {
			width: 100%;
		}
		.chart {
			padding: 0 40px 0 40px;
			display: flex;
			justify-content: center;
			width: 100%;
			img {
				width: 60%;
			}
		}

		.date {
			width: 170px;
		}
	}
}
</style>
