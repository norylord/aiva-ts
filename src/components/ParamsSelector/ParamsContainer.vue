<template>
  <div class="paramsSection">
    <h1>Уровень зарплат</h1>
    <div v-for="param in paramsData.data" :key="param.title" class="param__container">
      <h2>{{ param.title }}</h2>
      <div class="paramItem__container">
        <ParamsItem
            v-for="item in param.data"
            :key="item"
            :active="selectedParams[param.type] === item || selectedParams[param.type] === 'Все'"
            :title="item"
            @click="setParam(param.type, item)"
        >
          {{ item }}
        </ParamsItem>
      </div>

    </div>
    <div class="btns__container">
      <the-button type="primary">Получить статистику</the-button>
      <the-button type="danger" @click="cleanParams()">Сбросить</the-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import params from "@/static/params";
import ParamsItem from "@/components/ParamsSelector/ParamsItem.vue";
import {reactive} from "vue";
import TheButton from "@/components/ui/TheButton.vue";

interface Params {
  data: Array<object>
}

interface SelectedParams {
  [key: string]: any
}


const paramsData: Params = {
  data: params
}
let selectedParams: SelectedParams = reactive({})

const setParam = (type: string, value: string) => {
  selectedParams[type] === value ?
      selectedParams[type] = ''
      : selectedParams[type] = value
}

const cleanParams = () => {
  for (let key in selectedParams) {
    selectedParams[key] = ''
  }
}
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