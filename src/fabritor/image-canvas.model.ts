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
    const json = convertExportedJson(rawJson);
    return json;
  }

  async loadFromJSON(json: any): Promise<void> {
    await this.isEditorReadyPromise;
    json.objects.forEach((object: any) => {
      if (object.type === 'f-text' && object._text) {
        object.ref = object.text;
        object.text = object._text
      }
      if (object.type === 'f-image') {
        object.objects.forEach(o => {
          if (o.type === 'image') {
            if (o._src) {
              object.ref = o.src;  // Notice object.ref is not same level as o.src
              o.src = o._src;
            }
            // fallback
            if (o.src.indexOf('{{') > -1 && o.src.indexOf('}}') > -1) {
              o.src = 'https://framerusercontent.com/images/S8LzTBsTv7aFWaPYWqvxt86vOHk.png'
              o.crossOrigin = 'anonymous';
            }
          }
        })
      }
    })
    this.emitter.emit("loadFromJSON", json);
  }

  @action.bound
  setVariables(variables: any[]) {
    this.variables = transformVariables(variables);
  }

  convertValueFieldToRef(value: string): string[] {
    let keyPath = []
    if (value == null) {
      keyPath = []
    } else if (typeof value === 'string' && value.endsWith('[0]')) {
      keyPath = [value.replace('[0]', '')]
    } else {
      keyPath = [value]
    }
    return keyPath
  }

  getRefSelectDisplay(keyPath: string[]) {
    if (keyPath.length === 0) return undefined;
    if (this.variables.length === 0) return undefined;
    const path = findPathByValue(this.variables, keyPath[0])
    if (!Array.isArray(path) || path.length === 0) return undefined;

    path.shift(); // remove global or current
    return path.join('/')
  }

  processWorkflowRunnerOutput(keyPath: string[]) {
    keyPath = keyPath.slice(0)
    // special process workflow runner output
    if (keyPath.indexOf(WORKFLOW_RUNNER) > -1) {
      return keyPath[0] + '[0]'
    }
    return keyPath[0]
  }
}

// todo: add Test
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

// backup original text, assign ref to text
export function convertExportedJson(rawJson: any) {
  const json = JSON.parse(JSON.stringify(rawJson));
  json.objects.forEach((object: any) => {
    if (object.ref) { // Notice object.ref is not same level as o.src
      if (object.type === 'f-image') {
        object.objects.forEach(o => {
          if (o.type === 'image') {
            o._src = o.src;
            o.src = object.ref; // Notice object.ref is not same level as o.src
          }
        })
      }

      if (object.type === 'f-text') {
        object._text = object.text;
        object.text = object.ref
      }
    }
  })
  return json
}
