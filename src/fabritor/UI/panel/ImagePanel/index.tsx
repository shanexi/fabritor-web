import { createFImage } from "../../../../editor/objects/image";
import { useContext } from 'react';
import ImageSelector from "../../../components/ImageSelector";
import { GlobalStateContext } from "../../../../context";
import { IMAGE_PLACEHOLDER } from "../../../../utils/constants";
import { Button } from "antd";
import { ImageCanvasModel } from "../../../image-canvas.model";
import { useInjection } from "inversify-react";
import { Box } from "react-system";

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
  }

  return (
    <div className="fabritor-panel-wrapper">
      <Box mb={2}>
        <ImageSelector onChange={addImage}/>
      </Box>

      <Button
        size="large" block
        type="primary"
        onClick={() => {
          addRefImage?.(IMAGE_PLACEHOLDER)
          setTimeout(
            () => model.openRefSelect()
            , 300)
        }}
      >
        Image Ref Box
      </Button>
      {/* <PresetImagePanel onChange={addImage}/> */}
    </div>
  )
}
