import React, { useContext, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { Form, Input, Select } from 'antd';
import { FONT_PRESET_FAMILY_LIST_GOOGLE_FONT } from "../../../../utils/constants";
import { GlobalStateContext } from "../../../../context";
import FontStyleSetter from './FontStyleSetter';
import AlignSetter from './AlignSetter';
import ColorSetter from '../ColorSetter';
import { loadFont, loadPresetGoogleFonts, transformColors2Fill, transformFill2Colors } from "../../../../utils";
import { FunctionOutlined, RightOutlined } from '@ant-design/icons';
import SliderInputNumber from "../../../components/SliderInputNumber";
import FList from "../../../components/FList";
import MoreConfigWrapper from '../Form/MoreConfigWrapper';
import TextFx from './TextFx';
import { useTranslation } from "../../../../i18n/utils";
import { RefHelp, RefLabel, RefSelect } from "../ShellAgent/RefSelect";

const { Item: FormItem } = Form;

export default function TextSetter() {
  const {
    object,
    editor
  } = useContext(GlobalStateContext);
  const [form] = Form.useForm();
  const [openFx, setOpenFx] = useState(false);
  // const [hasRef, setHasRef] = useState(false);

  const { t } = useTranslation();

  const TEXT_ADVANCE_CONFIG = [
    {
      icon: <FunctionOutlined style={{ fontSize: 22 }}/>,
      label: t('setter.text.fx.title'),
      key: 'fx',
      onClick: () => {
        setOpenFx(true)
      }
    }
  ]

  const handleFontStyles = (styles) => {
    object.set({
      // @ts-expect-error TS2353
      fontWeight: styles?.bold ? 'bold' : 'normal',
      fontStyle: styles?.italic ? 'italic' : 'normal',
      underline: !!styles.underline,
      linethrough: !!styles.linethrough
    });
  }

  const handleFill = (_fill) => {
    let fill = transformColors2Fill(_fill);
    // text gradient nor support percentage https://github.com/fabricjs/fabric.js/issues/8168
    if (typeof fill !== 'string') {
      fill.gradientUnits = 'pixels';
      const { coords } = fill;
      fill.coords = {
        x1: coords.x1 === 1 ? object.width : 0,
        y1: coords.y1 === 1 ? object.height : 0,
        x2: coords.x2 === 1 ? object.width : 0,
        y2: coords.y2 === 1 ? object.height : 0,
        r1: 0,
        r2: object.width > object.height ? object.width / 2 : object.height
      }
    }
    if (typeof fill !== 'string') {
      fill = new fabric.Gradient(fill);
    }
    object.set({ fill });
  }

  const handleValuesChange = async (values) => {
    const keys = Object.keys(values);
    if (!keys?.length) return;

    for (let key of keys) {
      // if (key === 'ref') {
      //   setHasRef(values[key] != null);
      // }
      if (key === 'fontStyles') {
        handleFontStyles(values[key]);
      } else if (key === 'fontFamily') {
        try {
          await loadFont(values[key]);
        } finally {
          // @ts-expect-error TS2345
          object.set(key, values[key]);
        }
      } else if (key === 'fill') {
        handleFill(values[key]);
      } else {
        // @ts-expect-error TS2339
        const selectedText = object.getSelectedText();
        if (selectedText && key === 'fill') {
          // @ts-expect-error TS2339
          object.setSelectionStyles({ fill: values[key] });
        } else {
          // @ts-expect-error TS2345
          object.set('styles', {});
          // @ts-expect-error TS2345
          object.set(key, values[key]);
        }
      }

      if (key !== 'fontSize' && key !== 'lineHeight' && key !== 'charSpacing') {
        editor.fireCustomModifiedEvent();
      }
    }

    editor.canvas.requestRenderAll();
  }

  useEffect(() => {
    // // @ts-expect-error TS2339
    // setHasRef(object.ref != null);

    form.setFieldsValue({
      // @ts-expect-error TS2339
      ref: object.ref,
      // @ts-expect-error TS2339
      text: object.text,
      // @ts-expect-error TS2339
      fontFamily: object.fontFamily,
      // @ts-expect-error TS2339
      fontSize: object.fontSize,
      fill: transformFill2Colors(object.fill),
      // @ts-expect-error TS2339
      textAlign: object.textAlign,
      // @ts-expect-error TS2339
      lineHeight: object.lineHeight,
      // @ts-expect-error TS2339
      charSpacing: object.charSpacing,
      fontStyles: {
        // @ts-expect-error TS2339
        bold: object.fontWeight === 'bold',
        // @ts-expect-error TS2339
        italic: object.fontStyle === 'italic',
        // @ts-expect-error TS2339
        underline: object.underline,
        // @ts-expect-error TS2339
        linethrough: object.linethrough
      }
    });
  }, [object]);
  return (
    <>
      <Form
        form={form}
        onValuesChange={handleValuesChange}
        colon={false}
      >
        {
          // @ts-expect-error TS2339
          object.ref !== undefined ? <>
            <Form.Item
              name="ref"
              help={RefHelp}
              label={<RefLabel/>}
            >
              <RefSelect id='ref'
                         objId={object['id']}
                         value={form.getFieldValue('ref')}
                         onChange={(val: string) => {
                           // Not familiar with ant design form
                           // explicitly set id/value/onChange
                           form.setFieldValue('ref', val)
                           // need to call object.set here other than in handleValuesChange
                           // @ts-expect-error TS2345
                           object.set('ref', val);
                         }}/>
            </Form.Item>
            <Form.Item
              label="Placeholder"
              name="text">
              <Input.TextArea placeholder='ref placeholder' onChange={e => {
                form.setFieldValue('text', e.target.value)
                // @ts-expect-error TS2345
                object.set('text', e.target.value);
              }}></Input.TextArea>
            </Form.Item>
          </> : null
        }
        <FormItem
          name="fontFamily"
          label={t('setter.text.font_family')}
        >
          <Select
            options={FONT_PRESET_FAMILY_LIST_GOOGLE_FONT}
            onDropdownVisibleChange={open => {
              if (open) {
                void loadPresetGoogleFonts();
              }
            }}
          />
        </FormItem>
        <FormItem
          name="fontSize"
          label={t('setter.text.font_size')}
        >
          <SliderInputNumber max={400} onChangeComplete={() => {
            editor.fireCustomModifiedEvent()
          }}/>
        </FormItem>
        <FormItem
          name="fill"
          label={t('setter.text.fill')}
        >
          <ColorSetter type="fontColor" defaultColor="#000000"/>
        </FormItem>
        <FormItem
          name="textAlign"
          label={t('setter.text.text_align')}
        >
          <AlignSetter/>
        </FormItem>
        <FormItem
          name="fontStyles"
          label={t('setter.text.font_styles')}
        >
          <FontStyleSetter/>
        </FormItem>
        <FormItem
          name="charSpacing"
          label={t('setter.text.char_spacing')}
        >
          <SliderInputNumber
            min={-200}
            max={800}
            onChangeComplete={() => {
              editor.fireCustomModifiedEvent()
            }}
          />
        </FormItem>
        <FormItem
          name="lineHeight"
          label={t('setter.text.line_height')}
        >
          <SliderInputNumber
            min={0.5}
            max={2.5}
            step={0.01}
            onChangeComplete={() => {
              editor.fireCustomModifiedEvent()
            }}
          />
        </FormItem>
      </Form>
      <FList
        dataSource={TEXT_ADVANCE_CONFIG}
        renderItemChildren={(item) => (
          <>
            {item.icon}
            <span style={{
              fontSize: 16,
              fontWeight: 'bold',
              margin: '0 6px 0 10px'
            }}>
              {item.label}
            </span>
            <RightOutlined/>
          </>
        )}
      />
      <MoreConfigWrapper
        open={openFx}
        setOpen={setOpenFx}
        title={`${t('panel.text.title')} ${t('setter.text.fx.title')}`}
      >
        <TextFx/>
      </MoreConfigWrapper>
    </>
  )
}
