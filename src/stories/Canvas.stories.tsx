import "../index.css";
import "reflect-metadata";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Container, interfaces } from "inversify";
import { Provider } from "inversify-react";
import { ImageCanvasModel } from "../fabritor/image-canvas.model";
import { ImageCanvas } from "../fabritor";
import { toJS } from "mobx";

(window as any).toJS = toJS;

/*
      [
        {
          key: 'current',
          type: 'group',
          label: 'current',
          children: [
            {
              key: 'Task',
              label: 'Task',
              children: [
                {
                  key: 'Workflow meme',
                  label: 'Workflow meme',
                  children: [
                    {
                      key: 'Text',
                      label: 'Text'
                    }
                  ]
                }
              ]
            },
          ],
        },
        {
          key: 'global',
          type: 'group',
          label: 'global',
          children: [
            {
              key: 'Start Context',
              label: 'Start Context',
              children: []
            },
          ],
        },
    ];
    */
const container = new Container();
container
  .bind<ImageCanvasModel>("ImageCanvasModel")
  .to(ImageCanvasModel)
  .inSingletonScope();
const model = container.get<ImageCanvasModel>("ImageCanvasModel");
model.setVariables([
  {
    "label": "current",
    "children": [
      {
        "label": "Input",
        "value": "{{}}",
        "children": [
          {
            "label": "hello",
            "value": "{{key_1728547316233}}"
          }
        ]
      },
      {
        "label": "Task",
        "value": "{{}}",
        "children": [
          {
            "label": "GPT",
            "value": "{{key_1728607709930}}",
            "children": [
              {
                "label": "reply",
                "value": "{{key_1728607709930.reply}}"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "label": "global",
    "children": [
      {
        "label": "Start-Context",
        "value": "{{}}",
        "children": [
          {
            "label": "config",
            "value": "{{__context__key_1728467722718__}}"
          }
        ]
      }
    ]
  }
]);

const withContainer = (container: interfaces.Container) => (Story: StoryFn) =>
  (
    <Provider container={container}>
      <Story/>
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
