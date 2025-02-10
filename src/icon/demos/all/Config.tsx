import { App, Button, Card, Col, Row } from 'antd';
import {
  BizForm,
  BizFormItemColor,
  BizFormItemNumber,
  BizFormItemSelect,
  DrawerForm,
} from 'antd-more';
import React from 'react';
import { ClickIconActionOptions, DefaultConfig } from './context';
import styles from './index.module.less';
import { resetScrollTop } from './utils';

const colSpan = {
  span: 24,
};

interface ConfigProps {
  value?: Partial<typeof DefaultConfig>;
  onChange?: (value: typeof DefaultConfig) => void;
}

const Config: React.FC<ConfigProps> = ({ value, onChange }) => {
  const { message } = App.useApp();
  const [form] = BizForm.useForm();

  const handlePngBgColorTransparent = () => {
    form.setFieldsValue({ pngBackgroundColor: DefaultConfig.pngBackgroundColor });
  };

  const handlePngReset = () => {
    form.setFieldsValue(DefaultConfig);
  };

  return (
    <DrawerForm
      trigger={<Button type="link">设置</Button>}
      title="设置"
      form={form}
      onFinish={(values) => {
        message.success('设置成功');
        onChange?.(values);
      }}
      requiredMark={false}
      size="middle"
      // drawerProps={{
      //   maskClosable: false,
      // }}
      onOpenChange={(visible) => {
        if (!visible) {
          resetScrollTop();
        } else {
          form.setFieldsValue(value);
        }
      }}
      drawerProps={{
        className: styles.drawerWrapper,
      }}
      className={styles.configModal}
      labelWidth={98}
    >
      <Row gutter={[0, 16]}>
        <Col {...colSpan}>
          <Card
            type="inner"
            title="复制/下载 PNG"
            size="small"
            extra={<a onClick={handlePngReset}>恢复默认</a>}
          >
            <BizFormItemColor
              label="背景颜色"
              name="pngBackgroundColor"
              colorMode="rgb"
              contentAfter={
                <a style={{ fontSize: 12 }} onClick={handlePngBgColorTransparent}>
                  设为透明
                </a>
              }
            />
            {/* <BizFormItemNumber
                label='图像质量'
                name='pngEncoderOptions'
                inputProps={{ min: 0, max: 1, step: 0.1, precision: 1 }}
                tooltip='图像质量 0-1 之间'
              /> */}
            <BizFormItemNumber
              label="图像尺寸"
              name="pngSize"
              inputProps={{ min: 16, step: 2, precision: 0 }}
              tooltip="宽高必须为2的倍数，且不能小于16"
              required
              extendRules={[
                {
                  validator(rules, val) {
                    if (val % 2 !== 0) {
                      return Promise.reject('宽高必须为2的倍数');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            />
          </Card>
        </Col>
        <Col {...colSpan}>
          <Card type="inner" title="更多操作" size="small">
            <BizFormItemSelect
              label="点击图标操作"
              name="clickIconAction"
              options={ClickIconActionOptions}
            />
          </Card>
        </Col>
      </Row>
    </DrawerForm>
  );
};

export default Config;
