import "reflect-metadata";

import { definePageConfig } from "../../.ice";
import { ImageCanvas } from "../fabritor";
import '../index.css';
import { Provider } from "inversify-react";
import { Container } from "inversify";
import { ImageCanvasModel } from "../fabritor/image-canvas.model";

export const pageConfig = definePageConfig(() => ({
  title: 'fabritor, A creative editor based on fabricjs.'
}));

const container = new Container();
container
  .bind<ImageCanvasModel>("ImageCanvasModel")
  .to(ImageCanvasModel)
  .inSingletonScope();

export default function () {
  return <Provider container={container}>
    <ImageCanvas/>
  </Provider>;
}
