<template>
    <div>
        <div class="white">
            <div class="flex flex-row pa-5">
                <div class="flex-1 flex-start ma-5">
                    <el-button icon="ele-Refresh">刷新</el-button>
                </div>
                <div class="flex-1 flex-end ma-5">
                    <el-button type="success" icon="ele-Document" @click="functionSave">保存</el-button>
                    <el-button type="primary" icon="ele-Upload">发布</el-button>
                </div>
            </div>
        </div>
        <Weditor v-model="code" :height="800"></Weditor>
        <el-button @click="printLog">测试</el-button>
    </div>
</template>

<script lang="ts" setup name="functionsEdit">
import { onMounted, ref, defineAsyncComponent } from "vue"
import { storeToRefs } from "pinia"
import { useApplications } from "/@/stores/application"
import { getFuncInfo, funcUpdate } from "/@/api/function"
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from "element-plus"

const route = useRoute()
const router = useRouter()
const storesApplication = useApplications()
const { appid } = storeToRefs(storesApplication)
const Weditor = defineAsyncComponent(() => import("/@/components/CodeEditor/index.vue"))
const code = ref("")
const printLog = () => {
    console.log(code.value)
}
let functionid = ""
const funcInfo = ref({ code: "" })
//获取函数详情
const funcInfoInit = async () => {
    const funcRes = await getFuncInfo(appid.value, functionid)
    funcInfo.value = funcRes.data
    code.value = funcInfo.value.code
}
//函数更新
const functionSave = async () => {
    await funcUpdate(functionid, { code: code.value })
    ElMessage.success({ message: "保存成功" })
}
//更新当前的title

onMounted(async () => {
    functionid = route.params.tagsViewName
    await funcInfoInit()
})
</script>