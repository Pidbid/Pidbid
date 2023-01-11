<template>
    <div class="application-container">
        <div class="controls">
            <el-button plain type="default" size="mini" icon="el-icon-refresh" @click="loadApps">
                刷新
            </el-button>
            <el-button plain type="primary" size="mini" icon="el-icon-plus" @click="showCreateForm">
                新建
            </el-button>
        </div>
        <div class="app-group">
            <div class="app-group-title">我创建的应用</div>
            <el-table v-loading="loading" empty-text="还没有创建应用" :data="applications.created"
                style="width: 100%;margin-top:10px;" stripe>
                <el-table-column align="center" label="App ID" min-width="100">
                    <template slot-scope="scope">
                        <div class="table-row">
                            <el-tooltip :content="scope.row.appid" effect="light" placement="top">
                                <div class="table-column-text"> {{ scope.row.appid }}</div>
                            </el-tooltip>
                            <i v-clipboard:message="scope.row.appid" v-clipboard:success="onCopy"
                                class="el-icon-document-copy copy-btn" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="应用名" min-width="120">
                    <template slot-scope="{row}">
                        <span class="link-type table-column-text" @click="showUpdateForm(row)">{{ row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="应用规格" min-width="80">
                    <template slot-scope="scope">
                        <el-tooltip v-if="scope.row.spec" placement="top">
                            <div slot="content">{{ formatSpec(scope.row.spec.spec).text }}</div>
                            <el-tag type="info">{{ formatSpec(scope.row.spec.spec).label }}</el-tag>
                        </el-tooltip>
                        <span v-else>-</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="服务版本" min-width="80">
                    <template slot-scope="scope">
                        {{ getRuntimeVersion(scope.row) }}
                    </template>
                </el-table-column>
                <el-table-column label="服务启停" align="center" width="240" class-name="small-padding">
                    <template slot-scope="{row}">
                        <el-button v-if="row.status === 'stopped' || row.status === 'created'"
                            :loading="serviceLoading[row.appid]" plain type="success" size="mini"
                            @click="startApp(row)">
                            启动
                        </el-button>
                        <el-button v-if="row.status === 'prepared_start'" :loading="true" plain type="info" size="mini">
                            准备启动
                        </el-button>
                        <el-button v-if="row.status === 'starting'" :loading="true" plain type="info" size="mini">
                            正在启动
                        </el-button>
                        <el-button v-if="row.status === 'running'" :loading="serviceLoading[row.appid]" plain
                            type="danger" size="mini" @click="stopApp(row)">
                            停止
                        </el-button>
                        <el-button v-if="row.status === 'prepared_stop'" :loading="true" plain type="info" size="mini">
                            准备停止
                        </el-button>
                        <el-button v-if="row.status === 'stopping'" :loading="true" plain type="info" size="mini">
                            停止中
                        </el-button>
                        <el-button v-if="row.status === 'running'" :loading="serviceLoading[row.appid]" plain
                            type="default" size="mini" @click="restartApp(row)">
                            重启
                        </el-button>
                        <el-button v-if="row.status === 'prepared_restart'" :loading="true" plain type="info"
                            size="mini">
                            准备重启
                        </el-button>
                        <el-button v-if="row.status === 'restarting'" :loading="true" plain type="info" size="mini">
                            重启中
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" align="center" min-width="120">
                    <template slot-scope="{row}">
                        <span v-if="row.created_at">{{ row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
                        <span v-else>-</span>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" align="center" width="280" class-name="small-padding">
                    <template slot-scope="{row}">
                        <el-tooltip content="编写云函数、查看日志、管理数据库、文件、成员协作等" effect="light" placement="top">
                            <el-button type="success" size="mini" @click="toDetail(row)">
                                开发
                            </el-button>
                        </el-tooltip>
                        <el-button type="default" size="mini" @click="exportApp(row)">
                            导出
                        </el-button>
                        <el-button type="default" size="mini" @click="showImportForm(row)">
                            导入
                        </el-button>
                        <el-tooltip content="释放即完全删除应用，暂不可恢复，谨慎操作，仅应用创建者可执行此操作!" effect="light" placement="left">
                            <el-button :disabled="row.status === 'running'" plain size="mini" type="default"
                                @click="deleteApp(row)">
                                释放
                            </el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup lang="ts" name="apps">
import { ref, reactive, onMounted } from "vue"

</script>
<style lang="scss">
.application-container {
    width: calc(100vw - 30px);
    margin: 15px auto;
}

.table-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.table-column-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    margin-left: 15px;
}

.copy-btn {
    display: block;
    font-size: 15px;
    cursor: pointer;
}

.app-group {
    margin-top: 20px;
    border: 1px solid rgb(236, 233, 233);
    box-shadow: -1px -1px 5px 0 rgb(0 0 0 / 10%);
    background: white;
}

.app-group-title {
    color: rgb(85, 83, 83);
    padding: 10px;
}
</style>