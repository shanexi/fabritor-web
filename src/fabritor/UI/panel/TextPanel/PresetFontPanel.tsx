import { Flex, Card } from 'antd';
import Title from "../../../components/Title";
import { Trans, useTranslation, translate } from "../../../../i18n/utils";

const PRESET_FONT_LIST = [
  {
    label: <div style={{ fontSize: 30, fontFamily: 'Roboto', fontWeight: 'bold' }}><Trans i18nKey="panel.text.add_title" /></div>,
    key: 'title',
    config: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 120,
      text: () => translate('panel.text.add_title'),
      top: 100
    }
  },
  {
    label: <div style={{ fontSize: 24, fontFamily: 'Open Sans' }}><Trans i18nKey="panel.text.add_subtitle" /></div>,
    key: 'sub-title',
    config: {
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: 100,
      text: () => translate('panel.text.add_subtitle'),
      top: 400
    }
  },
  {
    label: <div style={{ fontSize: 16, fontFamily: 'Source Sans Pro' }}><Trans i18nKey="panel.text.add_body_text" /></div>,
    key: 'content',
    config: {
      fontFamily: 'Source Sans Pro',
      fontSize: 80,
      text: () => translate('panel.text.add_body_text'),
    }
  },
  {
    label: <div style={{ fontSize: 26, fontFamily: 'Popings', color: '#ffffff' , WebkitTextStroke: '1px rgb(255, 87, 87)' }}><Trans i18nKey="panel.text.add_text_border" /></div>,
    key: 'content',
    config: {
      fontFamily: 'Popings',
      fontSize: 90,
      text: () => translate('panel.text.add_text_border'),
      fill: '#ffffff',
      stroke: '#ff5757',
      strokeWidth: 10
    }
  }
]

export default function PresetFontPanel (props) {
  const { addTextBox } = props;
  const { t } = useTranslation();

  const handleClick = (item) => {
    addTextBox?.(item.config);
  }

  return (
    <Flex vertical gap={8} style={{ marginTop: 16 }}>
      <Title>{t('panel.text.presets')}</Title>
      {
        PRESET_FONT_LIST.map(item => (
          <Card
            key={item.key}
            hoverable
            onClick={() => { handleClick(item) }}
            bodyStyle={{
              padding: '12px 30px',
              userSelect: 'none'
            }}
          >
            {item.label}
          </Card>
        ))
      }
    </Flex>
  );
}
