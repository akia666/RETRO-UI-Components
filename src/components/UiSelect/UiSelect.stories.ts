import { Meta, StoryObj } from '@storybook/vue3';

import { UiSelect } from '..';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    modelValue: '',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false,
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    template: '<UiSelect v-bind="args" />',
  }),
};