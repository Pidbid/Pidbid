<template>
    <div>

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