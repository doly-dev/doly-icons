import * as React from 'react';
import { Empty } from 'antd';
import { useUpdateEffect } from 'rc-hooks';
import { filterClassData } from './dataMain';
import List from './List';
import { getFilterStore, getConfigStore } from './store';
import { formatPx } from './utils';
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
      ({
        '--doly-icon-font-size': formatPx(filter?.fontSize),
        '--doly-icon-color': filter?.color,
      } as React.CSSProperties),
    [filter?.color, filter?.fontSize],
  );

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
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
      <div style={iconWrapperStyles}>
        <Context.Provider value={{ ...filter, ...options }}>
          <List data={result} />
        </Context.Provider>
      </div>
    </div>
  );
};

export default AllIcons;
