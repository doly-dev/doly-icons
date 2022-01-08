import * as React from 'react';
import { Row, Col, Button, Spin, Empty } from 'antd';
import { useUpdateEffect } from 'rc-hooks';
import { Square, SquareFill } from 'doly-icons';
import { CategoriesOptions, filterClassData } from './dataMain';
import Color from './components/color';
import SizeSlider from './components/size-slider';
import Radio from './components/radio';
import Select from './components/select';
import Search from './components/search';
import List from './List';
import { getFilterStore, setAllFilterStore, removeFilterStore } from './store';
import { Theme } from './enum';
import { formatPx } from './utils';
import styles from './index.less';

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

const AllIcons = () => {
  const [keyword, setKeyword] = React.useState(() => getFilterStore('keyword'));
  const [theme, setTheme] = React.useState(() => getFilterStore('theme') || Theme.All);
  const [category, setCategory] = React.useState(
    () => getFilterStore('category') || CategoriesOptions[0].value,
  );
  const [color, setColor] = React.useState(() => getFilterStore('color') || '#333');
  const [fontSize, setFontSize] = React.useState(() => getFilterStore('fontSize') || 32);

  const [spinning, setSpinning] = React.useState(false);

  const [result, setResult] = React.useState(() => filterClassData({ keyword, category, theme }));

  useUpdateEffect(() => {
    setAllFilterStore({ keyword, theme, category, color, fontSize });
  }, [category, color, fontSize, keyword, theme]);

  useUpdateEffect(() => {
    setResult(filterClassData({ keyword, category, theme }));
  }, [keyword, category, theme]);

  const removeFilter = React.useCallback(() => {
    setSpinning(true);
    removeFilterStore();
    setTimeout(() => window.location.reload(), 50);
  }, []);

  const iconWrapperStyles = React.useMemo(
    () => ({
      '--doly-icon-font-size': formatPx(fontSize),
      '--doly-icon-color': color,
    }),
    [color, fontSize],
  );

  return (
    <div className={styles.demo}>
      <div className={styles.formArea}>
        <Spin spinning={spinning}>
          <Row gutter={[16, 16]} justify="space-between">
            <Col>
              <Select
                options={CategoriesOptions}
                defaultValue={category}
                onChange={setCategory}
                size="large"
                style={{ minWidth: 180, width: '100%', display: 'block' }}
              />
            </Col>
            <Col>
              <Radio
                optionType="button"
                buttonStyle="solid"
                size="large"
                options={ThemeOptions}
                defaultValue={theme}
                onChange={setTheme}
              />
            </Col>
            <Col flex={1}>
              <Search
                size="large"
                placeholder="输入图标关键字"
                defaultValue={keyword}
                onChange={setKeyword}
              />
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col>
                  <Row gutter={8}>
                    <Col style={{ lineHeight: '32px' }}>颜色</Col>
                    <Col flex={1}>
                      <Color value={color} onChange={setColor} />
                    </Col>
                  </Row>
                </Col>
                <Col flex={1}>
                  <Row gutter={8}>
                    <Col style={{ lineHeight: '32px' }}>尺寸</Col>
                    <Col flex={1}>
                      <SizeSlider defaultValue={fontSize} onChange={setFontSize} wait={100} />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Button type="link" onClick={removeFilter}>
                    重置筛选条件
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Spin>
      </div>
      {result.length <= 0 && <Empty description="暂无数据" />}
      <div style={iconWrapperStyles}>
        {result.map((clsItem) => (
          <List key={clsItem.title} fontSize={fontSize} color={color} {...clsItem} />
        ))}
      </div>
    </div>
  );
};

export default AllIcons;
