import * as React from 'react';
import { Row, Col, Button, Spin, Input } from 'antd';
import { BizForm } from 'antd-more';
import { Square, SquareFill } from 'doly-icons';
import { useDebounceFn } from 'rc-hooks';
import { CategoriesOptions } from './dataMain';
import SizeSlider from './SizeSlider';
import { setAllFilterStore, removeFilterStore, setAllConfigStore } from './store';
import { Theme } from './enum';
import { DefaultFilter, DefaultConfig } from './context';
import Config from './Config';

// 图标风格选项
const ThemeOptions = [
  {
    value: Theme.All,
    label: '全部风格',
  },
  {
    value: Theme.Outline,
    label: (
      <>
        <Square /> 线性风格
      </>
    ),
  },
  {
    value: Theme.Fill,
    label: (
      <>
        <SquareFill /> 填充风格
      </>
    ),
  },
];

interface FilterProps {
  options?: typeof DefaultConfig;
  onOptionsChange?: (opts: typeof DefaultConfig) => void;
  filter?: typeof DefaultFilter;
  onFilterChange?: (filterValues: typeof DefaultFilter) => void;
}

const Filter: React.FC<FilterProps> = React.memo(
  ({ options = DefaultConfig, onOptionsChange, filter = DefaultFilter, onFilterChange }) => {
    const [form] = BizForm.useForm();
    const [spinning, setSpinning] = React.useState(false);

    const { run } = useDebounceFn((_, values) => {
      setAllFilterStore(values);
      onFilterChange?.(values);
    }, 300);

    const handleOptionsChange = React.useCallback(
      (opts) => {
        onOptionsChange?.(opts);
        setAllConfigStore(opts);
      },
      [onOptionsChange],
    );

    const handleResetFilter = React.useCallback(() => {
      setSpinning(true);
      removeFilterStore();
      setTimeout(() => window.location.reload(), 50);
    }, []);

    return (
      <Spin spinning={spinning}>
        <BizForm
          initialValues={filter}
          onValuesChange={run}
          hideLabel
          submitter={false}
          size="large"
          form={form}
        >
          <Row gutter={16} justify="space-between">
            <Col style={{ width: 180 }}>
              <BizForm.ItemSelect
                name="category"
                options={CategoriesOptions}
                selectProps={{ showSearch: true }}
              />
            </Col>
            <Col>
              <BizForm.ItemRadio
                name="theme"
                optionType="button"
                options={ThemeOptions}
                radioGroupProps={{ buttonStyle: 'solid' }}
              />
            </Col>
            <Col flex={1}>
              <BizForm.Item name="keyword">
                <Input.Search placeholder="输入图标关键字" allowClear />
              </BizForm.Item>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={4}>
                  <BizForm.ItemColor
                    name="color"
                    label="颜色"
                    hideLabel={false}
                    style={{ margin: 0 }}
                    colorMode="rgb"
                    colorProps={{ size: 'middle' }}
                    colon={false}
                    labelWidth={42}
                  />
                </Col>
                <Col flex={1}>
                  <BizForm.Item
                    name="fontSize"
                    label="尺寸"
                    hideLabel={false}
                    style={{ margin: 0 }}
                    colon={false}
                    labelWidth={42}
                  >
                    <SizeSlider inputProps={{ size: 'middle' }} />
                  </BizForm.Item>
                </Col>
                <Col>
                  <Button type="link" onClick={handleResetFilter}>
                    重置筛选条件
                  </Button>
                </Col>
                <Col>
                  <Config value={options} onChange={handleOptionsChange} />
                </Col>
              </Row>
            </Col>
          </Row>
        </BizForm>
      </Spin>
    );
  },
);

Filter.displayName = 'Filter';

export default Filter;
