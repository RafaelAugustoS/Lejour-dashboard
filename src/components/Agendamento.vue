<script>
import { Line } from "vue-chartjs";
export default {
  data: () => ({
    chart: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
      datasets: [
        {
          label: "Praia",
          borderColor: "#84B8E2",
          fill: false,
          data: [5, 2, 10, 12, 7],
        },
        {
          label: "Campo",
          borderColor: "#E2645A",
          fill: false,
          data: [1, 0, 6, 10, 3],
        },
        {
          label: "Cidade",
          borderColor: "#68BFB7",
          fill: false,
          data: [2, 8, 20, 12, 8],
        },
      ],
    },
    config: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  extends: Line,
  mounted() {
    this.renderChart(this.chart, this.config);
  },
};
</script>
