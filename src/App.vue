<template>
	<v-app>
		<Header />
		<Sidebar />
		<v-main>
			<Dashboard />
		</v-main>
	</v-app>
</template>

<script>
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
	name: 'App',

	components: {
		Dashboard,
		Header,
		Sidebar,
	},

	data: () => ({
		//
	}),
}
</script>

<style lang="scss">
.chart > div {
	width: 100%;
}
.v-text-field {
	margin-top: 0;
	padding-top: 0;
}
.chartjs-render-monitor {
	height: 310px !important;
	width: 100% !important;
}
</style>
