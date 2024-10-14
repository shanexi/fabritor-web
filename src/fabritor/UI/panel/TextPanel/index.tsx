import { Button } from 'antd';
import PresetFontPanel from './PresetFontPanel';
import { createTextbox } from "../../../../editor/objects/textbox";
import { useContext } from 'react';
import { GlobalStateContext } from "../../../../context";
import { useTranslation } from "../../../../i18n/utils";
import { Box } from "react-system";
import { useInjection } from "inversify-react";
import { ImageCanvasModel } from "../../../image-canvas.model";

export default function TextPanel() {
  const model = useInjection<ImageCanvasModel>('ImageCanvasModel')
  const { editor } = useContext(GlobalStateContext);
  const { t } = useTranslation();

  const handleAddText = async (options) => {
    await createTextbox({
      ...options,
      canvas: editor.canvas
    });
  }

  return (
    <div className="fabritor-panel-wrapper">
      <Box mb={2}>
        <Button type="primary" block onClick={() => {
          handleAddText({})
        }} size="large">
          {t('panel.text.add')}
        </Button>
      </Box>

      <Button type="primary" block onClick={() => {
        handleAddText({
          ref: null,
          fontFamily: 'Roboto',
          fontSize: 50,
          text: 'Text ref placeholder',
          width: 600,
          opacity: 0.5,
          color: "#6D7175",
          top: 400
        })
        setTimeout(
          () => model.openRefSelect()
          , 300)
      }} size="large">
        Text Ref Box
      </Button>
      <PresetFontPanel addTextBox={handleAddText}/>
    </div>
  )
}
