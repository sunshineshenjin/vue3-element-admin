<template>
    <div>
        <input v-model="title" @keydown.enter="addToDo" />
        <ul>
            <li v-for="(item,index) in todoList" :key="index">
                <input type="checkbox" v-model="item.state" />
                <span :class="{ 'todo-finish': item.state}">{{item.name}}</span>
            </li>
        </ul>
        <div v-if="todoList.length > 0">
            <span>完成情况：</span>
            <span>{{doneCount}}</span>
            <span class="count-split">/</span>
            <span>{{allCount}}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
type ToDo = {
    name: string,
    state: boolean
}
import { ref, Ref, computed, ComputedRef } from 'vue'
let title:Ref<string> = ref('')
let todoList:Ref<ToDo[]> = ref([])

function addToDo():void {
    todoList.value.push({
        name: title.value,
        state: false
    })
    title.value = ''
}

// 计算已经完成数
let doneCount: ComputedRef<number> = computed(() => {
   return todoList.value.filter(item => item.state).length
})

// 计算总数
let allCount:ComputedRef<number> = computed(() => {
    return todoList.value.length
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'todo-list',
    setup() {
    },
})
</script>

<style lang="stylus" scoped>
aa = green;
.todo-finish {
    color: lightgray;
    text-decoration: line-through;
    color: aa;
    display: flex;
}
  
.count-split {
    display: inline-block;
    padding: 0 2px;
}

.aaa {
    color: aqua;
}
</style>