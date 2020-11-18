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
			lineTension: 1,
		},
	}),
	props: {
		state: String,
	},
	extends: Line,
	mounted() {
		this.month()
	},
	computed: {
		...mapGetters({ users: 'users' }),
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
		getData() {
			const arr = []
			const current = this.labels.map(item => {
				arr.push(item.value)
			})

			return arr
		},
	},
	watch: {
		data() {
			this.callChart()
		},
		state() {
			if (this.state === 'ano') {
				this.configInitial()
			} else if (this.state === 'mes') {
				this.month()
			}
		},
	},
	methods: {
		callChart() {
			this.renderChart(
				{
					labels: this.getLabels,
					datasets: [
						{
							label: 'Cadastrados',
							backgroundColor: 'rgba(134, 208, 203, 0.3)',
							borderColor: '#68BFB7',
							data: this.getData,
							lineTension: 0,
						},
					],
				},
				this.config
			)
		},
		configInitial() {
			const arr = []

			this.users.map(({ CREATED_AT }) => {
				arr.push(getYear(parseISO(CREATED_AT)))
			})

			const N = []
			const set = [...new Set(arr)]

			set.map(item => N.push({ key: item, value: 0 }))
			this.labels = N

			const newArr = []
			this.users.map(({ CREATED_AT }) => {
				this.labels.map(item => {
					if (item.key === getYear(parseISO(CREATED_AT))) {
						item.value += 1
					}
				})
			})

			this.callChart()
		},
		month() {
			const arr = []

			this.users.map(({ CREATED_AT }) => {
				if (getYear(parseISO(CREATED_AT)) === this.year) {
					arr.push(getMonth(parseISO(CREATED_AT)))
				}
			})

			const N = []
			const set = [...new Set(arr)]

			set.map(item => N.push({ key: item, value: 0 }))
			this.labels = N

			const newArr = []
			this.users.map(({ CREATED_AT }) => {
				this.labels.map(item => {
					if (getYear(parseISO(CREATED_AT)) === this.year) {
						if (item.key === getMonth(parseISO(CREATED_AT))) {
							item.value += 1
						}
					}
				})
			})

			this.callChart()
		},
	},
}
</script>
