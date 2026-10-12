<template>
  <div id="app">
    <h1>ch03-components｜第 3 章实验台</h1>
    <p class="muted">第 03 课下半场：两种 API · 生命周期 · 注册 · 样式冲突 · props / emit / inject</p>

    <nav class="lab-nav">
      <a href="#exp-01">01 两种API</a>
      <a href="#exp-02">02 生命周期</a>
      <a href="#exp-03">03 注册</a>
      <a href="#exp-04">04 样式冲突</a>
      <a href="#exp-05">05 props</a>
      <a href="#exp-06">06 emit</a>
      <a href="#exp-07">07 provide/inject</a>
    </nav>

    <section id="exp-01">
      <div class="lab">
        <h2>实验 01｜选项式 API vs 组合式 API</h2>
        <p class="muted">同一个计数器，分别用选项式 API 和组合式 API 实现。</p>
        <div class="pair">
          <CountOptions />
          <CountSetup />
        </div>
      </div>
    </section>

    <section id="exp-02">
      <LifecycleDemo />
    </section>

    <section id="exp-03">
      <div class="lab">
        <h2>实验 03｜组件注册</h2>
        <p class="muted">局部注册在 App 的 components 中声明；全局注册只在 main.js 中声明。</p>
        <div class="pair">
          <LocalDemo />
          <GlobalDemo />
        </div>
      </div>
    </section>

    <section id="exp-04">
      <ScopedLab />
    </section>

    <section id="exp-05">
      <PropsLab />
    </section>

    <section id="exp-06">
      <EmitLab />
    </section>

    <section id="exp-07">
      <ProvideInjectLab />
    </section>
  </div>
</template>

<script>
import CountOptions from './experiments/01-apis/CountOptions.vue'
import CountSetup from './experiments/01-apis/CountSetup.vue'
import LifecycleDemo from './experiments/02-lifecycle/LifecycleDemo.vue'
import LocalDemo from './experiments/03-register/LocalDemo.vue'
import ScopedLab from './experiments/04-scoped/ScopedLab.vue'
import PropsLab from './experiments/05-props/PropsLab.vue'
import EmitLab from './experiments/06-emit/EmitLab.vue'
import ProvideInjectLab from './experiments/07-provide-inject/ProvideInjectLab.vue'

export default {
  name: 'App',
  components: {
    CountOptions,
    CountSetup,
    LifecycleDemo,
    LocalDemo,
    ScopedLab,
    PropsLab,
    EmitLab,
    ProvideInjectLab
  }
}
</script>

<style scoped>
#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.lab-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 24px;
}

.lab-nav a {
  color: #2c3e50;
  text-decoration: none;
  border: 1px solid #42b983;
  border-radius: 999px;
  padding: 4px 14px;
  font-size: 14px;
  background: #f4fffa;
}

.lab-nav a:hover {
  background: #e6f7ef;
}

section {
  margin-bottom: 24px;
}

.muted {
  color: #7f8c8d;
  font-size: 14px;
  margin-top: 0;
}

.lab {
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-left: 4px solid #42b983;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 16px 20px;
}

.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 720px) {
  .pair {
    grid-template-columns: 1fr;
  }
}
</style>