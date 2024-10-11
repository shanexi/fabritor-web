import { fabric } from 'fabric';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { FunctionOutlined, RightOutlined } from '@ant-design/icons';
import ReplaceSetter from './ReplaceSetter';
import { GlobalStateContext } from "../../../../context";
import BorderSetter from './BorderSetter';
import { getObjectBorderType, getStrokeDashArray } from '../BorderSetter'
import ClipSetter from './Clip';
import MoreConfigWrapper from '../Form/MoreConfigWrapper';
import ImageFx from './ImageFx';
import { useTranslation } from "../../../../i18n/utils";
import { RefHelp, RefLabel, RefSelect } from "../ShellAgent/RefSelect";
import FList from "../../../components/FList";

const { Item: FormItem } = Form;

export default function ImageSetter() {
  const {
    object,
    editor
  } = useContext(GlobalStateContext);
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [openFx, setOpenFx] = useState(false);

  const IMAGE_ADVANCE_CONFIG = [
    {
      icon: <FunctionOutlined style={{ fontSize: 22 }}/>,
      label: t('setter.image.filter'),
      key: 'fx',
      onClick: () => {
        setOpenFx(true)
      }
    }
  ];

  const handleImageReplace = (base64) => {
    if (base64) {
      (object as fabric.Image).setSrc(base64, () => {
        editor.canvas.requestRenderAll();
        editor.fireCustomModifiedEvent();
      });
    }
  }

  const handleBorder = (border) => {
    const {
      type,
      stroke = '#000000',
      strokeWidth,
      borderRadius
    } = border || {};
    if (type === 'none') {
      // @ts-expect-error TS2339
      object.setBorder({
        stroke: null,
        borderRadius
      });
    } else {
      // @ts-expect-error TS2339
      object.setBorder({
        stroke,
        strokeWidth,
        borderRadius,
        strokeDashArray: getStrokeDashArray(border)
      });
    }

    editor.canvas.requestRenderAll();
  }

  const handleValuesChange = (values) => {
    if (values.img) {
      handleImageReplace(values.img);
    }
    if (values.flip) {
      object.set(values.flip, !object[values.flip]);
      editor.canvas.requestRenderAll();
      editor.fireCustomModifiedEvent();
    }
    if (values.border) {
      handleBorder(values.border);
    }
  }

  useEffect(() => {
    if (object) {
      // @ts-expect-error TS2339
      const border = object.getBorder();
      form.setFieldsValue({
        border: {
          type: getObjectBorderType(border),
          ...border,
          stroke: border.stroke || '#000000'
        },
        opacity: object.opacity,
        // @ts-expect-error TS2339
        ref: object.ref,
      });
    }
  }, [object]);

  return (
    <>
      <Form
        form={form}
        onValuesChange={handleValuesChange}
        colon={false}
      >
        <Form.Item
          name="ref"
          help={RefHelp}
          label={<RefLabel/>}
        >
          <RefSelect id='ref'
                     objId={object['id']}
                     value={form.getFieldValue('ref')}
                     onChange={(val: string) => {
                       form.setFieldValue('ref', val)
                       // @ts-expect-error TS2345
                       object.set('ref', val);
                     }}/>
        </Form.Item>
        <FormItem name="img">
          <ReplaceSetter/>
        </FormItem>
        <Row gutter={8}>
          <Col span={12}>
            <FormItem>
              <ClipSetter object={object}/>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem name="border">
              <BorderSetter/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <FList
        dataSource={IMAGE_ADVANCE_CONFIG}
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
        title={t('setter.image.filter')}
      >
        <ImageFx/>
      </MoreConfigWrapper>
    </>
  )
}
