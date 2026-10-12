<template>
  <div class="box">
    <h3>全局注册 GlobalDemo</h3>
    <p>我只在 main.js 注册，App不用import我</p>
  </div>
</template>
<script>
export default {
  name: 'GlobalDemo'
}
</script>
<style scoped>
.box {
  border:2px solid #f56c6c;
  padding:12px;
  border-radius:8px;
}
</style>