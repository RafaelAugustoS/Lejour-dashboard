<script>
import { Line } from "vue-chartjs";
import { mapGetters } from "vuex";
import { isMonday, parseISO, getYear } from "date-fns";
export default {
  data: () => ({
    labels: [],
    config: {
      responsive: true,
      maintainAspectRatio: false,
      lineTension: 1,
    },
  }),
  extends: Line,
  async mounted() {
    await this.$store.dispatch("getUsers");

    this.configInitial();
  },
  computed: {
    ...mapGetters({ users: "users" }),
    getLabels() {
      const arr = [];
      const current = this.labels.map((item) => {
        arr.push(item.key);
      });

      return arr;
    },
    getData() {
      const arr = [];
      const current = this.labels.map((item) => {
        arr.push(item.value);
      });

      return arr;
    },
  },
  watch: {
    data() {
      this.callChart();
    },
  },
  methods: {
    callChart(data) {
      this.renderChart(
        {
          labels: this.getLabels,
          datasets: [
            {
              label: "Gerados",
              backgroundColor: "rgba(134, 208, 203, 0.3)",
              borderColor: "#68BFB7",
              data: this.getData,
              lineTension: 0,
            },
          ],
        },
        this.config
      );
    },
    configInitial() {
      const arr = [];

      this.users.map(({ CREATED_AT }) => {
        arr.push(getYear(parseISO(CREATED_AT)));
      });

      const N = [];
      const set = [...new Set(arr)];

      set.map((item) => N.push({ key: item, value: 0 }));
      this.labels = N;

      const newArr = [];
      this.users.map(({ CREATED_AT }) => {
        this.labels.map((item) => {
          if (item.key === getYear(parseISO(CREATED_AT))) {
            item.value += 1;
          }
        });
      });

      this.callChart();
    },
  },
};
</script>
