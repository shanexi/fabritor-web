import { makeObservable, observable } from "mobx";
import { type MenuProps } from "antd";
import { injectable, preDestroy } from "inversify";
import { Editor } from "../editor";
import mitt from 'mitt';

const VARIABLES = [
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
]

@injectable()
export class ImageCanvasModel {
  emitter = mitt<{
    'loadFromJSON': unknown;
  }>();

  @observable variables: MenuProps['items'] = VARIABLES;
  private isEditorReadyPromiseResolve: ((value: unknown) => void) | undefined;
  private isEditorReadyPromise: Promise<unknown>;
  private editor: Editor;

  constructor() {
    makeObservable(this)
    this.isEditorReadyPromise = new Promise(resolve => {
      this.isEditorReadyPromiseResolve = resolve;
    });
  }

  @preDestroy()
  public myPreDestroyMethod() {
    this.emitter.all.clear();
  }

  setEditor(editor: Editor) {
    this.editor = editor;
    this.isEditorReadyPromiseResolve('');
  }

  async canvas2Json(): Promise<unknown> {
    await this.isEditorReadyPromise
    return this.editor.canvas2Json()
  }

  async loadFromJSON(json: unknown): Promise<void> {
    await this.isEditorReadyPromise
    this.emitter.emit('loadFromJSON', json);
  }
}
