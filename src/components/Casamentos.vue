<script>
import { Line } from 'vue-chartjs'
import { mapGetters } from 'vuex'
import { isMonday, parseISO, getYear, getMonth, format } from 'date-fns'

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
		type: String,
	},
	extends: Line,
	computed: {
		...mapGetters({ casamentos: 'casamentos' }),
		getLabels() {
			const arr = []
			const current = this.labels.map(item => {
				if (this.state === 'ano') {
					arr.push(item.key)
				} else {
					arr.push(format(new Date(this.year, item.key, '01'), 'MMM'))
				}
			})

			return arr
		},
		getClassico() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.classico)
			})

			return arr
		},
		getRustico() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.rustico)
			})

			return arr
		},
		getModerno() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.moderno)
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
							label: 'Classico',
							borderColor: '#84B8E2',
							fill: false,
							data: this.getClassico,
						},
						{
							label: 'Rustico',
							borderColor: '#E2645A',
							fill: false,
							data: this.getRustico,
						},
						{
							label: 'Moderno',
							borderColor: '#68BFB7',
							fill: false,
							data: this.getModerno,
						},
					],
				},
				this.config
			)
		},
		configInitial() {
			const arr = []

			this.casamentos.map(({ WEDDING_DATE }) => {
				arr.push(getYear(parseISO(WEDDING_DATE)))
			})

			const N = []
			const set = [...new Set(arr.sort())]

			set.map(item =>
				N.push({ key: item, classico: 0, rustico: 0, moderno: 0 })
			)
			this.labels = N

			const newArr = []
			this.casamentos.map(({ WEDDING_DATE, STYLE }) => {
				this.labels.map(item => {
					if (item.key === getYear(parseISO(WEDDING_DATE))) {
						item[STYLE] += 1
					}
				})
			})

			this.callChart()
		},
		month() {
			const arr = []

			this.casamentos.map(({ WEDDING_DATE }) => {
				if (getYear(parseISO(WEDDING_DATE)) === this.year) {
					arr.push(getMonth(parseISO(WEDDING_DATE)))
				}
			})

			const N = []
			const set = [...new Set(arr.sort())]

			set.map(item =>
				N.push({ key: item, classico: 0, rustico: 0, moderno: 0 })
			)
			this.labels = N

			const newArr = []
			this.casamentos.map(({ WEDDING_DATE, STYLE }) => {
				this.labels.map(item => {
					if (getYear(parseISO(WEDDING_DATE)) === this.year) {
						if (item.key === getMonth(parseISO(WEDDING_DATE))) {
							item[STYLE] += 1
						}
					}
				})
			})

			this.callChart()
		},
	},
}
</script>
