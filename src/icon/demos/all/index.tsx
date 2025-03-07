import { App, Empty } from 'antd';
import { useSetState } from 'rc-hooks';
import React, { CSSProperties, useMemo } from 'react';
import Context, { DefaultConfig, DefaultFilter } from './context';
import { filterClassData } from './dataMain';
import Filter from './Filter';
import styles from './index.module.less';
import List from './List';
import { getConfigStore, getFilterStore, setAllConfigStore, setAllFilterStore } from './store';
import { formatPx, isIE, resetScrollTop } from './utils';

const AllIcons = () => {
  const [state, setState] = useSetState(() => ({
    filter: getFilterStore() || DefaultFilter,
    options: getConfigStore() || DefaultConfig,
  }));
  const result = useMemo(() => filterClassData(state.filter), [state.filter]);
  const timerRef = React.useRef<any>(null);

  const iconWrapperStyles = React.useMemo(
    () =>
      (isIE
        ? {
            fontSize: state.filter.fontSize,
            color: state.filter.color,
          }
        : {
            '--doly-icon-font-size': formatPx(state.filter?.fontSize),
            '--doly-icon-color': state.filter?.color,
          }) as CSSProperties,
    [state.filter?.color, state.filter?.fontSize],
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
      <Context.Provider value={{ ...state.filter, ...state.options }}>
        <div className={styles.demo}>
          <div className={styles.formArea}>
            <Filter
              options={state.options}
              onOptionsChange={(value) => {
                setState({ options: value });
                setAllConfigStore(value);
              }}
              filter={state.filter}
              onFilterChange={(value) => {
                setState({ filter: value });
                setAllFilterStore(value);
              }}
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
