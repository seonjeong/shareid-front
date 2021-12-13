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
  variant: 'primary',
};
