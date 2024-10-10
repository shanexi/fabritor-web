import { makeObservable, observable } from "mobx";
import { type MenuProps } from "antd";
import { injectable } from "inversify";

@injectable()
export class ImageCanvasModel {
  @observable variables: MenuProps['items'] = [
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
              key: 'Image Canvas',
              label: 'Image Canvas',
              children: [
                {
                  key: 'url',
                  label: 'url'
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

  constructor() {
    makeObservable(this)
  }
}
