import { Flex } from 'antd';
import LocalImagePanel from './LocalImageSelector';
import RemoteImagePanel from './RemoteImageSelector';

export default function ImageSelector (props) {
  const { onChange, ...rest } = props;

  return (
    <LocalImagePanel {...rest} onChange={onChange} />
  )
  // return (
  //   <Flex gap={10} justify="space-around">
  //     <LocalImagePanel {...rest} onChange={onChange} />
  //     {/* <RemoteImagePanel {...rest} onChange={onChange} /> */}
  //   </Flex>
  // )
}
