<template>
  <div class="page">
    <h2>🔍 搜索结果</h2>
    <p>关键词：<b class="big">{{ kw }}</b>（来自 $route.query.kw）</p>
    <p class="muted">地址栏 #/search?kw=vue ——query 参数明晃晃挂在问号后面，刷新也不丢。</p>
    <router-link to="/program">← 回驾驶舱再传一个</router-link>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      kw: "（空）"
    };
  },
  created() {
    this.kw = this.$route.query.kw || "（空）";
  },
  watch: {
    $route(newRoute) {
      this.$nextTick(()=>{
        this.kw = newRoute.query.kw || "（空）";
      })
    }
  }
};
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}
.big {
  font-size: 20px;
  color: var(--primary-dark);
}
code {
  background: #f0f1ff;
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}
.muted {
  color: var(--muted);
}
</style>