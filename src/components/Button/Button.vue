<template>
  <button
    ref="buttonRef"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

// Set the component name to a multi-word name
defineOptions({
  name: 'VkButton',
})

const buttonRef = ref<HTMLElement | null>(null)

defineExpose({
  ref: buttonRef,
})
</script>

<style scoped></style>
