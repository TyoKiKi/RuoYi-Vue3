// 字典标签组件
import DictTag from './DictTag/index.vue'
import Pagination from './Pagination/index.vue'
import RightToolbar from './RightToolbar/index.vue'
import TreeSelect from './TreeSelect/index.vue'
import FileUpload from './FileUpload/index.vue'
import ImageUpload from './ImageUpload/index.vue'
import ImagePreview from './ImagePreview/index.vue'
import Editor from './Editor/index.vue'

import type { App } from 'vue'
// 全局组件挂载
const myDirective = {
  version: '1.0.0',
  install: (app: App) => {
    // 字典标签组件
    app.component('DictTag', DictTag)
    // 分页组件
    app.component('Pagination', Pagination)
    // 自定义表格工具组件
    app.component('RightToolbar', RightToolbar)
    // 自定义树选择组件
    app.component('TreeSelect', TreeSelect)
    // 文件上传组件
    app.component('FileUpload', FileUpload)
    // 图片上传组件
    app.component('ImageUpload', ImageUpload)
    // 图片预览组件
    app.component('ImagePreview', ImagePreview)
    // 富文本组件
    app.component('Editor', Editor)
  }
}

export default myDirective
