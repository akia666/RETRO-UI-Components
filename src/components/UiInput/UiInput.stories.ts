import { Meta, StoryObj } from '@storybook/vue3';

import { UiInput } from '..';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    modelValue: '',
    placeholder: 'Введите текст..',
    isDisabled: false,
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: '<UiInput v-bind="args" />',
  }),
};