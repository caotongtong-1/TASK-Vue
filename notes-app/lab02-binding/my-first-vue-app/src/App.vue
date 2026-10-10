<template>
  <div id="app">
    <h1>记事本 · 第 2 章实验</h1>
    <NoteCard />

    <h3>记事本雏形（综合任务）</h3>
    <input
      v-model="newNote"
      placeholder="输入笔记内容"
      @keyup.enter="addNote"
      @keyup.esc="newNote = ''"
    />
    <button @click="addNote">添加</button>
    <br>

    <label><input type="radio" value="高" v-model="priority" /> 高</label>
    <label><input type="radio" value="中" v-model="priority" /> 中</label>
    <label><input type="radio" value="低" v-model="priority" /> 低</label>
    <br>

    <label><input type="checkbox" value="待办" v-model="tags" /> 待办</label>
    <label><input type="checkbox" value="灵感" v-model="tags" /> 灵感</label>

    <p>实时展示 → 内容：{{ newNote }} | 优先级：{{ priority }} | 标签：{{ tags.join('、') }}</p>

    <ul>
      <li v-for="(item, idx) in notes" :key="idx">
        {{ item.content }} — {{ item.priority }}｜{{ item.tags.join('、') }}
      </li>
    </ul>

    <!-- 事件实验室组件 -->
    <EventLab />
  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
import EventLab from './components/EventLab.vue'

export default {
  components: { NoteCard, EventLab },
  data() {
    return {
      newNote: '',      // ⚠这个必须有，esc清空就是改它
      priority: '中',
      tags: [],
      notes: []
    }
  },
  methods: {
    addNote() {
      if (!this.newNote.trim()) return
      this.notes.push({
        content: this.newNote,
        priority: this.priority,
        tags: [...this.tags]
      })
      this.newNote = '' // 添加完也清空输入框（习惯写法，不影响Esc功能）
    }
  }
}
</script>

<style>
#app {
  padding: 16px;
}
</style>