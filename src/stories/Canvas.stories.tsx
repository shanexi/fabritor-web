import '../index.css';
import 'reflect-metadata';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Container, interfaces } from 'inversify';
import { Provider } from 'inversify-react';
import { ImageCanvasModel } from "../fabritor/image-canvas.model";
import Fabritor from "../fabritor";

const container = new Container();
container.bind(ImageCanvasModel).toSelf().inSingletonScope();

const withContainer =
  (container: interfaces.Container) => (Story: StoryFn) => (
    <Provider container={container}>
      <Story/>
    </Provider>
  );

const meta = {
  title: 'Canvas',
  component: Fabritor,
  decorators: [withContainer(container)],
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
