<template>
    <div>
        <HeaderHtml></HeaderHtml>
        <div class="layout-padding">
            <div class="layout-padding-auto layout-padding-view">
                <div class="system-user-search mb15 mt15">
                    <el-button size="default" type="success" class="ml10">
                        <el-icon>
                            <ele-RefreshRight />
                        </el-icon>
                        刷新
                    </el-button>
                    <el-button size="default" type="primary" class="ml10">
                        <el-icon>
                            <ele-Plus />
                        </el-icon>
                        添加应用
                    </el-button>
                </div>
                <el-card style="width:100%;margin:15px;">
                    <el-table :data="appsList" style="width:100%;">
                        <el-table-column label="序号" type="index" width="60"></el-table-column>
                        <el-table-column label="应用ID" prop="appid"></el-table-column>
                        <el-table-column label="名称" prop="name"></el-table-column>
                        <el-table-column label="描述" prop="description"></el-table-column>
                        <el-table-column label="状态" prop="description"></el-table-column>
                        <el-table-column label="操作" fixed="right">
                            <template #default="scope">
                                <el-button size="sm" type="primary" text>重启</el-button>
                                <el-button size="sm" type="error" text>停止</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="开发" fixed="right">
                            <template #default="scope">
                                <el-button size="sm" type="primary" @click="appDevelop(scope.row.appid)">开发</el-button>
                                <el-button size="sm" type="error">删除</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="高级" fixed="right">
                            <template #default="scope">
                                <el-button size="sm" type="success">导出</el-button>
                                <el-button size="sm" type="warning">导入</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
                <el-pagination></el-pagination>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" name="control">
import { ref, reactive, onMounted, defineAsyncComponent } from "vue"
import { getApps } from "/@/api/apps"
import { NextLoading } from '/@/utils/loading';
import { useApplications } from "/@/stores/application"
import { useRouter } from "vue-router";
const HeaderHtml = defineAsyncComponent(() => import('/@/layout/component/appHeader.vue'))
const storesApplication = useApplications()

const router = useRouter()
const appsConfig = ref({
    page: 1,
    length: 20,
    allCount: 0
})
const appsList = ref([])
onMounted(() => {
    // storesApplication.setAppid("nihao")
    NextLoading.done()
    appDataInit()
})

//获取应用基本数据
const appDataInit = async () => {
    const appsRes = await getApps(appsConfig.value.page, appsConfig.value.length)
    appsList.value = appsRes.data.data
    appsConfig.value.allCount = appsRes.data.allCount
}

//path to app console
const appDevelop = async (appid: string) => {
    await storesApplication.setAppid(appid)
    router.push(`/app/${appid}`)
}
</script>