<template>
    <div>
        <Weditor v-model="val" :height="800"></Weditor>
        <el-button @click="printLog">测试</el-button>
        <el-button @click="showApp(true)">显示</el-button>
        <el-button @click="showApp(false)">隐藏</el-button>
    </div>
</template>

<script lang="ts" setup name="test">
import { onMounted, ref, reactive, defineAsyncComponent } from "vue"
import { storeToRefs } from "pinia"
import { useApplications } from "/@/stores/application"
const storesApplication = useApplications()

const Weditor = defineAsyncComponent(() => import("/@/components/CodeEditor/index.vue"))
const val = ref("#测试内容")
const printLog = () => {
    console.log(val.value)
}
const showApp = (a) => {
    storesApplication.setMenuShow(a)
}
</script>