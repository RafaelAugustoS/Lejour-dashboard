<script>
import { Line } from 'vue-chartjs'
import { mapGetters } from 'vuex'
import { isMonday, parseISO, getYear, getMonth, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default {
	data: () => ({
		year: getYear(new Date()),
		labels: [],
		config: {
			responsive: true,
			maintainAspectRatio: false,
		},
	}),
	props: {
		state: String,
	},
	extends: Line,
	computed: {
		...mapGetters({ invoices: 'invoices' }),
		getLabels() {
			const arr = []
			const current = this.labels.map(item => {
				if (this.state === 'ano') {
					arr.push(item.key)
				} else {
					arr.push(
						format(new Date(this.year, item.key, '01'), 'MMM', { locale: ptBR })
					)
				}
			})

			return arr
		},
		getGerados() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.gerado)
			})

			return arr
		},
		getEfetivados() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.efetivado)
			})

			return arr
		},
	},
	watch: {
		state() {
			if (this.state === 'ano') {
				this.configInitial()
			} else if (this.state === 'mes') {
				this.month()
			}
		},
	},
	mounted() {
		this.month()
	},
	methods: {
		callChart() {
			this.renderChart(
				{
					labels: this.getLabels,
					datasets: [
						{
							label: 'Gerados',
							borderColor: '#84B8E2',
							fill: false,
							data: this.getGerados,
						},
						{
							label: 'Efetivados',
							borderColor: '#E2645A',
							fill: false,
							data: this.getEfetivados,
						},
					],
				},
				this.config
			)
		},
		configInitial() {
			const arr = []

			this.invoices.map(({ CREATED_AT }) => {
				arr.push(getYear(parseISO(CREATED_AT)))
			})

			const N = []
			const set = [...new Set(arr)]

			set.map(item => N.push({ key: item, gerado: 0, efetivado: 0 }))
			this.labels = N

			const newArr = []
			this.invoices.map(({ CREATED_AT, ACCEPTED }) => {
				this.labels.map(item => {
					if (item.key === getYear(parseISO(CREATED_AT))) {
						if (ACCEPTED === 'TRUE') {
							item.efetivado += 1
						} else {
							item.gerado += 1
						}
					}
				})
			})

			this.callChart()
		},
		month() {
			const arr = []

			this.invoices.map(({ CREATED_AT }) => {
				if (getYear(parseISO(CREATED_AT)) === this.year) {
					arr.push(getMonth(parseISO(CREATED_AT)))
				}
			})

			const N = []
			const set = [...new Set(arr)]

			set.map(item => N.push({ key: item, gerado: 0, efetivado: 0 }))
			this.labels = N

			const newArr = []
			this.invoices.map(({ CREATED_AT, ACCEPTED }) => {
				this.labels.map(item => {
					if (getYear(parseISO(CREATED_AT)) === this.year) {
						if (item.key === getMonth(parseISO(CREATED_AT))) {
							if (ACCEPTED === 'TRUE') {
								item.efetivado += 1
							} else {
								item.gerado += 1
							}
						}
					}
				})
			})

			this.callChart()
		},
	},
}
</script>
