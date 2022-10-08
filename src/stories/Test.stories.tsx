import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Test } from '@/components/test';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Test',
    component: Test,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Test>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Test> = () => <Test />;

export const Primary = Template.bind({});
