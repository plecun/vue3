import { createApp } from 'vue'
import mitt from 'mitt'

import Cookies from 'js-cookie'

import ElementPlus, { ElNotification, ElMessage, ElMessageBox } from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import i18n from './i18n/i18n'
import 'element-plus/dist/index.css'

import '@/assets/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import directive from './directive' // directive

// 注册指令
import plugins from './plugins' // plugins
import { download } from '@/utils/request'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'

import './permission' // permission control

import { parseTime, resetForm, addDateRange, handleTree } from '@/utils'

// 分页组件
import Pagination from '@/components/Pagination'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.download = download
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.i18n = i18n // 中英文转换
// 通用对话框宽度
app.config.globalProperties.currencyDialogWidth = '800px'
app.config.globalProperties.contractDialogWidth = '1200px'
// 文件类型匹配及打开限制
app.config.globalProperties.contractFileType = ["pdf", "dwg", "ppt", "ppx", "pptx", "doc", "docx", "xls", "xlsx"]
app.config.globalProperties.contractAcceptList = ".pdf, .dwg, .ppt, .ppx, .pptx, .doc, .docx, .xls, .xlsx"
// 弹框
app.config.globalProperties.$notify = ElNotification;
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$messageBox = ElMessageBox;

// 全局组件挂载
app.component('Pagination', Pagination)

app.use(i18n)
app.use(router)
app.use(store)
app.use(plugins)
app.use(elementIcons)
app.component('svg-icon', SvgIcon)

directive(app)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default'
})

window.eventBus = new mitt()

// 修改 el-dialog 默认点击遮照为不关闭
app._context.components.ElDialog.props.closeOnClickModal.default = false

app.mount('#app')
