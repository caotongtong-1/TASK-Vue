<template>
  <div class="event-lab">
    <h3>事件实验室（2.4 事件对象 · 2.5 事件修饰符）</h3>

    <button @click="showEvent">打印事件对象（不传参，首参即事件对象）</button>

    <button @click="showEventArg($event, 66)">showEventArg($event, 66)（传参版）</button>

    <a href="https://vuejs.org" @click="goVue">Vue 官网链接（手动 preventDefault）</a>

    <!-- ✅这里加了“外层盒子 @click”文字，就和老师截图一样了 -->
    <div class="bubble" @click="log('outer 触发（外层 @click）')">
      外层盒子 @click
      <button @click.stop="log('inner 触发（.stop：冒泡被阻止）')">内层 .stop</button>
      <button @click="log('inner 触发（无 .stop：冒泡到外层）')">内层 无.stop</button>
    </div>

    <a href="https://vuejs.org" @click.prevent="log('.prevent 阻止了跳转')">Vue 官网（.prevent版）</a>

    <button @click.once="log('.once 抽奖按钮：只触发这一次！')">抽奖按钮 .once</button>

    <div class="self-box" @click.self="log('.self：点到盒子本身才触发')">
      点盒子本身（.self）
      <button>我是子元素（点我没用）</button>
    </div>

    <input
      @keyup.enter="log('回车 .enter 触发')"
      @keyup.esc="log('Esc .esc 触发')"
      placeholder="这里按 Enter / Esc 试试"
    />

    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'EventLab',
  data() {
    return { logs: [] }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)
      console.log(msg)
    },
    showEvent(e) {
      this.log(`type=${e.type} | target=${e.target.tagName.toLowerCase()} | timeStamp=${e.timeStamp}`)
      console.log('完整事件对象：', e)
    },
    showEventArg(e, number) {
      this.log(`传参版：target=${e.target.tagName.toLowerCase()} | number=${number}`)
    },
    goVue(e) {
      e.preventDefault()
      this.log('手动 preventDefault() 阻止了跳转（2.5 用 .prevent 更简洁）')
    }
  }
}
</script>

<style scoped>
.event-lab {
  border: 1px dashed #b8860b;
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 2;
}
.bubble {
  border: 2px solid green;
  padding: 20px;
  margin: 10px 0;
}
.bubble button {
  margin: 0 8px;
}
.self-box {
  border: 2px dashed #666;
  padding: 20px;
  margin: 10px 0;
}
.logs {
  padding-left: 22px;
}
input {
  padding: 6px 8px;
  width: 260px;
}
</style>