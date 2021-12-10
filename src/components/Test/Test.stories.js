import { useArgs } from '@storybook/client-api';

import { Test } from '.';

export default {
  title: 'Test/Test',
  component: Test,
  // argTypes: { onClick: { action: 'clicked' } },
  // parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const onClick = (test) => {
    updateArgs({ test: test + 1 });
  };
  return <Test {...args} onClick={onClick} />;
};

export const Default = Template.bind({});
Default.args = {
  test: 0,
};
