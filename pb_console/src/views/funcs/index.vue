<template>
    <div class="ma-10">
        <div class="flex flex-row mb-10">
            <el-button icon="ele-Refresh">刷新</el-button>
            <el-button type="success" icon="ele-Plus" @click="funcCreateShow = true">添加</el-button>
        </div>
        <div class="flex-wrap flex-start-center mb-10">
            <h4>函数标签</h4>
            <el-button class="ml-5" v-for="t, i in tagsList" :key="i" size="s">{{ t }}</el-button>
        </div>
        <el-table :data="funcList">
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column label="函数名" prop="name"></el-table-column>
            <el-table-column label="描述" prop="description"></el-table-column>
            <el-table-column label="标签">
                <template #default="scope">
                    <el-tag v-for="tag, index in scope.row.tag" :key="index">{{ tag }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="类型">
                <template #default="scope">
                    <el-tag v-if="scope.row.type == 'route'" type="primary">路径函数</el-tag>
                    <el-tag v-if="scope.row.type == 'common'" type="warning">公共函数</el-tag>
                </template>
            </el-table-column>
            <el-table-column lebl="操作" fixed="right">
                <template #default="scope">
                    <el-button type="primary" @click="functionEdit(scope.row)">编辑</el-button>
                    <el-button type="error">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog v-model="funcCreateShow" title="函数创建">
            <el-form>
                <el-form-item label="名称">
                    <el-input v-model="funcCreateData.name" placeholder="中文、英文、特殊符号"></el-input>
                </el-form-item>
                <el-form-item label="标识">
                    <el-input v-model="funcCreateData.id" placeholder="函数全局唯一标识"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="funcCreateData.description" placeholder="函数的详细描述" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-radio-group v-model="funcCreateData.type">
                        <el-radio label="common">公共函数</el-radio>
                        <el-radio label="route">路径函数</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="标签">
                    <el-tag v-for="(tag, index) in funcCreateData.tag" :key="tag" style="margin-right: 10px;" type=""
                        size="medium" closable @close="removeTag(index)">{{ tag }}</el-tag>
                    <el-autocomplete v-model="funcTagInput" :fetch-suggestions="suggestTags" class="input-new-tag"
                        clearable size="mini" type="text" placeholder="添加" @select="addTag" @change="addTag" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" @click="createFunction">创建</el-button>
                <el-button @click="funcCreateShow = false">取消</el-button>
            </template>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getAppFuncs } from "/@/api/apps";
import { getFunTags, createFunc } from "/@/api/function"
import { useApplications } from "/@/stores/application";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";
import { useRouter,onBeforeRouteLeave } from "vue-router";

const router = useRouter()
const storesApplication = useApplications()
const { appid } = storeToRefs(storesApplication)
const tagsList = ref([])
const funcList = ref([])
const funcAllcount = ref(0)
const funcConfig = ref({
    page: 1,
    length: 15
})
const funcCreateShow = ref(false)
const funcCreateData = ref({
    id:"",
    appid: appid.value,
    name: "",
    tag: [],
    type: "",
    description: ""
})
const funcTagInput = ref("")
const currentFunc = ref({id:"",name:""})
//初始化函数列表
const initFuncList = async () => {
    const funcRes = await getAppFuncs(appid.value, funcConfig.value.page, funcConfig.value.length)
    funcList.value = funcRes.data.data
    funcAllcount.value = funcRes.data.allCount
}
//初始化函数tag列表
const initFuncTags = async () => {
    const tagsRes = await getFunTags(appid.value)
    tagsList.value = tagsRes.data
}
//创建函数
const createFunction = async () => {
    const createRes = await createFunc(funcCreateData.value)
    ElMessage.success({ message: createRes.msg })
    await initFuncList()
}
//添加标签
const addTag = () => {
    const val = funcTagInput.value
    if (!val) return
    if (!funcCreateData.value.tag.includes(val)) {
        funcCreateData.value.tag.push(val)
    }
    funcTagInput.value = ''
}
//显示建议的标签
const suggestTags = (queryString, cb) => {
    const data = tagsList.value
        .filter(it => {
            return it.indexOf(queryString) >= 0
        })
        .map(it => {
            return { value: it }
        })
    cb(data)
}
//删除标签
const removeTag = (index: number) => {
    const tags = funcCreateData.value.tag || []
    if (!tags.length) return
    tags.splice(index, 1)
}
//编辑函数
const functionEdit = async (funcData:object) => {
    currentFunc.value.name = funcData.name
    // router.push({ path: `/functions/${appid.value}/edit`, query: { funcid: funcData.id },params:{tagsViewName:"123"} })
    router.push({ name:"functionsEdit",params:{tagsViewName:funcData.id} })
}

//页面初始
onMounted(async () => {
    await initFuncList()
    await initFuncTags()
})
</script>