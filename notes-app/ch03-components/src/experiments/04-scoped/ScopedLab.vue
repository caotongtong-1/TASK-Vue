<template>
  <div class="lab">
    <h2>实验 04｜样式冲突与 scoped（3.4）</h2>
    <p class="muted">F12检查盒子：标签带 <b>data‑v‑xxxx</b> 哈希属性——scoped给选择器"加锁"。</p>
    <div class="box">
      父组件自己的 .box（绿色）
      <ScopedChild />
    </div>
    <p class="muted">:deep()穿透：下面子组件边框变成红色，是父组件scoped样式改的。</p>
    <div class="deep‑zone">
      <ScopedChild />
    </div>
  </div>
</template>
<script>
import ScopedChild from './ScopedChild.vue'
export default {
  name: 'ScopedLab',
  components: { ScopedChild }
}
</script>
<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}
.box {
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;
}
.deep‑zone :deep(.box) {
  border: 2px solid #c0392b;
}
.muted {
  color: var(--muted);
}
</style>