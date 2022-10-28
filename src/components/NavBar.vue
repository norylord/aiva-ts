<template>
  <nav class="navbar">
    <img src="@/assets/logo.svg" alt="logo" class="navbar__logo">
    <div class="items__section">
      <div class="nav__item">Главная</div>
      <div class="nav__item">Аналитика</div>
      <div class="nav__item">Команда</div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: space-around
  padding: 10px 0
  width: 100%
  align-content: flex-start
  align-self: flex-start
  top: 0
.items__section
  display: flex
  flex: 0 0 30%
  .nav__item
    display: flex
    border-top: 5px solid lightgray
    align-items: center
    padding: 10px 20px
    margin: 15px 20px 0
    flex-grow: 1
    justify-content: center
    font-size: 24px
    transition: all .3s ease-in-out

    &:hover
      transform: translateY(-10px)
      transition: all .3s ease-in-out
      border-top: 5px solid #94cad7
      cursor: pointer
</style>