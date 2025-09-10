import { App, Empty } from 'antd';
import { useCacheState } from 'rc-hooks';
import React, { CSSProperties, useMemo } from 'react';
import Context, { DefaultConfig, DefaultFilter } from './context';
import { filterClassData } from './dataMain';
import Filter from './Filter';
import styles from './index.module.less';
import List from './List';
import { formatPx, isIE, pkgName, resetScrollTop } from './utils';

const AllIcons = () => {
  const [config, setConfig] = useCacheState(`${pkgName}-config`, DefaultConfig, {
    storage: localStorage
  });
  const [filter, setFilter] = useCacheState(`${pkgName}-filter`, DefaultFilter, {
    storage: localStorage
  });
  const result = useMemo(() => filterClassData(filter), [filter]);
  const timerRef = React.useRef<any>(null);

  const iconWrapperStyles = React.useMemo(
    () =>
      (isIE
        ? {
            fontSize: filter.fontSize,
            color: filter.color
          }
        : {
            '--doly-icon-font-size': formatPx(filter.fontSize),
            '--doly-icon-color': filter.color
          }) as CSSProperties,
    [filter.color, filter.fontSize]
  );

  React.useEffect(() => {
    const footerDom = document.querySelector('.__dumi-default-layout-footer-meta') as HTMLElement;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      resetScrollTop();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (footerDom) {
        footerDom.style.display = 'none';
      }
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (footerDom) {
        footerDom.style.display = '';
      }
    };
  }, []);

  return (
    <App>
      <Context.Provider value={{ ...filter, ...config }}>
        <div className={styles.demo}>
          <div className={styles.formArea}>
            <Filter
              options={config}
              onOptionsChange={setConfig}
              filter={filter}
              onFilterChange={setFilter}
            />
          </div>
          <div style={iconWrapperStyles}>
            {result.length <= 0 ? <Empty description="暂无数据" /> : <List data={result} />}
          </div>
        </div>
      </Context.Provider>
    </App>
  );
};

export default AllIcons;
