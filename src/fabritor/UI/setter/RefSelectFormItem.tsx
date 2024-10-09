import { Flex } from "react-system";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Form, Select } from "antd";
import React from "react";

export function RefSelectFormItem(props: {
  name: string;
}) {
  return (
    <Form.Item
      name={props.name}
      label={<Flex><Square3Stack3DIcon style={{
        width: 18,
        marginRight: 2
      }}/>Ref</Flex>}
    >
      <Select options={[]}/>
    </Form.Item>
  )
}
