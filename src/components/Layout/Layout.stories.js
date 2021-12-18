import { useArgs } from '@storybook/client-api';

import { Layout } from './';

export default {
  title: 'Layout/Layout',
  component: Layout,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return <Layout {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: <div style={{ border: '1px solid red', height: '500px' }}></div>,
};
