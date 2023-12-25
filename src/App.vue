<template>
  <el-config-provider :locale="messages[locale]">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
import { handleThemeStyle } from '@/utils/theme'
import { useI18n } from "vue-i18n";
const { locale, messages } = useI18n();

onMounted(() => {
  nextTick(() => {
    handleThemeStyle(useSettingsStore().theme)
  })
})
</script>
