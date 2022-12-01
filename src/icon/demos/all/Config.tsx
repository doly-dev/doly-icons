import { Button, Card, Col, Row } from 'antd';
import { BizForm, BizFormItemColor, BizFormItemNumber, ModalForm } from 'antd-more';
import * as React from 'react';
import { DefaultConfig } from './context';
import styles from './index.less';
import { resetScrollTop } from './utils';

const colSpan = {
  span: 24,
};

interface ConfigProps {
  value?: Partial<typeof DefaultConfig>;
  onChange?: (value: typeof DefaultConfig) => void;
}

const Config: React.FC<ConfigProps> = ({ value, onChange }) => {
  const [form] = BizForm.useForm();

  const handlePngBgColorTransparent = () => {
    form.setFieldsValue({ pngBackgroundColor: DefaultConfig.pngBackgroundColor });
  };

  const handlePngReset = () => {
    form.setFieldsValue(DefaultConfig);
  };

  return (
    <ModalForm
      trigger={<Button type="link">设置</Button>}
      title="设置"
      form={form}
      onFinish={onChange}
      requiredMark={false}
      size="middle"
      modalProps={{
        maskClosable: false,
      }}
      onVisibleChange={(visible) => {
        if (!visible) {
          resetScrollTop();
        } else {
          form.setFieldsValue(value);
        }
      }}
      className={styles.configModal}
    >
      <Card
        type="inner"
        title="复制/下载 PNG"
        bordered={false}
        extra={<a onClick={handlePngReset}>恢复默认</a>}
      >
        <Row gutter={16}>
          <Col {...colSpan}>
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
          </Col>
          {/* <Col {...colSpan}>
              <BizFormItemNumber
                label='图像质量'
                name='pngEncoderOptions'
                inputProps={{ min: 0, max: 1, step: 0.1, precision: 1 }}
                tooltip='图像质量 0-1 之间'
              />
            </Col> */}
          <Col {...colSpan}>
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
          </Col>
        </Row>
      </Card>
    </ModalForm>
  );
};

export default Config;
