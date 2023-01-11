<template>
    <div ref="editContainer" class="code-editor" :style="{ height: props.height + 'px' }"></div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, watch } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// 解决vite Monaco提示错误
self.MonacoEnvironment = {
    getWorker() {
        return new JsonWorker();
    },
};
let monacoEditor = null;
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    height: {
        type: Number,
        default: 200
    }
})
const emits = defineEmits(["update:modelValue"])
const { proxy } = getCurrentInstance();

watch(
    () => props.modelValue,
    (value) => {
        // 防止改变编辑器内容时光标重定向
        if (value !== monacoEditor?.getValue()) {
            monacoEditor.setValue(value);
        }
    },
);

onMounted(() => {
    monacoEditor = monaco.editor.create(proxy.$refs.editContainer, {
        value: props.modelValue,
        // readOnly: false,
        language: 'python',
        // theme: 'vs-light',
        selectOnLineNumbers: true,
        renderSideBySide: false,
        lineNumbers: 'on',
        roundedSelection: true,
        scrollBeyondLastLine: false,
        theme: 'vs-light',
        readOnly: false,
        formatOnType: true,
        fontSize: 16,
        linkedEditing: true,
        cursorBlinking: 'expand',
        smoothScrolling: true,
        renderWhitespace: 'selection',
        tabSize: 2,
        automaticLayout: true,
        autoIndent: true,
        showFoldingControls: 'always',
        showDeprecated: true,
        definitionLinkOpensInPeek: false,
    });
    // 监听值变化
    monacoEditor.onDidChangeModelContent(() => {
        const currenValue = monacoEditor?.getValue();
        emits('update:modelValue', currenValue);
    });
});
</script>
<style scoped>
.code-editor {
    width: 100%;
}
</style>