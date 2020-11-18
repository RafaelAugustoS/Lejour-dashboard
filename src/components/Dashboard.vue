<template>
  <main class="dashboard">
    <h1 class="dashboard__title">Dashboard Lejour</h1>

    <div class="list">
      <div class="dashboard__card">
        <div class="dashboard__card__chart">
          <div class="dashboard__card__info">
            <h2
              class="dashboard__card__info__title dashboard__card__info__title--user"
            >
              Usuarios cadastrados
            </h2>

            <div class="dashboard__card__info__filter">
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--user dashboard__card__info__filter__buttons--user--active"
              >
                Semana
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--user"
              >
                Mês
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--user"
              >
                Ano
              </button>
            </div>
          </div>
          <Users />
        </div>
      </div>

      <div class="dashboard__card">
        <div class="dashboard__card__chart">
          <div class="dashboard__card__info">
            <h2
              class="dashboard__card__info__title dashboard__card__info__title--invoices"
            >
              Invoices
            </h2>

            <div class="dashboard__card__info__filter">
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--invoices dashboard__card__info__filter__buttons--invoices--active"
              >
                Semana
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--invoices"
              >
                Mês
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--invoices"
              >
                Ano
              </button>
            </div>
          </div>
          <Invoices />
        </div>
      </div>

      <div class="dashboard__card">
        <div class="dashboard__card__chart">
          <div class="dashboard__card__info">
            <h2
              class="dashboard__card__info__title dashboard__card__info__title--casamentos"
            >
              Casamentos
            </h2>

            <div class="dashboard__card__info__filter">
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos dashboard__card__info__filter__buttons--casamentos--active"
              >
                Semana
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
              >
                Mês
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--casamentos"
              >
                Ano
              </button>
            </div>
          </div>
          <Casamentos />
        </div>
      </div>

      <div class="dashboard__card">
        <div class="dashboard__card__chart">
          <div class="dashboard__card__info">
            <h2
              class="dashboard__card__info__title dashboard__card__info__title--agendamentos"
            >
              Agendamento
            </h2>

            <div class="dashboard__card__info__filter">
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--agendamentos dashboard__card__info__filter__buttons--agendamentos--active"
              >
                Semana
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--agendamentos"
              >
                Mês
              </button>
              <button
                class="dashboard__card__info__filter__buttons dashboard__card__info__filter__buttons--agendamentos"
              >
                Ano
              </button>
            </div>
          </div>
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

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__title {
    color: #e2645a;
    font-size: 42px;
  }
  &__card {
    width: 48%;
    display: flex;
    background: #ffffff;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 4px 17px rgba(0, 0, 0, 0.09);
    border-radius: 19px;
    margin-top: 50px;
    &__info {
      padding: 15px 0 20px 30px;
      margin-bottom: 20px;
      &__title {
        margin: 0;
        font-size: 28px;
        font-weight: bold;
        &--user {
          color: #68bfb7;
        }
        &--invoices {
          color: #e2645a;
        }
        &--casamentos {
          color: #84b8e2;
        }
        &--agendamentos {
          color: #ffb854;
        }
      }
      &__filter {
        margin-top: 10px;
        &__buttons {
          border-radius: 34px;
          border: 1px solid #ccc;
          height: 25px;
          padding-left: 10px;
          padding-right: 10px;
          margin-right: 5px;
          &--user {
            border: 1px solid #68bfb7;
            background: transparent;
            color: #68bfb7;
            &--active {
              border: 1px solid #68bfb7;
              background: #68bfb7;
              color: #fff;
            }
          }
          &--invoices {
            border: 1px solid #e2645a;
            background: transparent;
            color: #e2645a;
            &--active {
              border: 1px solid #e2645a;
              background: #e2645a;
              color: #fff;
            }
          }

          &--casamentos {
            border: 1px solid #84b8e2;
            background: transparent;
            color: #84b8e2;
            &--active {
              border: 1px solid #84b8e2;
              background: #84b8e2;
              color: #fff;
            }
          }

          &--agendamentos {
            border: 1px solid #ffb854;
            background: transparent;
            color: #ffb854;
            &--active {
              border: 1px solid #ffb854;
              background: #ffb854;
              color: #fff;
            }
          }
        }
      }
      p {
        color: #9b9a9a;
        font-size: 18px;
        margin-top: 0;
      }
      border-bottom: 1px solid #e0e0e0;
      width: 100%;
      padding-bottom: 10px;
    }
    &__chart {
      width: 100%;
    }
  }
}
</style>
