import { makeObservable, observable } from "mobx";

export class ImageCanvasModel {
  @observable message = 'hi'

  constructor() {
    makeObservable(this)
  }
}
