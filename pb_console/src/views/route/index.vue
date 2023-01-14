<template>
    <div class="system-menu-container layout-pd">
        <el-card shadow="hover">
            <div class="system-menu-search mb15">
                <el-input size="default" placeholder="请输入路径名称" style="max-width: 180px"> </el-input>
                <el-button size="default" type="primary" class="ml10">
                    <el-icon>
                        <ele-Search />
                    </el-icon>
                    查询
                </el-button>
                <el-button size="default" type="success" class="ml10" @click="routeConfigData.show = true">
                    <el-icon>
                        <ele-FolderAdd />
                    </el-icon>
                    新增路径
                </el-button>
            </div>
            <el-table :data="routeList" row-key="_id" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
                default-expand-all>
                <el-table-column label="路径" prop="route"></el-table-column>
                <el-table-column label="名称" prop="name"></el-table-column>
                <el-table-column label="描述" prop="description"></el-table-column>
                <el-table-column label="层级" prop="depth"></el-table-column>
                <el-table-column label="是否开启" prop="http"></el-table-column>
                <el-table-column label="类型">
                    <template #default="scope">
                        <el-tag :type="scope.row.type == 'route' ? 'warning' : 'success'">{{
                            routeType[scope.row.type]
                        }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right">
                    <template #default="scope">
                        <el-button type="primary" text>编辑</el-button>
                        <el-button type="success" text v-if="scope.row.type == 'func'">绑定</el-button>
                        <el-button type="danger" text>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog v-model="routeConfigData.show" :title="routeConfigData.title">
            <el-form>
                <el-form-item label="名称">
                    <el-input v-model="routeConfigData.data.name" placeholder="路径的名称"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="routeConfigData.data.description" placeholder="路径的描述"></el-input>
                </el-form-item>
                <el-form-item label="父路径">
                    <!-- <el-input v-model="routeConfigData.data.route" placeholder="路径的描述"></el-input> -->
                    <el-autocomplete v-model="routeConfigData.data.route"
                        :fetch-suggestions="getRouteParent"></el-autocomplete>
                </el-form-item>
                <el-form-item label="路径">
                    <el-input v-model="routeConfigData.data.route" placeholder="路径的描述"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getAppRoutes } from "/@/api/apps";
import { getConfigInfo } from "/@/api/config"
import { useRoute } from "vue-router";
const route = useRoute()
const routeList = ref([])
const appid = ref("")
const routeType = ref({})
const routeConfigData = ref({
    show: false,
    title: "路径创建",
    data: {
        name: "",
        description: "",
        route: ""
    }
})
const parentRouteList = ref([])
//获取路径列表
const routeDataInit = async () => {
    const routeRes = await getAppRoutes(appid.value)
    routeList.value = routeRes.data
}
//获取路径类型基础配置
const routeTypeConfig = async () => {
    const configRes = await getConfigInfo("route_type")
    routeType.value = configRes.data
}
//从路径拼接可能会用到的parent route
const getParentRoute = (routeData)=>{
   
}
//获取route的父路径
const getRouteParent = (queryString: string, cb) => {
    const results = routeList.value.filter(res =>{return res.type==='route'}).map(it=>{return {value:it.route}})
    cb(results)
}
onMounted(async () => {
    appid.value = route.params.appid
    await routeTypeConfig()
    await routeDataInit()
})
</script>