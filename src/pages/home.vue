<template>
<div>
     <div>
        <class-component></class-component>
    </div>
    <h1 class="text-3xl font-bold underline">这是关于页面kaccb</h1>
    <div>
        <todo-list></todo-list>
    </div>
    vuex 的值{{a}}
</div>
</template>

<script lang="ts" setup>
import TodoList from './../components/todo-list.vue'
import ClassComponent from './../components/class-component.vue'
import { useStore } from '@/store'
import AppState from '@/store/model/AppState'
const store =  useStore<AppState>()
let a = store.state.appName
</script>
