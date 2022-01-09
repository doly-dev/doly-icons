import * as React from 'react';
import { Button, Row, Col, Card } from 'antd';
import { BizForm } from 'antd-more';
import { DefaultConfig } from './context';

const { ModalForm, ItemColor, ItemNumber } = BizForm;

const colSpan = {
  span: 12,
};

interface ConfigProps {
  value?: Partial<typeof DefaultConfig>;
  onChange?: (value: typeof DefaultConfig) => void;
}

const Config: React.FC<ConfigProps> = ({ value, onChange }) => {
  const [form] = BizForm.useForm();
  const [visible, setVisible] = React.useState(false);

  const handlePngBgColorTransparent = React.useCallback(() => {
    const fieldsValue = form.getFieldsValue();
    form.setFieldsValue({ ...fieldsValue, pngBackgroundColor: 'transparent' });
  }, [form]);

  const handlePngReset = React.useCallback(() => {
    form.setFieldsValue(DefaultConfig);
  }, [form]);

  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        设置
      </Button>
      <ModalForm
        initialValues={value}
        title="设置"
        form={form}
        modalProps={{
          maskClosable: false,
          destroyOnClose: true,
        }}
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onChange}
        requiredMark={false}
      >
        <Card
          type="inner"
          title="复制/下载 PNG"
          bordered={false}
          extra={<a onClick={handlePngReset}>恢复默认</a>}
        >
          <Row gutter={16}>
            <Col {...colSpan}>
              <BizForm.Item
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.pngBackgroundColor !== curValues.pngBackgroundColor
                }
                noStyle
              >
                {() => (
                  <ItemColor
                    label="背景颜色"
                    name="pngBackgroundColor"
                    colorMode="rgb"
                    contentAfter={
                      form.getFieldValue('pngBackgroundColor') !== 'transparent' && (
                        <a style={{ fontSize: 12 }} onClick={handlePngBgColorTransparent}>
                          设为透明
                        </a>
                      )
                    }
                  />
                )}
              </BizForm.Item>
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
    </>
  );
};

export default Config;
