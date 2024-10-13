import { Popover, Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import ImageSelector from "../../../components/ImageSelector";
import { useTranslation } from "../../../../i18n/utils";

export default function ReplaceSetter (props) {
  const { t } = useTranslation();
  const { onChange } = props;

  return (
    <ImageSelector size="middle" onChange={onChange} title={t('setter.image.replace')} />
  );

  // return (
  //   <Popover
  //     content={
  //       <ImageSelector size="middle" type="default" onChange={onChange} />
  //     }
  //     placement="top"
  //     trigger="click"
  //   >
  //     <Button type="primary" block icon={<FileImageOutlined />}>{t('setter.image.replace')}</Button>
  //   </Popover>
  // );
}
