import { useArgs } from '@storybook/client-api';

import { Header } from '.';

export default {
  title: 'Header/Header',
  component: Header,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return <Header {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
