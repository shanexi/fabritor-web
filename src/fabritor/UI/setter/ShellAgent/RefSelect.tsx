import { Dropdown, Select, Tooltip } from "antd";
import React from "react";
import { MenuInfo } from "rc-menu/lib/interface";
import { useInjection } from "inversify-react";
import { ImageCanvasModel } from "../../../image-canvas.model";
import { toJS } from "mobx";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Flex } from "react-system";

interface RefSelectProps {
  objId: string
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const RefHelp = 'Will be replaced in runtime'

export function RefLabel() {
  return (
    <Tooltip
      title="In edit status, the canvas show your uploaded image and edited text. If you click Run, these will be replaced with the referenced variables">
      <Flex><Square3Stack3DIcon style={{
        width: 18,
        marginRight: 2
      }}/>Ref</Flex>
    </Tooltip>
  )
}

export function RefSelect(props: RefSelectProps) {
  const model = useInjection<ImageCanvasModel>('ImageCanvasModel')
  let keyPath = []
  if (props.value == null) {
    keyPath = []
  } else if (typeof props.value === 'string' && props.value.endsWith('[0]')) {
    keyPath = [props.value.replace('[0]', '')]
  } else {
    keyPath = [keyPath]
  }
  const variables = toJS(model.variables)
  return (
    <Dropdown menu={
      {
        onClick: (info: MenuInfo) => {
          props.onChange(model.specialProcessWorkflowRunnerOutput(info.keyPath))
        },
        selectedKeys: keyPath,
        items: variables
      }
    }
              placement="bottomRight"
              overlayStyle={{
                // zIndex: 100, // antd dropdown cascade bug, sub menu z-index = 100
              }}>
      <Select options={[]}
        // use Dropdown menus
              dropdownRender={(originNode) => null}
              dropdownStyle={{ display: 'none' }}
              value={model.getRefSelectDisplay(keyPath)}
              placeholder="Please select variable"
              onClear={() => props.onChange(undefined)}
              allowClear/>
    </Dropdown>
  )
}