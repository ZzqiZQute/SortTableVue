<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div style="display:flex;justify-content: center">
      <div style="width:500px">
        <sort-table :items="items" :len="items.length" :header="header" :sorted-index="sortedIndex"
                    :transition-time="0.5" :header-mouseover-color="'#008814'"></sort-table>
      </div>
    </div>
  </div>
</template>

<script>
import SortTable from "@/components/SortTable";
export default {
  name: 'App',
  components: {
    'sort-table':SortTable
  },
  data: () => {
    return {
      items: [
        {
          name: '张三',
          age: 23,
          time:40,
          score: 95,
        },
        {
          name: '李四',
          age: 21,
          time:34,
          score: 90,
        },
        {
          name: '王五',
          age: 45,
          time:15,
          score: 92,
        },
        {
          name: '赵六',
          age: 32,
          time:49,
          score: 94,
        },
      ],
      header: {
        name: '姓名',
        age: '年龄',
        time:'学习时长',
        score: '成绩',
      },
      sortedIndex: {
        age: true,
        time:true,
        score: true,
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
