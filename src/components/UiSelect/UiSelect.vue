<template>
  <select
    v-model="localValue"
    :disabled="props.isDisabled"
    :class="$style.select"
  >
    <option
      v-for="option in props.options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface IProps {
    modelValue: string;
    isDisabled?: boolean;
    options: string[];
  }

  interface IEmit {
    'update:modelValue': [value: string];
  }

  const props = withDefaults(defineProps<IProps>(), {
    modelValue: '',
    isDisabled: false,
    options: () => [],
  });

  const emit = defineEmits<IEmit>();

  const localValue = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value),
  });
</script>

<style module lang="scss">
  .select {
    padding: 10px 12px;
    font-size: 14px;
    font-family: 'Press Start 2P';
    font-weight: 400;

    color: var(--retro-text);
    background-color: var(--retro-bg);
    border: 2px solid var(--retro-border);
    border-radius: 6px;

    box-shadow: 0 2px 0 var(--retro-shadow);
    transition: all 0.1s;

    &:focus {
      outline: none;
      border-color: var(--retro-green);
      box-shadow: 0 2px 0 var(--retro-green);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    option {
      background-color: var(--retro-bg);
      color: var(--retro-text);
    }
  }
</style>
