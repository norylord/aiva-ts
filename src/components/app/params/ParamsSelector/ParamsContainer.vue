<template>
  <div class="paramsSection">
    <h1>Уровень зарплат</h1>
    <p>{{ selectedParams }}</p>
    <div v-for="param in paramsData.data" :key="param.title" class="param__container">
      <h2>{{ param.title }}</h2>

      <div class="paramItem__container">
        <ParamsItem
            v-for="(item, index) in param.data"
            :key="item"
            :active="selectedParams[param.type][index] === 1 || selectedParams[param.type] === 'Все'"
            :title="item"
            @click="setParam(param.type, index, param.data.length)"
        >
          {{ item }}
        </ParamsItem>
      </div>

    </div>
    <div class="btns__container">
      <the-button type="primary" @click="count += 1">Получить статистику</the-button>
      <the-button type="danger" @click="cleanParams()">Сбросить</the-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import params from "@/static/params";
import ParamsItem from "@/components/app/params/ParamsSelector/ParamsItem.vue";
import TheButton from "@/components/helpers/button/TheButton.vue";
import {onBeforeMount, reactive, ref} from "vue";

interface Params {
  data: Array<object>
}

interface SelectedParams {
  [key: string]: any
}

let count = ref(0)

const paramsData: Params = {
  data: params
}
let selectedParams: SelectedParams = reactive({})

const initParams = () => {
  params.map(item => {
    selectedParams[item.type] = []
    for (let i = 0; i < item.data.length - 1; i++) {
      i === 0 ? selectedParams[item.type][i] = 1
          : selectedParams[item.type][i] = 0
    }
  })
}

const setParam = (type: string, index: number, length: number) => {
  selectedParams[type] = []
  if (index === length - 1) {
    for (let i = 0; i < length - 1; i++) {
      selectedParams[type].push(1)
    }
  } else {
    for (let i = 0; i < length - 1; i++) {
      // selectedParams[type][i] = 0
      i === index ? selectedParams[type].push(1)
          : selectedParams[type].push(0)
    }
  }
}

const cleanParams = () => {
  initParams()
}

onBeforeMount(initParams)

</script>

<style lang="sass" scoped>
.paramsSection
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

.param__container
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

  h2
    margin: 15px 0
    font-weight: 400

.paramItem__container
  display: flex
  width: 100%

.btns__container
  margin-top: 20px
  display: flex
</style>