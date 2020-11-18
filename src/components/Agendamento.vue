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
			lineTension: 1,
		},
	}),
	props: {
		state: String,
	},
	extends: Line,
	computed: {
		...mapGetters({ agendamentos: 'casamentos' }),
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

			console.log(arr, 't')
			return arr.sort()
		},
		getCount() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.count)
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
							label: 'Agendados',
							backgroundColor: 'rgba(132, 184,226, 0.3)',
							borderColor: '#84B8E2',
							data: this.getCount,
							lineTension: 0,
						},
					],
				},
				this.config
			)
		},
		configInitial() {
			const arr = []

			this.agendamentos.map(({ WEDDING_DATE }) => {
				arr.push(getYear(parseISO(WEDDING_DATE)))
			})

			const N = []
			const set = [...new Set(arr)]

			set.map(item => N.push({ key: item, count: 0 }))
			this.labels = N

			const newArr = []
			this.agendamentos.map(({ WEDDING_DATE }) => {
				this.labels.map(item => {
					if (item.key === getYear(parseISO(WEDDING_DATE))) {
						item.count += 1
					}
				})
			})

			this.callChart()
		},
		month() {
			const arr = []
			const arr2 = []

			this.agendamentos.map(({ WEDDING_DATE }) => {
				if (getYear(parseISO(WEDDING_DATE)) === this.year) {
					arr.push(getMonth(parseISO(WEDDING_DATE)))
				}
			})

			const N = []
			const set = [...new Set(arr)]

			set.sort((a, b) => a - b).map(item => N.push({ key: item, count: 0 }))
			this.labels = N

			const newArr = []
			this.agendamentos.map(({ WEDDING_DATE }) => {
				this.labels.map(item => {
					if (getYear(parseISO(WEDDING_DATE)) === this.year) {
						if (item.key === getMonth(parseISO(WEDDING_DATE))) {
							item.count += 1
						}
					}
				})
			})

			this.callChart()
		},
	},
}
</script>
