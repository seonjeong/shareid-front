import { useArgs } from '@storybook/client-api';

import { UIInput } from '.';

export default {
  title: 'Form/UIInput',
  component: UIInput,
};

const Template = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const onChange = (value) => {
    updateArgs({ value });
  };
  return <UIInput {...args} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  size: 'small',
};

export const Basic = Template.bind({});
Basic.args = {
  varient: 'basic',
};

export const BasicSmall = Template.bind({});
BasicSmall.args = {
  varient: 'basic',
  size: 'small',
};
