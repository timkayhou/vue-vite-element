<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>()

const count = ref(0)
const input = ref('element-plus')

const curDate = ''

const toast = () => {
  ElMessage.success('Hello')
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a>
    ,
    <a href="https://www.antdv.com" target="_blank">ant-design-vue</a>
    for more information.
  </p>

  <!-- example components -->
  <div>
    <el-button @click="toast">El Message</el-button>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  </div>
  <br />
  <div>
    <a-button @click="toast"> Ant Message </a-button>
    <a-button type="primary" @click="count++">count is: {{ count }}</a-button>
    <a-button type="dashed" @click="count++">count is: {{ count }}</a-button>
    <a-button type="ghost" @click="count++">count is: {{ count }}</a-button>
    <a-button type="link" @click="count++">count is: {{ count }}</a-button>
    <a-button type="text" @click="count++">count is: {{ count }}</a-button>
  </div>

  <br />
  <el-input v-model="input" style="width: 200px; margin: 20px" />
  <el-tag>Tag 1</el-tag>
  <br />
  <a-input v-model="input" style="width: 200px; margin: 20px" />
  <a-tag>Tag 1</a-tag>

  <br />
  <el-date-picker
    v-model="curDate"
    type="date"
    placeholder="Pick a day"
  ></el-date-picker>
  <br />
  <a-date-picker
    v-model="curDate"
    type="date"
    placeholder="Pick a day"
  ></a-date-picker>

  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>
</template>
