import { useArgs } from '@storybook/client-api';

import { Button } from './';

export default {
  title: 'Button/Button',
  component: Button,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  type: 'default',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  type: 'default',
  variant: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  type: 'default',
  variant: 'primary',
  size: 'small',
};
