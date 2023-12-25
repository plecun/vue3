import { createI18n } from 'vue-i18n'
// element-plus 中的语言配置
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
//引入自己创建的语言包
import zhLocale from './language/zh'
import enLocale from './language/en'
import defaultSettings from '@/settings'
const { language } = defaultSettings
const languageSet = (JSON.parse(localStorage.getItem('layout-setting'))) ? JSON.parse(localStorage.getItem('layout-setting')).language : language

//设置i18n实例配置项
const i18n = createI18n({
  locale: languageSet, //默认语言
  globalInjection: true,
  legacy: false,
  messages:{
   //合并自己的语言包和element的语言包
    en_US: {
      ...enLocale,
      ...elementEnLocale
    },
    zh_CN: {
      ...zhLocale,
      ...elementZhLocale
    }
  }
})
console.log(i18n);
export default i18n