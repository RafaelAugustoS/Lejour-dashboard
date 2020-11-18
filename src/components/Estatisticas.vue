<template>
	<div class="estatisticas">
		<v-card
			width="32%"
			max-height="110"
			style="box-shadow: 0px 3px 40px rgba(219, 93, 121, 0.1); border-radius: 25px;"
		>
			<div class="estatisticas__card">
				<img
					src="@/assets/wedding-couple.svg"
					style="position: absolute; margin-top: -25px; width: 160px;"
				/>
				<div class="estatisticas__card__info" style="margin-left: 180px;">
					<span>Total de casamentos realizados</span>
					<h3>{{ wedding }}</h3>
				</div>
			</div>
		</v-card>

		<v-card
			width="32%"
			max-height="110"
			style="box-shadow: 0px 3px 40px rgba(104, 191, 183, 0.2); border-radius: 25px;"
		>
			<div class="estatisticas__card">
				<img
					src="@/assets/users.svg"
					style="position: absolute; margin-top: -25px; width: 160px;"
				/>
				<div class="estatisticas__card__info" style="margin-left: 180px;">
					<span>Total de usuários cadastrados</span>
					<h3 style="color: #68BFB7">{{ users }}</h3>
				</div>
			</div>
		</v-card>

		<v-card
			width="32%"
			max-height="110"
			style="box-shadow: 0px 3px 40px rgba(132, 184, 226, 0.2); border-radius: 25px;"
		>
			<div class="estatisticas__card">
				<img
					src="@/assets/invoice.svg"
					style="position: absolute; margin-top: -15px; width: 180px; left: 0;"
				/>
				<div class="estatisticas__card__info" style="margin-left: 180px;">
					<span>Total de vendas realizadas</span>
					<h3 style="color: #84B8E2">{{ invoices }}</h3>
				</div>
			</div>
		</v-card>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			casamentos: 'casamentos',
			allUsers: 'users',
			allInvoices: 'invoices',
		}),
		wedding() {
			return this.casamentos.length
		},
		users() {
			return this.allUsers.length
		},
		invoices() {
			return this.allInvoices.length
		},
	},
}
</script>
<style scoped lang="scss">
.estatisticas {
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
	&__card {
		padding-top: 20px;
		padding-bottom: 20px;
		padding-left: 30px;
		padding-right: 30px;
		display: flex;
		align-items: center;
		position: relative;
		/* justify-content: space-between; */

		img {
			width: 120px;
			margin-right: 50px;
		}
		&__info {
			span {
				color: #9b9a9a;
				font-size: 16px;
			}
			h3 {
				color: #db5d79;
				font-size: 32px;
			}
		}
	}
}
</style>
