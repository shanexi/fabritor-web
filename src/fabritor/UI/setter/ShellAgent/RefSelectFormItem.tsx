import { Flex } from "react-system";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Dropdown, Form, Select } from "antd";
import React from "react";
import { MenuInfo } from "rc-menu/lib/interface";
import { useInjection } from "inversify-react";
import { ImageCanvasModel } from "../../../image-canvas.model";

export function RefSelectFormItem(props: {
  name: string;
  value: string;
  onChange: (value: string[], selectedOptions: unknown[]) => void;
}) {
  const model = useInjection(ImageCanvasModel)
  const [keyPath, setKeyPath] = React.useState<string[]>([]);
  return (
    <Form.Item
      name={props.name}
      label={<Flex><Square3Stack3DIcon style={{
        width: 18,
        marginRight: 2
      }}/>Ref</Flex>}
    >
      <Dropdown menu={
        {
          onClick: (info: MenuInfo) => {
            setKeyPath(info.keyPath)
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
                onClear={() => setKeyPath([])}
                allowClear/>
      </Dropdown>
    </Form.Item>
  )
}
