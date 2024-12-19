import { createFImage } from "../../../../editor/objects/image";
import { useContext } from 'react';
import ImageSelector from "../../../components/ImageSelector";
import { GlobalStateContext } from "../../../../context";
import { IMAGE_PLACEHOLDER } from "../../../../utils/constants";
import { Button } from "antd";
import { ImageCanvasModel } from "../../../image-canvas.model";
import { useInjection } from "inversify-react";
import { Box } from "react-system";
import LocalImagePanel from '../../../components/LocalFileSelector';

export default function ImagePanel() {
  const model = useInjection<ImageCanvasModel>('ImageCanvasModel')
  const { editor } = useContext(GlobalStateContext);

  const addImage = async (url) => {
    await createFImage({
      imageSource: url,
      canvas: editor.canvas
    });
  }

  const addRefImage = async (url) => {
    await createFImage({
      imageSource: url,
      canvas: editor.canvas,
      hasRef: true
    });
    setTimeout(
      () => model.openRefSelect()
      , 300)
  }

  return (
    <div className="fabritor-panel-wrapper">
      <Box mb={2}>
        <ImageSelector onChange={addImage} />
      </Box>

      <ImageSelector title="Image Ref Box" onChange={
        addRefImage
      } />

      {/* <PresetImagePanel onChange={addImage}/> */}
    </div>
  )
}
