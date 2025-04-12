<template>
  <button
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
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'
defineProps<ButtonProps>()

// Set the component name to a multi-word name
defineOptions({
  name: 'VkButton',
})
</script>

<style scoped></style>
