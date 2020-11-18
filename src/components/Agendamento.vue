<script>
import { Line } from "vue-chartjs";
export default {
  data: () => ({
    chart: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
      datasets: [
        {
          label: "Praia",
          backgroundColor: "transparent",
          borderColor: "#84B8E2",
          data: [5, 2, 10, 12, 7],
        },
        {
          label: "Campo",
          backgroundColor: "transparent",
          borderColor: "#E2645A",
          data: [1, 0, 6, 10, 3],
        },
        {
          label: "Cidade",
          backgroundColor: "transparent",
          borderColor: "#68BFB7",
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
