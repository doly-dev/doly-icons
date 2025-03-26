import React from 'react';
import { isEqual } from 'ut2';
import { App, Button, Card, Col, Row } from 'antd';
import { SingleValueType } from 'antd/es/color-picker/interface';
import {
  BizForm,
  BizFormItemColorPicker,
  BizFormItemNumber,
  BizFormItemSelect,
  BizDrawerForm,
} from 'antd-more';
import { BoolTypeOptions, ClickIconActionOptions } from './constants';
import { DefaultConfig } from './context';
import styles from './index.module.less';
import { resetScrollTop } from './utils';

const colSpan = {
  span: 24,
};

interface ConfigProps {
  value: Partial<typeof DefaultConfig>;
  onChange: (value: typeof DefaultConfig) => void;
}

const Config: React.FC<ConfigProps> = ({ value, onChange }) => {
  const { message } = App.useApp();
  const [form] = BizForm.useForm();

  return (
    <BizDrawerForm
      trigger={<Button type="link">设置</Button>}
      title="设置"
      form={form}
      submitter={false}
      requiredMark={false}
      size="middle"
      onOpenChange={(visible) => {
        if (!visible) {
          const formValues = form.getFieldsValue();
          if (!isEqual(value, formValues)) {
            onChange(formValues);
            message.success('设置成功');
          }
          resetScrollTop();
        } else {
          form.setFieldsValue(value);
        }
      }}
      initialValues={DefaultConfig}
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
            extra={<a onClick={() => form.resetFields()}>恢复默认</a>}
          >
            <BizFormItemColorPicker
              label="背景颜色"
              name="pngBackgroundColor"
              normalize={(v: SingleValueType) =>
                v === 'transparent'
                  ? DefaultConfig.pngBackgroundColor
                  : BizFormItemColorPicker.transformColor(v, 'rgb')
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
              inputNumberProps={{ min: 16, step: 2, precision: 0 }}
              tooltip="宽高必须为2的倍数，不能小于16"
              normalize={(value) => (value % 2 > 0 ? value + 1 : value)}
              required
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
            <BizFormItemSelect label="显示筛选表单" name="isShowFilter" options={BoolTypeOptions} />
          </Card>
        </Col>
      </Row>
    </BizDrawerForm>
  );
};

export default Config;
