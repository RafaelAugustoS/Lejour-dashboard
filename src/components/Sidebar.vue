<template>
  <sidebar class="sidebar">
    <div class="sidebar__user">
      <span class="sidebar__user__name">Olá usuário! :)</span>
      <img
        class="sidebar__user__avatar"
        src="../assets/user.png"
        alt="Foto do usuário"
      />
    </div>
    <nav class="sidebar__nav">
      <ul class="sidebar__nav__list">
        <li class="sidebar__nav__list__item active">Ínicio</li>
        <li class="sidebar__nav__list__item">Agendamentos</li>
        <li class="sidebar__nav__list__item">Busca de fornecedores</li>
        <li class="sidebar__nav__list__item">Estimativa do casamento</li>
        <li class="sidebar__nav__list__item">Fornecedores salvos</li>
        <li class="sidebar__nav__list__item">Inspirações</li>
      </ul>
    </nav>
  </sidebar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  background: linear-gradient(269.41deg, #db5d79 0.41%, #e2645a 99.41%);
  font-family: Lato, serif;
  width: 280px;
  margin-top: 55px;
  position: fixed;
  height: calc(100% - 55px);

  &__user {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 24px 0;
    border-bottom: 1px solid #e0e0e0;

    &__name {
      color: white;
    }

    &__avatar {
      width: 56px;
      height: 56px;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1),
        0px 4px 17px rgba(0, 0, 0, 0.09);
      border-radius: 100%;
    }
  }

  &__nav {
    width: 100%;

    &__list {
      list-style: none;
      color: rgb(238, 236, 236);

      &__item {
        padding: 8px 0;
        cursor: pointer;
      }

      .active {
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>
