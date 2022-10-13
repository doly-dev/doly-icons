import * as React from 'react';
import { Empty } from 'antd';
import { useUpdateEffect } from 'rc-hooks';
import { filterClassData } from './dataMain';
import List from './List';
import { getFilterStore, getConfigStore } from './store';
import { formatPx, resetScrollTop, isIE } from './utils';
import Context, { DefaultFilter, DefaultConfig } from './context';
import Filter from './Filter';
import styles from './index.less';

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
        <Context.Provider value={{ ...filter, ...options }}>
          <List data={result} />
        </Context.Provider>
      </div>
    </div>
  );
};

export default AllIcons;
