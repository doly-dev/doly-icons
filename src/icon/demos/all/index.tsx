import { Empty, FloatButton } from 'antd';
import { Funnel } from 'doly-icons';
import { useUpdateEffect } from 'rc-hooks';
import * as React from 'react';
import Context, { DefaultConfig, DefaultFilter } from './context';
import { filterClassData } from './dataMain';
import Filter from './Filter';
import styles from './index.less';
import List from './List';
import { getConfigStore, getFilterStore } from './store';
import { formatPx, isIE, resetScrollTop } from './utils';

const AllIcons = () => {
  const [filter, setFilter] = React.useState(() => getFilterStore() || DefaultFilter);
  const [options, setOptions] = React.useState(() => getConfigStore() || DefaultConfig);
  const [result, setResult] = React.useState(() => filterClassData(filter));

  useUpdateEffect(() => {
    setResult(filterClassData(filter));
  }, [filter?.keyword, filter?.category, filter?.theme]);

  const iconWrapperStyles = React.useMemo(
    () =>
      isIE
        ? {
            fontSize: filter.fontSize,
            color: filter.color,
          }
        : {
            '--doly-icon-font-size': formatPx(filter?.fontSize),
            '--doly-icon-color': filter?.color,
          },
    [filter?.color, filter?.fontSize],
  );

  React.useEffect(() => {
    const footerDom = document.querySelector('.__dumi-default-layout-footer-meta') as HTMLElement;
    const timer = setTimeout(() => {
      resetScrollTop();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (footerDom) {
        footerDom.style.display = 'none';
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (footerDom) {
        footerDom.style.display = '';
      }
    };
  }, []);

  return (
    <Context.Provider value={{ ...filter, ...options, result }}>
      <div className={styles.demo}>
        <div className={styles.formArea}>
          <Filter
            options={options}
            onOptionsChange={setOptions}
            filter={filter}
            onFilterChange={setFilter}
          />
        </div>
        {result.length <= 0 && <Empty description="暂无数据" />}
        <div style={iconWrapperStyles as React.CSSProperties}>
          <List data={result} />
        </div>
        <FloatButton
          tooltip={`${options.isShowFilter ? '隐藏' : '显示'}筛选项`}
          onClick={() => {
            setOptions((opts) => ({
              ...opts,
              isShowFilter: !opts.isShowFilter,
            }));
          }}
          type={options.isShowFilter ? 'primary' : 'default'}
          icon={<Funnel />}
        />
      </div>
    </Context.Provider>
  );
};

export default AllIcons;
