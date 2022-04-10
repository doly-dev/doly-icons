import * as React from 'react';
import { Row, Col, Button, Spin, Input } from 'antd';
import {
  BizForm,
  BizFormItem,
  BizFormItemSelect,
  BizFormItemRadio,
  BizFormItemColor,
} from 'antd-more';
import { Square, SquareFill } from 'doly-icons';
import { useDebounceFn } from 'rc-hooks';
import { CategoriesOptions } from './dataMain';
import SizeSlider from './SizeSlider';
import { setAllFilterStore, removeFilterStore, setAllConfigStore } from './store';
import { Theme } from './enum';
import { resetScrollTop } from './utils';
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
          layout="horizontal"
          form={form}
        >
          <Row gutter={16} justify="space-between">
            <Col style={{ width: 180 }}>
              <BizFormItemSelect
                name="category"
                options={CategoriesOptions}
                selectProps={{ size: 'large', onChange: resetScrollTop }}
              />
            </Col>
            <Col>
              <BizFormItemRadio
                name="theme"
                optionType="button"
                options={ThemeOptions}
                radioGroupProps={{ buttonStyle: 'solid', size: 'large' }}
              />
            </Col>
            <Col flex={1}>
              <BizFormItem name="keyword">
                <Input.Search
                  placeholder="输入图标关键字"
                  allowClear
                  size="large"
                  onBlur={resetScrollTop}
                />
              </BizFormItem>
            </Col>
          </Row>
          <Row gutter={[16, 16]} wrap={false}>
            <Col>
              <BizFormItemColor
                name="color"
                style={{ margin: 0 }}
                colorProps={{ size: 'middle' }}
                colorMode="rgb"
              />
            </Col>
            <Col flex={1}>
              <BizFormItem name="fontSize" style={{ margin: 0 }}>
                <SizeSlider inputProps={{ onBlur: resetScrollTop }} />
              </BizFormItem>
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
        </BizForm>
      </Spin>
    );
  },
);

Filter.displayName = 'Filter';

export default Filter;
