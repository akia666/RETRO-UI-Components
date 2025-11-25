<template>
  <div :class="$style.field">
    <label
      v-if="props.label"
      :class="$style.label"
    >
      {{ props.label }}
    </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
  interface IProps {
    label?: string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    label: '',
  });
</script>

<style module lang="scss">
  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .label {
    font-size: 14px;
    font-family: 'Press Start 2P';
    font-weight: 400;
    color: var(--retro-text);
  }
</style>
