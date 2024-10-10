import "../index.css";
import "reflect-metadata";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Container, interfaces } from "inversify";
import { Provider } from "inversify-react";
import { ImageCanvasModel } from "../fabritor/image-canvas.model";
import { ImageCanvas } from "../fabritor";

const container = new Container();
container
  .bind<ImageCanvasModel>("ImageCanvasModel")
  .to(ImageCanvasModel)
  .inSingletonScope();
const model = container.get<ImageCanvasModel>("ImageCanvasModel");
model.setVariables([
  {
    label: "current",
    children: [],
  },
  {
    label: "global",
    children: [
      {
        label: "Start-Context",
        value: "{{}}",
        children: [
          {
            label: "config",
            value: "{{__context__key_1728467722718__}}",
          },
        ],
      },
    ],
  },
]);

const withContainer = (container: interfaces.Container) => (Story: StoryFn) =>
  (
    <Provider container={container}>
      <Story />
    </Provider>
  );

const meta = {
  title: "Canvas",
  component: ImageCanvas,
  decorators: [withContainer(container)],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ImageCanvas>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Canvas",
  },
};
