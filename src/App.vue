<template>
  <h1>我的第一个Vue应用 - {{ student.name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: "32605150606曹彤彤"
      }
    }
  }
}
</script>

<style>
h1{
  color:#42b983;
}
</style
