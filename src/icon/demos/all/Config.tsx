import * as React from 'react';
import { Button, Row, Col, Card } from 'antd';
import { BizForm } from 'antd-more';
import { DefaultConfig } from './context';
import { resetScrollTop } from './utils';

const { ModalForm, ItemColor, ItemNumber } = BizForm;

const colSpan = {
  span: 24,
};

interface ConfigProps {
  value?: Partial<typeof DefaultConfig>;
  onChange?: (value: typeof DefaultConfig) => void;
}

const Config: React.FC<ConfigProps> = ({ value, onChange }) => {
  const [form] = BizForm.useForm();
  const [isTransparent, setIsTransparent] = React.useState(
    value?.pngBackgroundColor === DefaultConfig.pngBackgroundColor,
  );

  const handlePngBgColorTransparent = React.useCallback(() => {
    const fieldsValue = form.getFieldsValue();
    form.setFieldsValue({ ...fieldsValue, pngBackgroundColor: DefaultConfig.pngBackgroundColor });
    setIsTransparent(true);
  }, [form]);

  const handlePngReset = React.useCallback(() => {
    form.setFieldsValue(DefaultConfig);
    setIsTransparent(true);
  }, [form]);

  return (
    <ModalForm
      initialValues={value}
      trigger={<Button type="link">设置</Button>}
      title="设置"
      form={form}
      modalProps={{
        maskClosable: false,
        destroyOnClose: true,
      }}
      onFinish={onChange}
      requiredMark={false}
      onValuesChange={(_, allValues) => {
        setIsTransparent(allValues.pngBackgroundColor === DefaultConfig.pngBackgroundColor);
      }}
      size="middle"
      onVisibleChange={(visible) => {
        if (!visible) {
          resetScrollTop();
        }
      }}
    >
      <Card
        type="inner"
        title="复制/下载 PNG"
        bordered={false}
        extra={<a onClick={handlePngReset}>恢复默认</a>}
      >
        <Row gutter={16}>
          <Col {...colSpan}>
            <ItemColor
              label="背景颜色"
              name="pngBackgroundColor"
              colorMode="rgb"
              contentAfter={
                !isTransparent && (
                  <a style={{ fontSize: 12 }} onClick={handlePngBgColorTransparent}>
                    设为透明
                  </a>
                )
              }
            />
          </Col>
          {/* <Col {...colSpan}>
              <ItemNumber
                label='图像质量'
                name='pngEncoderOptions'
                inputProps={{ min: 0, max: 1, step: 0.1, precision: 1 }}
                tooltip='图像质量 0-1 之间'
              />
            </Col> */}
          <Col {...colSpan}>
            <ItemNumber
              label="图像尺寸"
              name="pngSize"
              inputProps={{ min: 16, step: 2, precision: 0 }}
              tooltip="宽高必须为2的倍数，且不能小于16"
              required
              extendRules={[
                {
                  validator(rules, value) {
                    if (value % 2 !== 0) {
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
