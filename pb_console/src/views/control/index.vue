<template>
    <div class="layout-padding">
        <div class="layout-padding-auto layout-padding-view">
            <div class="system-user-search mb15 mt15">
				<el-button size="default" type="success" class="ml10">
					<el-icon>
						<ele-FolderAdd />
					</el-icon>
					添加应用
				</el-button>
			</div>
            <el-table :data="appsList" style="width:100%;">
                <el-table-column label="序号" type="index" width="60"></el-table-column>
                <el-table-column label="应用ID" prop="appid"></el-table-column>
                <el-table-column label="名称" prop="name"></el-table-column>
                <el-table-column label="描述" prop="description"></el-table-column>
                <el-table-column label="状态" prop="description"></el-table-column>
                <el-table-column label="操作" fixed="right"></el-table-column>
            </el-table>
            <el-pagination></el-pagination>
        </div>
    </div>
</template>
<script setup lang="ts" name="control">
import { ref, reactive, onMounted } from "vue"
import { getApps } from "/@/api/apps"
import { useApplications } from "/@/stores/application"
const storesApplication = useApplications()
const appsConfig = ref({
    page: 1,
    length: 20,
    allCount: 0
})
const appsList = ref([])
onMounted(() => {
    // storesApplication.setAppid("nihao")
    appDataInit()
    storesApplication.app_init()
    storesApplication.setMenuShow(true)
})

//获取应用基本数据
const appDataInit = async () => {
    const appsRes = await getApps(appsConfig.value.page, appsConfig.value.length)
    appsList.value = appsRes.data.data
    appsConfig.value.allCount = appsRes.data.allCount
}
</script>