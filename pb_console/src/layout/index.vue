<template>
	<component :is="layouts[themeConfig.layout]" />
</template>

<script setup lang="ts" name="layout">
import { onBeforeMount, onUnmounted, defineAsyncComponent,watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import { Local } from '/@/utils/storage';
import mittBus from '/@/utils/mitt';
import { useRoute,useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useApplications } from '../stores/application';

const route = useRoute()
const router = useRouter()
// 引入组件
const layouts: any = {
	defaults: defineAsyncComponent(() => import('/@/layout/main/defaults.vue')),
	classic: defineAsyncComponent(() => import('/@/layout/main/classic.vue')),
	transverse: defineAsyncComponent(() => import('/@/layout/main/transverse.vue')),
	columns: defineAsyncComponent(() => import('/@/layout/main/columns.vue')),
};

// 定义变量内容
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const storesApplication = useApplications()
// 窗口大小改变时(适配移动端)
const onLayoutResize = () => {
	if (!Local.get('oldLayout')) Local.set('oldLayout', themeConfig.value.layout);
	const clientWidth = document.body.clientWidth;
	if (clientWidth < 1000) {
		themeConfig.value.isCollapse = false;
		mittBus.emit('layoutMobileResize', {
			layout: 'defaults',
			clientWidth,
		});
	} else {
		mittBus.emit('layoutMobileResize', {
			layout: Local.get('oldLayout') ? Local.get('oldLayout') : themeConfig.value.layout,
			clientWidth,
		});
	}
};
// 检查是否有appid参数 如果有则获取appid数据
const is_appid = async () => {
	if (Object.keys(route.params).indexOf("appid") === -1) {
		ElMessage.error({message:"错误的APPID"})
		router.push("/")
	} else {
		//获取app数据
		await storesApplication.appInfoInit()
	}
}
watch(()=>route.path,async(val)=>{
	// await is_appid()
})
// 页面加载前
onBeforeMount(async() => {
	await storesApplication.appInit()
	await is_appid()
	onLayoutResize();
	window.addEventListener('resize', onLayoutResize);
});
// 页面卸载时
onUnmounted(() => {
	window.removeEventListener('resize', onLayoutResize);
});
</script>
