import { Dropdown, Select } from "antd";
import React from "react";
import { MenuInfo } from "rc-menu/lib/interface";
import { useInjection } from "inversify-react";
import { ImageCanvasModel } from "../../../image-canvas.model";

interface RefSelectProps {
  objId: string
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export function RefSelect(props: RefSelectProps) {
  const model = useInjection(ImageCanvasModel)
  const keyPath = (typeof props.value === "string" && props.value.trim() !== '')
    ? props.value.split('/')
    : []
  console.log(props)
  return (
    <Dropdown menu={
      {
        onClick: (info: MenuInfo) => {
          props.onChange(info.keyPath.join('/'))
        },
        selectedKeys: keyPath,
        items: model.variables
      }
    }
              placement="bottomRight"
              overlayStyle={{
                zIndex: 100, // antd dropdown cascade bug, sub menu z-index = 100
              }}>
      <Select options={[]}
        // use Dropdown menus
              dropdownRender={(originNode) => null}
              dropdownStyle={{ display: 'none' }}
              value={keyPath.length === 0 ? null : keyPath.join('/')}
              placeholder="Please select variable"
              onClear={() => props.onChange(undefined)}
              allowClear/>
    </Dropdown>
  )
}
