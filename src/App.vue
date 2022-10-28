<template>
  <div class="wrapper">
    <section class="section">
      <nav-bar/>
      <div class="container">
        <h1 class="title">Проанализируй уровень <span style="color: #95CCD9">зарплат в IT</span></h1>
        <h3 class="subtitle">Мы собрали данные об уровене зарплат ведущих специальностей в области
          <br>Data Science c 2020-2022</h3>
        <img alt="" class="arrow_icon" src="@/assets/arrow.svg">
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Проанализируй уровень <span style="color: #95CCD9">зарплат в IT</span></h1>
        <h3 class="subtitle">Мы собрали данные об уровене зарплат ведущих специальностей в области
          <br>Data Science c 2020-2022</h3>
        <img alt="" class="arrow_icon" src="@/assets/arrow.svg">
      </div>
    </section>
  </div>
</template>

<script setup>

import NavBar from "@/components/NavBar";
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Montserrat', sans-serif
  color: #808080

.section
  height: 100vh
  scroll-snap-align: start
  display: flex
  position: relative
  align-items: center
  flex-direction: column
  flex: 1 0 100%

.wrapper
  height: 100vh
  scroll-snap-type: y mandatory
  overflow-y: auto

.title
  font-weight: 900
  font-size: 72px
  width: 80%
  line-height: 1.2
  margin-top: 120px
.subtitle
  width: 70%
  margin: 80px 0
  font-weight: 400
  font-size: 34px

.container
  display: flex
  align-items: center
  flex-direction: column
  max-width: 1140px
  margin: 0 auto
  text-align: center
</style>