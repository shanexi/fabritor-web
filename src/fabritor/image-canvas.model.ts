import { action, makeObservable, observable } from "mobx";
import { type MenuProps } from "antd";
import { injectable, preDestroy } from "inversify";
import { Editor } from "../editor";
import mitt from "mitt";

@injectable()
export class ImageCanvasModel {
  emitter = mitt<{
    loadFromJSON: unknown;
  }>();

  @observable variables: MenuProps["items"] = [];
  private isEditorReadyPromiseResolve: ((value: unknown) => void) | undefined;
  private isEditorReadyPromise: Promise<unknown>;
  private editor: Editor;

  constructor() {
    makeObservable(this);
    this.isEditorReadyPromise = new Promise((resolve) => {
      this.isEditorReadyPromiseResolve = resolve;
    });
  }

  @preDestroy()
  public myPreDestroyMethod() {
    this.emitter.all.clear();
  }

  setEditor(editor: Editor) {
    this.editor = editor;
    this.isEditorReadyPromiseResolve("");
  }

  async canvas2Json(): Promise<unknown> {
    await this.isEditorReadyPromise;
    return this.editor.canvas2Json();
  }

  async loadFromJSON(json: unknown): Promise<void> {
    await this.isEditorReadyPromise;
    this.emitter.emit("loadFromJSON", json);
  }

  @action.bound
  setVariables(variables: any[]) {
    this.variables = transformVariables(variables);
  }

  getRefSelectDisplay(keyPath: string[]) {
    if(keyPath.length === 0) return undefined;
    const value = findLabelByValue(this.variables, keyPath[0]);
    const keyPath2 = keyPath.slice(0)
    keyPath2.splice(0, 1, value);
    return keyPath2.reverse().join('/')
  }
}

// todo: add Test
/*
[
    {
        "label": "current",
        "children": []
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
]
    
[
    {
        "label": "current",
        "key": "current",
        "type": "group",
        "children": []
    },
    {
        "label": "global",
        "key": "global",
        "type": "group",
        "children": [
            {
                "label": "Start-Context",
                "key": "{{}}",
                "children": [
                    {
                        "label": "config",
                        "key": "{{__context__key_1728467722718__}}"
                    }
                ]
            }
        ]
    }
]
*/
function transformVariables(source: any[]): MenuProps["items"] {
  return source.map((item) => ({
    label: item.label,
    key: item.children == null ? item.value : item.label,
    type: item.value == null ? "group" : undefined,
    children: item.children ? transformVariables(item.children) : undefined,
  }));
}

function findLabelByValue(
  variables: any,
  targetValue: string
): string | undefined {
  for (const item of variables) {
    if (item.key === targetValue && !item.children) {
      return item.label;
    }
    if (item.children) {
      const foundLabel = findLabelByValue(item.children, targetValue);
      if (foundLabel) {
        return foundLabel;
      }
    }
  }
  return undefined;
}
