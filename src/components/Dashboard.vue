<template>
  <main class="dashboard">
    <h1 class="dashboard__title">Dashboard Lejour</h1>

    <div class="af">
      <div class="dashboard__card">
        <div class="dashboard__card__info">
          <h2>Usuarios</h2>

          <div class="dashboard__card__info--filter">
            <span>Filtrar por:</span>

            <button>Semana</button>
            <button>Mês</button>
            <button>Ano</button>
          </div>
        </div>
        <div class="dashboard__card__chart">
          <Users />
        </div>
      </div>

      <div class="dashboard__card">
        <div class="dashboard__card__info">
          <h2>Invoices</h2>
          <p>Gerados X Efetivados</p>

          <div class="dashboard__card__info--filter">
            <span>Filtrar por:</span>

            <button>Semana</button>
            <button>Mês</button>
            <button>Ano</button>
          </div>
        </div>
        <div class="dashboard__card__chart">
          <Invoices />
        </div>
      </div>

      <div class="dashboard__card">
        <div class="dashboard__card__info">
          <h2>Casamentos</h2>

          <div class="dashboard__card__info--filter">
            <span>Filtrar por:</span>

            <button>Semana</button>
            <button>Mês</button>
            <button>Ano</button>
          </div>
        </div>
        <div class="dashboard__card__chart">
          <Casamentos />
        </div>
      </div>

      <div class="dashboard__card">
        <div class="dashboard__card__info">
          <h2>Agendamento</h2>

          <div class="dashboard__card__info--filter">
            <span>Filtrar por:</span>

            <button>Semana</button>
            <button>Mês</button>
            <button>Ano</button>
          </div>
        </div>
        <div class="dashboard__card__chart">
          <Agendamento />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Users from "@/components/Users";
import Invoices from "@/components/Invoices";
import Casamentos from "@/components/Casamentos";
import Agendamento from "@/components/Agendamento";
export default {
  components: { Users, Invoices, Casamentos, Agendamento },
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 32px 60px;

  &__title {
    color: #e2645a;
    font-size: 42px;
  }
  &__card {
    width: 100%;
    display: flex;
    &__info {
      h2 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 0;
      }
      p {
        color: #9b9a9a;
        font-size: 18px;
        margin-top: 0;
      }
    }
    &__chart {
      padding: 20px;
      background: #ffffff;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1),
        0px 4px 17px rgba(0, 0, 0, 0.09);
      border-radius: 19px;
    }
  }
}
</style>
