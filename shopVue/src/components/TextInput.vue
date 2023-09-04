<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextInput'
})
</script>

<template>
  <p>{{ props.label }}</p>
  <input
    type="text"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="handleInput"
  />
  <p>{{ props.hint }}</p>
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
