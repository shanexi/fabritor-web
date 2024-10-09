import type { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';
import { ExportOutlined, FileOutlined } from '@ant-design/icons';
import { base64ToBlob, downloadFile } from "../../../../utils";
import { useContext, useRef } from 'react';
import { GlobalStateContext } from "../../../../context";
import LocalFileSelector from "../../../components/LocalFileSelector";
import { CenterV } from "../../../components/Center";
import { SETTER_WIDTH } from "../../../../config";
import { Trans, useTranslation } from "../../../../i18n/utils";

const i18nKeySuffix = 'header.export';

const items: MenuProps['items'] =
  // ['json', 'clipboard']
  ['jpg', 'png', 'svg', 'json', 'divider', 'clipboard']
    .map(
      item => item === 'divider' ? ({ type: 'divider' }) : ({
        key: item,
        label: <Trans i18nKey={`${i18nKeySuffix}.${item}`}/>
      })
    )

export default function ExportModify() {
  const {
    editor,
    setReady,
    setActiveObject
  } = useContext(GlobalStateContext);
  const localFileSelectorRef = useRef<any>();
  const { t } = useTranslation();

  const selectJsonFile = () => {
    localFileSelectorRef.current?.start?.();
  }

  const handleFileChange = (file) => {
    setReady(false);
    const reader = new FileReader();
    reader.onload = (async (evt) => {
      const json = evt.target?.result as string;
      if (json) {
        await editor.loadFromJSON(json, true);
        editor.fhistory.reset();
        setReady(true);
        setActiveObject(null);
        editor.fireCustomModifiedEvent();
      }
    });
    reader.readAsText(file);
  }

  const copyImage = async () => {
    try {
      const png = editor.export2Img({ format: 'png' });
      const blob = await base64ToBlob(png);
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob
        })
      ]);
      message.success(t(`${i18nKeySuffix}.copy_success`));
    } catch (e) {
      message.error(t(`${i18nKeySuffix}.copy_fail`));
    }
  }

  const handleClick = ({ key }) => {
    const { sketch } = editor;
    // @ts-ignore
    const name = sketch.fabritor_desc;
    switch (key) {
      case 'json':
        const json = editor.canvas2Json();
        downloadFile(`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(json, null, 2)
        )}`, 'json', name);
        break;
      case 'clipboard':
        copyImage();
        break;
      default:
        break;
    }
  }
  return (
    <CenterV
      justify="flex-end"
      gap={16}
      style={{
        width: SETTER_WIDTH,
        paddingRight: 16
      }}
    >
      <FileOutlined style={{ fontSize: 18 }} onClick={selectJsonFile}/>
      <Dropdown
        menu={{
          items,
          onClick: handleClick
        }}
        arrow={{ pointAtCenter: true }}
        placement="bottom"
      >
        <ExportOutlined style={{ fontSize: 18 }}/>
      </Dropdown>
      <LocalFileSelector accept="application/json" ref={localFileSelectorRef} onChange={handleFileChange}/>
    </CenterV>
  )
}