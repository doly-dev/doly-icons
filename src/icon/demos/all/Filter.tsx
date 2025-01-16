import { Button, Col, Input, Row } from 'antd';
import {
  BizForm,
  BizFormItem,
  BizFormItemColor,
  BizFormItemRadio,
  BizFormItemSelect,
} from 'antd-more';
import { Square, SquareFill } from 'doly-icons';
import { useDebounceFn } from 'rc-hooks';
import * as React from 'react';
import Config from './Config';
import Context, { DefaultConfig, DefaultFilter } from './context';
import { CategoriesOptions } from './dataMain';
import { Theme } from './enum';
import styles from './index.module.less';
import SizeSlider from './SizeSlider';
import { removeFilterStore, setAllConfigStore, setAllFilterStore } from './store';
import { resetScrollTop } from './utils';

// 渲染类别label
function renderCategoryLabel(label: React.ReactNode, rightContent?: React.ReactNode) {
  return (
    <div className={styles.categoryLabel}>
      <span>{label}</span>
      <span>{rightContent || ''}</span>
    </div>
  );
}

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
  ({ options = DefaultConfig, onOptionsChange, filter, onFilterChange }) => {
    const { isShowFilter } = React.useContext(Context);
    const [form] = BizForm.useForm();
    const cateOptions = React.useMemo(
      () =>
        CategoriesOptions.map((item) => ({
          ...item,
          label: renderCategoryLabel(item.label, item.total),
        })),
      [],
    );

    const { run } = useDebounceFn((_, values) => {
      setAllFilterStore(values);
      onFilterChange?.(values);
    }, 100);

    const handleOptionsChange = (opts: typeof DefaultConfig) => {
      const newOpts = { ...opts, isShowFilter };
      onOptionsChange?.(newOpts);
      setAllConfigStore(newOpts);
    };

    const handleResetFilter = () => {
      removeFilterStore();
      form.resetFields();
      onFilterChange?.(DefaultFilter);
    };

    React.useEffect(() => {
      form.setFieldsValue(filter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <BizForm
        initialValues={DefaultFilter}
        onValuesChange={run}
        hideLabel
        submitter={false}
        layout="horizontal"
        form={form}
      >
        <Row gutter={16} justify="space-between" style={!isShowFilter ? { display: 'none' } : {}}>
          <Col style={{ width: 240 }}>
            <BizFormItemSelect
              name="category"
              options={cateOptions}
              selectProps={{ size: 'large', onChange: resetScrollTop }}
            />
          </Col>
          <Col style={{ minWidth: 342 }}>
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
                placeholder="输入图标关键词，如：箭头 下"
                allowClear
                size="large"
                onBlur={resetScrollTop}
              />
            </BizFormItem>
          </Col>
        </Row>
        <Row gutter={[16, 16]} wrap={false}>
          <Col style={{ minWidth: 48 }}>
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
    );
  },
);

Filter.displayName = 'Filter';

export default Filter;
