<template>
	<el-header>
		<BreadcrumbIndex />
	</el-header>
</template>

<script setup lang="ts" name="layoutAppHeader">
import { defineAsyncComponent } from 'vue';
const BreadcrumbIndex = defineAsyncComponent(() => import('/@/layout/appNavBars/breadcrumb/index.vue'));

</script>
