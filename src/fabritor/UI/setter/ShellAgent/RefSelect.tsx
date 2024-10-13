import { Dropdown, Select, Tooltip } from "antd";
import React, { useRef } from "react";
import { MenuInfo } from "rc-menu/lib/interface";
import { useInjection } from "inversify-react";
import { ImageCanvasModel } from "../../../image-canvas.model";
import { toJS } from "mobx";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Flex } from "react-system";
import { observer } from "mobx-react-lite";
import { useClickAway } from "ahooks";

interface RefSelectProps {
  objId: string
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const RefHelp = 'Will be replaced in Chat'

export function RefLabel() {
  return (
    <Tooltip
      title="In edit status, the canvas show your uploaded image and edited text. If you click Run, these will be replaced with the referenced variables in Chat.">
      <Flex><Square3Stack3DIcon style={{
        width: 18,
        marginRight: 2
      }}/>Ref</Flex>
    </Tooltip>
  )
}

export const RefSelect = observer((props: RefSelectProps) => {
    const model = useInjection<ImageCanvasModel>('ImageCanvasModel')
    const keyPath = model.convertValueFieldToRef(props.value)
    const variables = toJS(model.variables)
    const ref = useRef(null);

    useClickAway(() => {
      if (model.isRefSelectOpen) {
        model.closeRefSelect();
      }
    }, ref);

    return (
      <Dropdown
        open={model.isRefSelectOpen}
        menu={
          {
            onClick: (info: MenuInfo) => {
              props.onChange(model.processWorkflowRunnerOutput(info.keyPath))
              model.closeRefSelect();
            },
            selectedKeys: keyPath,
            items: variables
          }
        }
        placement="bottomRight"
        overlayStyle={{
          // zIndex: 100, // antd dropdown cascade bug, sub menu z-index = 100
        }}>
        <div ref={ref} className='x-ref-select'>
          <Select
            onClick={() => model.toggleRefSelect()}
            options={[]}
            // use Dropdown menus
            dropdownRender={(originNode) => null}
            dropdownStyle={{ display: 'none' }}
            value={model.getRefSelectDisplay(keyPath)}
            placeholder="Please select variable"
            onClear={() => props.onChange(undefined)}
            allowClear/>
        </div>
      </Dropdown>
    )
  }
)
