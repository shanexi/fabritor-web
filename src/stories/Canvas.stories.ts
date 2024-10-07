import '../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import Fabritor from "../fabritor";

const meta = {
    title: 'Canvas',
    component: Fabritor,
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof Fabritor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Canvas',
    },
};
