import { action, makeObservable, observable } from "mobx";
import { type MenuProps } from "antd";
import { injectable, preDestroy } from "inversify";
import { Editor } from "../editor";
import mitt from "mitt";

const WORKFLOW_RUNNER = 'Workflow Runner'

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
    const rawJson = this.editor.canvas2Json();
    // backup original text, assign ref to text
    rawJson.objects.forEach((object: any) => {
      if (object.ref) {
        object._text = object.text;
        object.text = object.ref
      }
    })
    return rawJson;
  }

  async loadFromJSON(json: any): Promise<void> {
    await this.isEditorReadyPromise;
    json.objects.forEach((object: any) => {
      if (object._text) {
        object.ref = object.text;
        object.text = object._text
      }
    })
    this.emitter.emit("loadFromJSON", json);
  }

  @action.bound
  setVariables(variables: any[]) {
    this.variables = transformVariables(variables);
  }

  getRefSelectDisplay(keyPath: string[]) {
    if (keyPath.length === 0) return undefined;
    const path = findPathByValue(this.variables, keyPath[0])
    path.shift(); // remove global or current
    return path.join('/')
  }

  specialProcessWorkflowRunnerOutput(keyPath: string[]) {
    keyPath = keyPath.slice(0)
    // special process workflow runner output
    if (keyPath[keyPath.length - 1] === WORKFLOW_RUNNER) {
      return keyPath[0] + '[0]'
    }
    return keyPath[0]
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

function findPathByValue(variables: any, targetValue: string) {
  for (const item of variables) {
    if (item.key === targetValue) {
      return [item.label];
    }
    if (item.children) {
      const foundPath = findPathByValue(item.children, targetValue);
      if (foundPath) {
        return [item.label, ...foundPath];
      }
    }
  }
  return null;
}
