import { Meta, StoryObj } from '@storybook/vue3';

import { UiField, UiInput, UiSelect } from '..';

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'Поле ввода',
  },
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => ({ args }),
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="Введите текст.." />
      </UiField>
    `,
  }),
};

export const WithSelect: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup: () => ({ args }),
    template: `
      <UiField v-bind="args">
        <UiSelect :options="['Опция 1', 'Опция 2', 'Опция 3']" />
      </UiField>
    `,
  }),
};
