<template>
  <button
    :class="$style.button"
    :data-layout="props.layout"
    :disabled="props.isDisabled"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px 28px;
  font-size: 1rem;
  line-height: 1.4;
  font-family: 'base', monospace;
  font-weight: 400;
  color: var(--retro-text);
  background-color: var(--retro-green);
  border: 2px solid var(--retro-border);
  border-radius: 6px;
  box-shadow: 0 3px 0 var(--retro-shadow);
  transition: all 0.1s ease-in-out;
  user-select: none;

  &:hover {
    background-color: var(--retro-green-dark);
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 1px 0 var(--retro-shadow);
    transform: translate(0, 2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &[data-layout='secondary'] {
    background-color: var(--retro-bg-secondary);
    border: 2px solid var(--retro-border);
    color: var(--retro-text);
    box-shadow: 0 2px 0 var(--retro-shadow);

    &:hover {
      background-color: var(--retro-bg-secondary-hover);
    }

    &:active {
      transform: translate(0, 2px);
      box-shadow: 0 1px 0 var(--retro-shadow);
    }
  }
}
</style>
