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
    },
  }),
  extends: Line,
  computed: {
    ...mapGetters({ casamentos: "casamentos" }),
    getLabels() {
      const arr = [];
      const current = this.labels.map((item) => {
        arr.push(item.key);
      });

      return arr;
    },
    getClassico() {
      const arr = [];
      const current = this.labels.map((item) => {
        arr.push(item.classico);
      });

      return arr;
    },
    getRustico() {
      const arr = [];
      const current = this.labels.map((item) => {
        arr.push(item.rustico);
      });

      return arr;
    },
    getModerno() {
      const arr = [];
      const current = this.labels.map((item) => {
        arr.push(item.moderno);
      });

      return arr;
    },
  },
  async mounted() {
    await this.$store.dispatch("getCasamentos");

    this.configInitial();
  },
  methods: {
    callChart() {
      this.renderChart({
        labels: this.getLabels,
        datasets: [
          {
            label: "Classico",
            backgroundColor: "transparent",
            borderColor: "#84B8E2",
            data: this.getClassico,
          },
          {
            label: "Rustico",
            backgroundColor: "transparent",
            borderColor: "#E2645A",
            data: this.getRustico,
          },
          {
            label: "Moderno",
            backgroundColor: "transparent",
            borderColor: "#68BFB7",
            data: this.getModerno,
          },
        ],
      });
    },
    configInitial() {
      const arr = [];

      this.casamentos.map(({ WEDDING_DATE }) => {
        arr.push(getYear(parseISO(WEDDING_DATE)));
      });

      const N = [];
      const set = [...new Set(arr.sort())];

      set.map((item) =>
        N.push({ key: item, classico: 0, rustico: 0, moderno: 0 })
      );
      this.labels = N;

      const newArr = [];
      this.casamentos.map(({ WEDDING_DATE, STYLE }) => {
        this.labels.map((item) => {
          if (item.key === getYear(parseISO(WEDDING_DATE))) {
            item[STYLE] += 1;
          }
        });
      });

      console.log(this.labels);
      this.callChart();
    },
  },
};
</script>
