import { useArgs } from '@storybook/client-api';

import { UISelect } from '.';

export default {
  title: 'Form/UISelect',
  component: UISelect,
  // argTypes: { onClick: { action: 'clicked' } },
  // parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const onChange = (value) => {
    updateArgs({ value });
  };
  return <UISelect {...args} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  options: [
    {
      text: 'zero',
      value: 0,
    },
    {
      text: 'one',
      value: 1,
    },
  ],
};
