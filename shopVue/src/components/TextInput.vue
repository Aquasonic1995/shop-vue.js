<template>
  <input type="text" :placeholder="placeholder" :value="modelValue" @input="handleInput" />
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  label: {
    type: String,
    default: 'Label'
  },
  hint: {
    type: String,
    default: 'Hint'
  }
})
const emit = defineEmits(['update:modelValue'])
const handleInput = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>
<style scoped></style>
