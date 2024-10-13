import { Badge, Card, Flex, Image } from 'antd';
import Title from "../../../components/Title";
import { IMAGE_PLACEHOLDER } from "../../../../utils/constants";
import { useInjection } from "inversify-react";
import { ImageCanvasModel } from "../../../image-canvas.model";


export function PresetImagePanel(props) {
  const model = useInjection<ImageCanvasModel>('ImageCanvasModel')
  const { onChange } = props;
  return (
    <Flex vertical gap={8} style={{ marginTop: 16 }}>
      <Title>Presets</Title>
      <Badge.Ribbon text="Ref" color="red">
        <Card
          hoverable
          onClick={() => {
            onChange?.(IMAGE_PLACEHOLDER)
            setTimeout(
              () => model.openRefSelect()
              , 300)
          }}
          bodyStyle={{
            padding: '12px 30px',
            userSelect: 'none'
          }}
        >
          <Image
            preview={false}
            src={IMAGE_PLACEHOLDER}/>
        </Card>
      </Badge.Ribbon>
    </Flex>
  );
}
